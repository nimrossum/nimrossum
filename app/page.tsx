"use client"

import Image from "next/image"
import Link from "next/link"
import profileImg from "./profile_transparent.png"
import { mdiArrowDown } from "@mdi/js"
import { Route } from "next"
import { useState } from "react"
import {
  DocumentDuplicateIcon,
  CheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"

export default function Home() {
  const [filter, setFilter] = useState("All")
  const [copied, setCopied] = useState(false)

  const experiences = [
    {
      year: "2024 — 2026",
      category: "Open Source",
      title: "Git Truck (v3 + v4)",
      role: "Thesis Researcher & Maintainer • TypeScript / React",
      body: "Next-gen Git visualization tool; led the migration to Vite, developed new contributor-focused features, optimized performance, and handled continuous CLI distribution.",
      href: "https://github.com/git-truck/git-truck",
    },
    {
      year: "2023",
      category: "Publications & Talks",
      title: "Mindster Booster Talk",
      role: "Speaker",
      body: "Gave a technical deep-dive on using spring animations in React to power the Git Truck visualization engine.",
      href: "https://docs.google.com/presentation/d/1Asu-LneYJ5lT2-fgLgeJssDoEicGKCLJPAsB-_B0FIk/edit?usp=sharing",
    },
    {
      year: "2023",
      category: "Professional",
      title: "Internal Advisor Platform (via IT Minds)",
      role: "Frontend Developer • Vue / TypeScript / .NET",
      body: "Built uptime dashboards, complex table views, and internal tools for advisors at PensionDanmark as a consultant via IT Minds, giving stakeholders clearer insight into system status and helping teams respond more confidently to operational issues.",
    },
    {
      year: "2022",
      category: "Professional",
      title: "Life Cycle Assessment Platform (via IT Minds)",
      role: "Frontend Developer • React / TypeScript / GraphQL",
      body: "Developed a LCA platform to track CO2 emissions for COWI and Arkitema as a consultant for IT Minds. Built interactive emission charts and complex data visualizations.",
    },
    {
      year: "2022",
      category: "Publications & Talks",
      title: "React Meetup Copenhagen",
      role: "Speaker",
      body: "Presented on integrating D3 data visualizations with React and animating them efficiently.",
      href: "https://docs.google.com/presentation/d/1Y4F7MvAmzfMUkTKEx86XEpJLnhaboOW9O-OHNxumQRM/edit?usp=sharing",
    },
    {
      year: "2022",
      category: "Publications & Talks",
      title: "IEEE VISSOFT 2022 Presentation",
      role: "Speaker",
      body: "Presented Git Truck research at the 10th IEEE Working Conference on Software Visualization.",
    },
    {
      year: "2022",
      category: "Publications & Talks",
      title:
        "Git-Truck: Hierarchy-Oriented Visualization of Git Repository Evolution",
      role: "Co-Author",
      body: "Co-authored and published research on polymetric visualization of Git repository structures.",
      href: "https://github.com/git-truck/papers/blob/master/Hierarchy%20Oriented%20Visualizationof%20Git%20Repository%20Evolution%20(VISSOFT22).pdf",
    },
    {
      year: "2022 — 2023",
      category: "Open Source",
      title: "Git Truck (v1 — v1.6)",
      role: "Co-creator & Maintainer • TypeScript / React",
      body: "Primary maintainer; engineered the core stack and data visualization architecture, mentored contributors, and drove the migration from Remix to React Router.",
      href: "https://git-truck.github.io/",
    },
    {
      year: "2021",
      category: "Open Source",
      title: "Pollo Pollo",
      role: "Software Developer & CI Coordinator • React / ASP.NET",
      body: "Led a 10-person team contributing to a decentralized charitable platform. Established pull request workflows, CI/CD pipelines, and coding standards.",
      href: "https://web.archive.org/web/20221011150520/https://pollopollo.org/",
    },
    {
      year: "2020",
      category: "Open Source",
      title: "Bong Maps",
      role: "Software Developer • Java / JavaFX / GIS",
      body: "Developed an open-source desktop GIS mapping application in a 5-person team with fast OSM rendering and address parsing. Mentored peers in Git best practices.",
      href: "https://github.com/bong-inc/bong-maps",
    },
    {
      year: "2018",
      category: "Professional",
      title: "DroneAlliancen",
      role: "Web Developer • HTML / CSS / Design",
      body: "Developed and designed the website for a drone company alliance.",
    },
    {
      year: "2016",
      category: "Professional",
      title: "Trustmint",
      role: "Web Developer • HTML / CSS / JS / Design",
      body: "Developed and designed the website and twitter timeline for a digital trust firm.",
    },
    {
      year: "2016 — 2019",
      category: "Professional",
      title: "Dansk Drone Kompagni",
      role: "Full-stack Developer • TypeScript / React / .NET / GIS",
      body: "Built B2B web applications for geospatial data visualization including Ortomatic, Video Map, and Inspecto. Engineered advanced map tooling and serverless PDF exports.",
      href: "https://www.dronekompagniet.dk/produkter/software/",
    },
    {
      year: "2012",
      category: "Professional",
      title: "HydroJail",
      role: "Full-stack Developer • PHP / MySQL / JavaScript",
      body: "Designed and developed a custom CMS featuring user authentication, a live-updating chat wall, voting system, and administrative panel.",
      href: "https://web.archive.org/web/20120623133748/http://www.hydrojail.dk/",
    },
  ] satisfies Array<{
    year: string
    category: "Professional" | "Open Source" | "Publications & Talks"
    title: string
    role: string
    body: string
    href?: string
  }>

  const categories = [
    "All",
    "Professional",
    "Open Source",
    "Publications & Talks",
  ] as const

  const categoryStyles = {
    All: {
      activeText: "text-stone-300",
      activeBg: "bg-stone-500/20",
      activeBorder: "border-stone-500/50",
      activeShadow: "shadow-[0_0_8px_rgba(100,116,139,0.2)]",
      badgeActiveText: "text-stone-200",
      badgeActiveBg: "bg-stone-500/30",
    },
    Professional: {
      activeText: "text-blue-300",
      activeBg: "bg-blue-500/20",
      activeBorder: "border-blue-500/50",
      activeShadow: "shadow-[0_0_8px_rgba(59,130,246,0.2)]",
      badgeActiveText: "text-blue-200",
      badgeActiveBg: "bg-blue-500/30",
      timelineNode:
        "border-blue-500 group-hover:scale-[1.3] group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]",
      timelineLine:
        "bg-blue-500/30 group-hover:bg-blue-500/80 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.3)]",
      timelineDot:
        "border-blue-500/50 group-hover:scale-[1.3] group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]",
      cardHoverBorder: "hover:border-blue-500/40",
      titleHover: "group-hover:text-blue-400",
      yearText: "text-blue-200/70 border-blue-500/20",
    },
    "Open Source": {
      activeText: "text-emerald-300",
      activeBg: "bg-emerald-500/20",
      activeBorder: "border-emerald-500/50",
      activeShadow: "shadow-[0_0_8px_rgba(16,185,129,0.2)]",
      badgeActiveText: "text-emerald-200",
      badgeActiveBg: "bg-emerald-500/30",
      timelineNode:
        "border-emerald-500 group-hover:scale-[1.3] group-hover:bg-emerald-500 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)]",
      timelineLine:
        "bg-emerald-500/30 group-hover:bg-emerald-500/80 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.3)]",
      timelineDot:
        "border-emerald-500/50 group-hover:scale-[1.3] group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.4)]",
      cardHoverBorder: "hover:border-emerald-500/40",
      titleHover: "group-hover:text-emerald-400",
      yearText: "text-emerald-200/70 border-emerald-500/20",
    },
    "Publications & Talks": {
      activeText: "text-violet-300",
      activeBg: "bg-violet-500/20",
      activeBorder: "border-violet-500/50",
      activeShadow: "shadow-[0_0_8px_rgba(139,92,246,0.2)]",
      badgeActiveText: "text-violet-200",
      badgeActiveBg: "bg-violet-500/30",
      timelineNode:
        "border-violet-500 group-hover:scale-[1.3] group-hover:bg-violet-500 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)]",
      timelineLine:
        "bg-violet-500/30 group-hover:bg-violet-500/80 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.3)]",
      timelineDot:
        "border-violet-500/50 group-hover:scale-[1.3] group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]",
      cardHoverBorder: "hover:border-violet-500/40",
      titleHover: "group-hover:text-violet-400",
      yearText: "text-violet-200/70 border-violet-500/20",
    },
  } as const

  const filteredExperiences = experiences.filter(
    (exp) => filter === "All" || exp.category === filter,
  )

  const toyProjects = [
    {
      year: "2023",
      title: "Takt",
      role: "React",
      body: "Browser-based beat-maker featuring an intuitive step sequencer.",
      href: "https://takt.nimrossum.com/",
    },
    {
      year: "2023",
      title: "Stræk",
      role: "Vue 3 / Tailwind",
      body: "Stretching companion app providing interactive, guided flows and timers.",
      href: "https://straek.nimrossum.com/",
    },
    {
      year: "2023",
      title: "Pind",
      role: "TypeScript / Next.js / tRPC / Prisma / Tailwind",
      body: "Knitting project helper for tracking progress.",
      href: "https://pind.nimrossum.com/",
    },
    {
      year: "2022",
      title: "Klods",
      role: "React",
      body: "A tetris inspired puzzle game built with React.",
      href: "https://klods.nimrossum.com/",
    },
    {
      year: "2022",
      title: "Ordle",
      role: "React",
      body: "Danish Wordle clone.",
    },
    {
      year: "2021",
      title: "Fruit Rush",
      role: "React",
      body: "Browser-based local multiplayer action game with native controller support utilizing the Web Gamepad API.",
      href: "https://fruit-rush.nimrossum.com/",
    },
    {
      year: "2021",
      title: "Dyk",
      role: "React",
      body: "A lightweight web game where players plummet into the ocean to catch fish.",
      href: "https://dyk.nimrossum.com/",
    },
    {
      year: "2017",
      title: "Tomato Hours",
      role: "React / Redux / Material Design",
      body: "A Pomodoro timer application focused on simplicity and hourly salary tracking.",
      href: "https://tomato-hours.nimrossum.com/",
    },
  ]

  return (
    <div className="flex flex-col gap-12">
      <section className="mx-auto flex min-h-[calc(100dvh-10rem)] flex-col justify-evenly">
        <div className="mx-auto w-full max-w-6xl rounded-md bg-linear-to-br from-emerald-800/80 via-stone-900 to-stone-950 p-px shadow-md shadow-black/30">
          <div className="flex flex-col-reverse items-center gap-10 rounded-md border bg-stone-950/95 p-6 sm:flex-row lg:p-12">
            <div className="max-w-3xl">
              <h1 className="mb-2 bg-linear-to-br from-stone-100 to-stone-400 bg-clip-text font-mono text-4xl leading-none font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Jonas Nim Røssum
              </h1>
              <p className="font-mono text-sm tracking-widest text-emerald-400/90 uppercase">
                Full Stack developer &middot; based in Copenhagen
              </p>
              <p className="mt-8 max-w-2xl text-2xl leading-tight font-medium text-stone-200 sm:text-3xl lg:leading-[1.1]">
                <span className="whitespace-nowrap">
                  Web Apps
                  <span className="mx-3 text-emerald-500/50">&middot;</span>
                </span>
                <span className="whitespace-nowrap">
                  Data Viz
                  <span className="mx-3 text-emerald-500/50">&middot;</span>
                </span>
                <span className="whitespace-nowrap">ML</span>
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  target="_blank"
                  prefetch="auto"
                  href={"/cv/pdf" as Route}
                  className="flex items-center gap-2 rounded-sm bg-linear-to-t from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-bold text-stone-900 transition hover:to-emerald-400"
                >
                  <DocumentTextIcon className="size-5" />
                  CV (PDF)
                </Link>
                <div className="relative z-0 inline-flex">
                  <a
                    target="_blank"
                    href="mailto:hello@nimrossum.com"
                    className="group relative flex items-center gap-2 rounded-sm border border-emerald-500/60 bg-emerald-950 px-5 py-3 text-sm font-bold text-emerald-100 transition-all duration-200 ease-out before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:translate-x-0 before:translate-y-0 before:transform before:rounded-sm before:border before:border-emerald-400/60 before:transition-all before:duration-200 before:ease-out before:will-change-transform hover:border-emerald-300 hover:bg-emerald-900 hover:text-emerald-100 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:before:translate-x-2 hover:before:translate-y-2 hover:before:border-emerald-300 hover:before:shadow-[0_0_18px_rgba(16,185,129,0.45)]"
                  >
                    <EnvelopeIcon className="size-5" />
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[320px]">
              <div
                className="absolute -inset-3 rounded-sm bg-emerald-400/10 blur-2xl"
                aria-hidden
              />
              <div className="rounded-b-lg bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(16,185,129,0.08)_4%,rgba(16,185,129,0.65)_100%)] p-px shadow-black/30">
                <div className="overflow-hidden rounded-b-lg bg-stone-950/95">
                  <Image
                    src={profileImg}
                    alt="Portrait of Jonas"
                    className="relative aspect-4/5 w-full object-cover shadow-sm brightness-95"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#projects"
          className="group text-md mx-auto mt-16 flex flex-col items-center gap-2 font-medium text-stone-400 transition hover:text-emerald-300"
        >
          Explore work{" "}
          <svg
            viewBox="0 0 24 24"
            className="animate-hover size-6 transition-transform group-hover:translate-y-1"
          >
            <path d={mdiArrowDown} fill="currentColor" />
          </svg>
        </a>
      </section>

      <section
        className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:grid-rows-[auto_1fr] lg:items-start"
        id="projects"
      >
        <div className="order-2 rounded-sm border border-stone-800 bg-stone-900/85 shadow-md shadow-black/20 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="mb-3 text-xl leading-loose font-semibold text-stone-300">
              Selected Work & Projects
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? experiences.length
                      : experiences.filter((e) => e.category === cat).length
                  const style = categoryStyles[cat]
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                        filter === cat
                          ? `border ${style.activeBorder} ${style.activeBg} ${style.activeText} ${style.activeShadow}`
                          : "border border-stone-800 bg-stone-950/50 text-stone-400 hover:border-stone-600 hover:text-stone-300"
                      }`}
                    >
                      {cat}
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none transition-colors ${
                          filter === cat
                            ? `${style.badgeActiveBg} ${style.badgeActiveText}`
                            : "bg-stone-800 text-stone-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="relative mt-7">
              {/* Continuous vertical line for the timeline */}
              <div className="absolute top-8 bottom-10 left-2.75 w-0.5 bg-stone-800/80" />

              <div className="flex flex-col gap-4">
                {filteredExperiences.map((item) => {
                  const isMultiYear =
                    item.year.includes("—") || item.year.includes("-")
                  const style = categoryStyles[item.category]
                  return (
                    <div
                      key={`${item.year}-${item.title}`}
                      className="group relative flex gap-4 lg:gap-5"
                    >
                      {/* Commit node */}
                      <div className="relative z-10 flex w-6 shrink-0 flex-col items-center">
                        <div
                          className={`mt-5 h-3 w-3 shrink-0 rounded-full border-2 bg-stone-950 transition-all duration-300 ${style.timelineNode}`}
                        />
                        {isMultiYear && (
                          <>
                            <div
                              className={`my-1.5 w-0.5 flex-1 transition-colors duration-300 ${style.timelineLine}`}
                            />
                            <div
                              className={`mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-stone-950 transition-all duration-300 ${style.timelineDot}`}
                            />
                          </>
                        )}
                      </div>

                      {/* Timeline Event Card */}
                      <a
                        href={item.href ?? undefined}
                        className={`block flex-1 rounded-md border border-stone-800 bg-stone-950/55 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-900/60 hover:shadow-lg hover:shadow-black/20 ${style.cardHoverBorder}`}
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className={`text-base font-semibold text-stone-100 transition-colors ${style.titleHover}`}
                            >
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-semibold tracking-wide text-stone-400 uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 rounded-sm border bg-stone-900/80 px-2 py-1 text-[11px] font-semibold uppercase ${style.yearText}`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-stone-400">
                          {item.body}
                        </p>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="order-1 rounded-sm border border-stone-800 bg-stone-900/85 shadow-md shadow-black/20 lg:col-start-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="text-lg font-semibold text-stone-100">About me</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              Product-minded developer focused on clear UX and data-heavy web
              interfaces. I like tight feedback loops and shipping useful tools.
            </p>

            <div className="mt-5 grid grid-cols-[1fr_2fr] items-start gap-y-3 text-sm text-stone-200">
              <div className="text-stone-400">Education:</div>
              <div> MSc. in Computer Science</div>

              <div className="text-stone-400">Expertise:</div>
              <div>TypeScript/React</div>

              <div className="text-stone-400">Location:</div>
              <div> Copenhagen</div>

              <div className="text-stone-400">Experience:</div>
              <div> 4 years professional experience; coding since 2010</div>

              <div className="text-stone-400">Email:</div>
              <div className="flex items-center gap-2">
                <a
                  className="text-emerald-300 hover:text-emerald-200"
                  href="mailto:hello@nimrossum.com"
                >
                  hello@nimrossum.com
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("hello@nimrossum.com")
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  title="Copy email"
                  className="text-stone-400 transition-colors hover:text-stone-200"
                >
                  {copied ? (
                    <CheckIcon className="size-4 text-emerald-400" />
                  ) : (
                    <DocumentDuplicateIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <aside className="order-3 rounded-sm border border-stone-800 bg-stone-900/85 shadow-md shadow-black/20 lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="px-6 py-6 lg:px-7">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-stone-100">
                Toy Projects
              </h2>
            </div>
            <div className="relative mt-5">
              <div className="absolute top-8 bottom-10 left-2.75 w-0.5 bg-stone-800/80" />
              <div className="flex flex-col gap-4">
                {toyProjects.map((item) => {
                  const isMultiYear =
                    item.year.includes("—") || item.year.includes("-")
                  return (
                    <div
                      key={`${item.year}-${item.title}`}
                      className="group relative flex gap-4 lg:gap-5"
                    >
                      <div className="relative z-10 flex w-6 shrink-0 flex-col items-center">
                        <div className="mt-5 h-3 w-3 shrink-0 rounded-full border-2 border-amber-500 bg-stone-950 transition-all duration-300 group-hover:scale-[1.3] group-hover:bg-amber-500 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
                        {isMultiYear && (
                          <>
                            <div className="my-1.5 w-0.5 flex-1 bg-amber-500/30 transition-colors duration-300 group-hover:bg-amber-500/80 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
                            <div className="mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] border-amber-500/50 bg-stone-950 transition-all duration-300 group-hover:scale-[1.3] group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                          </>
                        )}
                      </div>
                      <a
                        href={item.href ?? undefined}
                        className="block flex-1 rounded-md border border-stone-800 bg-stone-950/55 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-amber-500/40 hover:bg-stone-900/60 hover:shadow-lg hover:shadow-black/20"
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-stone-100 transition-colors group-hover:text-amber-400">
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-semibold tracking-wide text-stone-400 uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-sm border border-amber-500/20 bg-stone-900/80 px-2 py-1 text-[11px] font-semibold text-amber-200/70 uppercase">
                            {item.year}
                          </span>
                        </div>
                        <div className="mt-3 text-sm leading-relaxed text-stone-400">
                          {item.body}
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
