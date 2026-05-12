"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Nav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center text-sm font-semibold tracking-wide text-stone-300 uppercase">
        <h1 className="w-full sm:w-auto sm:mb-0 text-center mb-3 text-xl sm:text-base text-emerald-500 sm:mr-8">Jonas Nim Røssum</h1>
        <li>
          <Link
            prefetch="auto"
            className={`block border-b-2 px-4 py-2 transition-colors hover:text-emerald-400 ${
              pathname === "/"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent hover:border-stone-500/50"
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
            className={`block border-b-2 px-4 py-2 transition-colors hover:text-emerald-400 ${
              pathname === "/cv" || pathname === "/cv/pdf" // Depending on nested paths
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent hover:border-stone-500/50"
            }`}
            href="/cv"
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            className="block border-b-2 border-transparent px-4 py-2 transition-colors hover:border-stone-500/50 hover:text-emerald-400"
            href="https://github.com/nimrossum"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="block border-b-2 border-transparent px-4 py-2 transition-colors hover:border-stone-500/50 hover:text-emerald-400"
            href="https://www.linkedin.com/in/jonasnimrossum"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="block border-b-2 border-transparent px-4 py-2 transition-colors hover:border-stone-500/50 hover:text-emerald-400"
            href="https://bsky.app/profile/jonas.nimrossum.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bluesky
          </Link>
        </li>
        <li>
          <Link
            className="block border-b-2 border-transparent px-4 py-2 transition-colors hover:border-stone-500/50 hover:text-emerald-400"
            href="mailto:hello@nimrossum.com"
          >
            Email
          </Link>
        </li>
      </ul>
    </nav>
  )
}
