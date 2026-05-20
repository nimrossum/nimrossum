import { Nav } from "./nav"
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "./styling"

export const metadata: Metadata = {
  title: "Jonas Nim Røssum - Resumé",
  description: "Personal resumé of Jonas Nim Røssum",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📃</text></svg>"
        />
      </head>
      <body
        className={cn("relative bg-stone-950 text-stone-100 antialiased")}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.08),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_50%_82%,rgba(16,185,129,0.04),transparent_32%)] print:hidden"
          aria-hidden
        />
        <div className="relative min-h-dvh bg-stone-950 print:min-h-0">
          <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pt-6 pb-10 md:px-7 lg:px-10 print:block print:min-h-0 print:p-0">
            <header className="py-2 print:hidden">
              <Nav />
            </header>

            <main className="mt-6 flex-1 print:mt-0 print:flex-none">
              {children}
            </main>
          </div>
          <footer className="mt-6 bg-emerald-950/50 py-2 pt-6 pb-10 print:hidden">
            <Nav />
          </footer>
        </div>
      </body>
    </html>
  )
}
