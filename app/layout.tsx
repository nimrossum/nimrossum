import { Nav } from "./nav"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
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
      className={cn(inter.variable, outfit.variable, "antialiased")}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📃</text></svg>"
        />
      </head>
      <body className={cn("relative bg-[#151712] font-sans text-stone-100")}>
        <div className="relative min-h-dvh bg-[#151712] print:min-h-0">
          <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pt-6 pb-10 md:px-7 lg:px-10 print:block print:min-h-0 print:p-0">
            <header className="py-2 print:hidden">
              <Nav />
            </header>

            <main className="mt-6 flex-1 print:mt-0 print:flex-none">
              {children}
            </main>
          </div>
          <footer className="mt-6 border-t border-white/10 bg-[#10120e] py-2 pt-6 pb-10 print:hidden">
            <Nav />
          </footer>
        </div>
      </body>
    </html>
  )
}
