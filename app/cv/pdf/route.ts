export const dynamic = "force-dynamic"

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
      displayHeaderFooter: false,
      printBackground: true,
    })

    await browser.close()

    return pdf
  } catch {
    // Playwright not available
    return null
  }
}

async function renderPdfWithBrowserless(
  sourceUrl: string,
  browserlessToken: string,
  browserlessUrl: string,
): Promise<Response> {
  const response = await fetch(browserlessUrl, {
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

  if (!response.ok) {
    return new Response(`Browserless request failed with ${response.status}`, {
      status: 502,
    })
  }

  const body = new Uint8Array(await response.arrayBuffer())

  return new Response(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Jonas Nim Røssum.pdf"',
    },
  })
}

export async function GET(request: Request) {
  const sourceUrl = new URL("/cv", request.url).toString()
  const isProduction = process.env.VERCEL === "1"

  // In development, try local Playwright first
  if (!isProduction) {
    const pdf = await renderPdfWithPlaywright(sourceUrl)
    if (pdf) {
      return new Response(new Uint8Array(pdf), {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": 'inline; filename="Jonas Nim Røssum.pdf"',
        },
      })
    }
    // If local Playwright fails, fall back to Browserless below
  }

  // Fallback to Browserless (always in production, or if local Playwright fails in dev)
  const browserlessToken = process.env.BROWSERLESS_API_KEY

  if (!browserlessToken) {
    return new Response("Missing BROWSERLESS_API_KEY", { status: 500 })
  }

  const browserlessUrl =
    process.env.BROWSERLESS_URL ??
    `https://production-sfo.browserless.io/pdf?token=${browserlessToken}`

  return renderPdfWithBrowserless(sourceUrl, browserlessToken, browserlessUrl)
}
