import { Nav } from "./nav"
import type { Metadata } from "next"
import { Inter, Outfit, Roboto } from "next/font/google"
import "./globals.css"
import { cn } from "./styling"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
  display: "swap",
})

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
    <html
      lang="en"
      className={cn(
        inter.variable,
        outfit.variable,
        roboto.variable,
        "antialiased",
      )}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📃</text></svg>"
        />
      </head>
      <body className={cn("theme-page relative font-sans text-stone-100")}>
        <div className="theme-page relative min-h-dvh print:min-h-0">
          <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pt-6 pb-10 md:px-7 lg:px-10 print:block print:min-h-0 print:p-0">
            <header className="py-2 print:hidden">
              <Nav />
            </header>

            <main className="mt-6 flex-1 print:mt-0 print:flex-none">
              {children}
            </main>
          </div>
          <footer className="theme-panel-alt mt-6 border-t border-white/10 py-2 pt-6 pb-10 print:hidden">
            <Nav />
          </footer>
        </div>
      </body>
    </html>
  )
}
