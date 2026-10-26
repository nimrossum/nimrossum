"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Nav() {
  const pathname = usePathname()
  const linkClass =
    "theme-nav-link block border-b-2 px-4 py-2 transition-colors"

  return (
    <nav aria-label="Primary" className="flex justify-center">
      <ul className="theme-muted flex flex-wrap items-center justify-center text-sm font-semibold tracking-wide uppercase">
        <h1 className="font-heading theme-accent mb-3 w-full text-center text-xl tracking-normal sm:mr-8 sm:mb-0 sm:w-auto sm:text-base">
          Jonas Nim Røssum
        </h1>
        <li>
          <Link
            prefetch="auto"
            className={`${linkClass} ${
              pathname === "/"
                ? "theme-accent border-[var(--accent)]"
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
                ? "theme-accent border-[var(--accent)]"
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
