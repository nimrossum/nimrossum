"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Nav() {
  const pathname = usePathname()
  const linkClass =
    "block border-b-2 px-4 py-2 transition-colors hover:border-[#d6b36a]/50 hover:text-[#f0d894]"

  return (
    <nav aria-label="Primary" className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center text-sm font-semibold tracking-wide text-[#d7d8cf] uppercase">
        <h1 className="font-heading mb-3 w-full text-center text-xl tracking-normal text-[#f0d894] sm:mr-8 sm:mb-0 sm:w-auto sm:text-base">
          Jonas Nim Røssum
        </h1>
        <li>
          <Link
            prefetch="auto"
            className={`${linkClass} ${
              pathname === "/"
                ? "border-[#d6b36a] text-[#f0d894]"
                : "border-transparent"
            }`}
            href="/"
            title="Home"
          >
            <span aria-hidden>~/</span>Home
          </Link>
        </li>
        <li>
          <Link
            prefetch="auto"
            className={`${linkClass} ${
              pathname === "/cv" || pathname === "/cv/pdf" // Depending on nested paths
                ? "border-[#d6b36a] text-[#f0d894]"
                : "border-transparent"
            }`}
            href="/cv"
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            className={`${linkClass} border-transparent`}
            href="https://github.com/nimrossum"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className={`${linkClass} border-transparent`}
            href="https://www.linkedin.com/in/jonasnimrossum"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className={`${linkClass} border-transparent`}
            href="https://bsky.app/profile/jonas.nimrossum.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bluesky
          </Link>
        </li>
        <li>
          <Link
            className={`${linkClass} border-transparent`}
            href="mailto:hello@nimrossum.com"
          >
            Email
          </Link>
        </li>
      </ul>
    </nav>
  )
}
