import { get, put } from "@vercel/blob"
export const dynamic = "force-dynamic"

const PDF_HEADERS = {
  "Content-Type": "application/pdf",
  "Content-Disposition": 'inline; filename="Jonas Nim Røssum - CV.pdf"',
}

function logPdfEvent(
  message: string,
  details: Record<string, string | number | boolean | null | undefined> = {},
) {
  console.info("[cv/pdf]", message, details)
}

function getPdfCachePath(gitHistoryHash: string | undefined): string | null {
  if (!gitHistoryHash) {
    return null
  }

  return `cv/pdf/${gitHistoryHash}.pdf`
}

function getPdfSourceUrl(request: Request): string {
  const sourceUrl = new URL("/cv", request.url)

  try {
    const override = process.env.CV_PDF_SOURCE_URL
    if (override) {
      return new URL(sourceUrl.pathname, override).toString()
    }

    const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL
    if (productionDomain) {
      return new URL(
        sourceUrl.pathname,
        `https://${productionDomain}`,
      ).toString()
    }
  } catch {
    // Fall through to request URL when env configuration is invalid
  }

  return sourceUrl.toString()
}

async function getPdfFromBlobCache(
  pdfCachePath: string,
): Promise<Buffer | null> {
  try {
    const blob = await get(pdfCachePath, { access: "private" })
    if (!blob) {
      return null
    }

    return Buffer.from(await new Response(blob.stream).arrayBuffer())
  } catch {
    return null
  }
}

async function putPdfInBlobCache(pdfCachePath: string, pdf: Buffer) {
  try {
    await put(pdfCachePath, pdf, {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/pdf",
    })
  } catch {
    // Cache write failures should not break PDF rendering
  }
}

function createPdfResponse(pdf: Buffer, source: string) {
  logPdfEvent("Serving PDF", { source, bytes: pdf.length })

  const body = new Uint8Array(pdf.length)
  body.set(pdf)
  return new Response(body, {
    headers: {
      ...PDF_HEADERS,
      "X-CV-PDF-Source": source,
    },
  })
}

async function getFallbackPdfResponse(
  request: Request,
): Promise<Response | null> {
  const fallbackPdfUrls = [
    process.env.CV_FALLBACK_PDF_URL,
    new URL("/cv.pdf", request.url).toString(),
  ].filter((url): url is string => Boolean(url))

  for (const fallbackPdfUrl of fallbackPdfUrls) {
    logPdfEvent("Trying fallback PDF", { url: fallbackPdfUrl })

    try {
      const response = await fetch(fallbackPdfUrl)
      if (!response.ok) {
        console.warn("[cv/pdf] Fallback PDF failed", {
          url: fallbackPdfUrl,
          status: response.status,
          statusText: response.statusText,
        })
        continue
      }

      const pdf = Buffer.from(await response.arrayBuffer())
      return createPdfResponse(pdf, `fallback:${fallbackPdfUrl}`)
    } catch (error) {
      console.warn("[cv/pdf] Fallback PDF request errored", {
        url: fallbackPdfUrl,
        error,
      })
      // Keep trying other fallback locations
    }
  }

  console.warn("[cv/pdf] No fallback PDF succeeded")
  return null
}

async function renderPdfWithPlaywright(
  sourceUrl: string,
): Promise<Buffer | null> {
  try {
    const { chromium } = await import("playwright")
    const browser = await chromium.launch()
    const page = await browser.newPage()

    await page.goto(sourceUrl, { waitUntil: "networkidle" })

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    })

    await browser.close()

    return Buffer.from(pdf)
  } catch (error) {
    console.error("Error occurred while rendering PDF with Playwright:", error)
    // Playwright not available
    return null
  }
}

async function renderPdfWithBrowserless(
  sourceUrl: string,
  browserlessUrl: string,
): Promise<Response> {
  let response: Response
  try {
    response = await fetch(browserlessUrl, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: sourceUrl,
        options: {
          displayHeaderFooter: false,
          format: "A4",
          printBackground: true,
        },
      }),
    })
  } catch {
    return new Response("Browserless request failed", { status: 502 })
  }

  if (!response.ok) {
    return new Response(`Browserless request failed with ${response.status}`, {
      status: 502,
    })
  }

  const body = Buffer.from(await response.arrayBuffer())

  return new Response(body, {
    headers: PDF_HEADERS,
  })
}

export async function GET(request: Request) {
  const sourceUrl = getPdfSourceUrl(request)
  const isProduction = process.env.VERCEL === "1"
  const pdfCachePath = getPdfCachePath(process.env.VERCEL_GIT_COMMIT_SHA)

  logPdfEvent("PDF request started", {
    sourceUrl,
    isProduction,
    hasCachePath: Boolean(pdfCachePath),
    hasBrowserlessToken: Boolean(process.env.BROWSERLESS_API_KEY),
  })

  if (pdfCachePath) {
    const cachedPdf = await getPdfFromBlobCache(pdfCachePath)
    if (cachedPdf) {
      return createPdfResponse(cachedPdf, "blob-cache")
    }

    logPdfEvent("Blob cache miss", { pdfCachePath })
  }

  // In development, try local Playwright first
  if (!isProduction) {
    logPdfEvent("Trying local Playwright", { sourceUrl })
    const pdf = await renderPdfWithPlaywright(sourceUrl)
    if (pdf) {
      if (pdfCachePath) {
        await putPdfInBlobCache(pdfCachePath, pdf)
      }
      return createPdfResponse(pdf, "playwright")
    }
    console.warn("[cv/pdf] Local Playwright did not return a PDF")
    // If local Playwright fails, fall back to Browserless below
  }

  // Fallback to Browserless (always in production, or if local Playwright fails in dev)
  const browserlessToken = process.env.BROWSERLESS_API_KEY

  if (!browserlessToken) {
    console.warn("[cv/pdf] Missing BROWSERLESS_API_KEY, trying fallback PDF")
    return (
      (await getFallbackPdfResponse(request)) ??
      new Response("Missing BROWSERLESS_API_KEY", { status: 500 })
    )
  }

  const browserlessUrl =
    process.env.BROWSERLESS_URL ??
    `https://production-sfo.browserless.io/pdf?token=${browserlessToken}`

  logPdfEvent("Trying Browserless", {
    sourceUrl,
    url: browserlessUrl.replace(browserlessToken, "[redacted]"),
  })

  const browserlessResponse = await renderPdfWithBrowserless(
    sourceUrl,
    browserlessUrl,
  )

  if (!browserlessResponse.ok) {
    console.error(
      "Browserless rendering failed with status",
      browserlessResponse.status +
        " " +
        browserlessResponse.statusText +
        (await browserlessResponse.text()),
    )
    return (await getFallbackPdfResponse(request)) ?? browserlessResponse
  }

  const pdf = Buffer.from(await browserlessResponse.arrayBuffer())
  if (pdfCachePath) {
    await putPdfInBlobCache(pdfCachePath, pdf)
  }

  return createPdfResponse(pdf, "browserless")
}
