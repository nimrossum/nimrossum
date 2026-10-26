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
      year: "2026 — Present",
      category: "Professional",
      title: "Dalux",
      role: "Software Developer • Agentic AI / DevOps / TypeScript / AngularJS / .NET",
      body: "Developing software at Dalux with agentic AI, DevOps, TypeScript, AngularJS, and .NET.",
      href: "https://www.dalux.com/",
    },
    {
      year: "2026",
      category: "Publications & Talks",
      title:
        "Git-Truck@Pluck – Contributor-Centric Coordinated Views for Hierarchical Visualization of Git Repository Evolution",

      role: "Co-Author",
      body: "Co-authored and published research on contributor-centric visualization of Git repository structures.",
      href: "https://github.com/git-truck/papers/blob/master/Git-Truck@Pluck%20–%20Contributor-Centric%20Coordinated%20Views%20for%20Hierarchical%20Visualization%20of%20Git%20Repository%20Evolution.pdf",
    },
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
      activeText: "theme-accent",
      activeBg: "theme-accent-bg",
      activeBorder: "theme-accent-border",
      activeShadow: "theme-accent-shadow",
      badgeActiveText: "text-white",
      badgeActiveBg: "theme-accent-bg",
    },
    Professional: {
      activeText: "theme-accent",
      activeBg: "theme-accent-bg",
      activeBorder: "theme-accent-border",
      activeShadow: "theme-accent-shadow",
      badgeActiveText: "text-white",
      badgeActiveBg: "theme-accent-bg",
      timelineNode: "theme-timeline-node",
      timelineLine: "theme-timeline-line",
      timelineDot: "theme-timeline-dot",
      cardHoverBorder: "theme-accent-border",
      titleHover: "theme-light-title-hover",
      yearText: "theme-year",
    },
    "Open Source": {
      activeText: "theme-accent",
      activeBg: "theme-accent-bg",
      activeBorder: "theme-accent-border",
      activeShadow: "theme-accent-shadow",
      badgeActiveText: "text-white",
      badgeActiveBg: "theme-accent-bg",
      timelineNode: "theme-timeline-node",
      timelineLine: "theme-timeline-line",
      timelineDot: "theme-timeline-dot",
      cardHoverBorder: "theme-accent-border",
      titleHover: "theme-light-title-hover",
      yearText: "theme-year",
    },
    "Publications & Talks": {
      activeText: "theme-accent",
      activeBg: "theme-accent-bg",
      activeBorder: "theme-accent-border",
      activeShadow: "theme-accent-shadow",
      badgeActiveText: "text-white",
      badgeActiveBg: "theme-accent-bg",
      timelineNode: "theme-timeline-node",
      timelineLine: "theme-timeline-line",
      timelineDot: "theme-timeline-dot",
      cardHoverBorder: "theme-accent-border",
      titleHover: "theme-light-title-hover",
      yearText: "theme-year",
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
      role: "Next.js / Tailwind / OpenAI API",
      body: "Danish Wordle clone in Next.js with AI hints and a custom word list.",
      href: "https://ordle.nimrossum.com/",
    },
    {
      year: "2021",
      title: "Fruit Rush",
      role: "React / Web Gamepad API",
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
        <div className="theme-panel theme-panel-border mx-auto w-full max-w-6xl rounded-md border shadow-2xl shadow-black/25">
          <div className="theme-panel theme-accent-border relative flex flex-col-reverse items-center gap-10 overflow-hidden rounded-md border p-6 text-[var(--foreground)] sm:flex-row sm:items-end lg:min-h-107.5 lg:p-12">
            <div className="z-10 max-w-3xl lg:ml-80">
              <h1 className="font-heading theme-accent-heading mb-2 text-4xl leading-none font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Jonas Nim Røssum
              </h1>
              <p className="theme-muted text-sm font-bold tracking-widest uppercase">
                Full Stack developer &middot; based in Copenhagen
              </p>
              <p className="mt-8 max-w-2xl text-2xl leading-tight font-semibold text-[var(--foreground)] sm:text-3xl lg:leading-[1.1]">
                <span className="whitespace-nowrap">
                  Web Apps
                  <span className="theme-accent mx-3">&middot;</span>
                </span>
                <span className="whitespace-nowrap">
                  Data Viz
                  <span className="theme-accent mx-3">&middot;</span>
                </span>
                <span className="whitespace-nowrap">ML</span>
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  target="_blank"
                  prefetch="auto"
                  href={"/cv/pdf" as Route}
                  className="theme-panel-alt theme-accent-border theme-accent-heading flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-bold transition hover:text-white"
                >
                  <DocumentTextIcon className="size-5" />
                  CV (PDF)
                </Link>
                <div className="relative z-0 inline-flex">
                  <a
                    target="_blank"
                    href="mailto:hello@nimrossum.com"
                    className="theme-offset-button group theme-accent-border relative flex items-center gap-2 rounded-sm border bg-[var(--accent-muted)] px-5 py-3 text-sm font-bold text-[var(--panel)] transition-all duration-200 ease-out before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:translate-x-0 before:translate-y-0 before:transform before:rounded-sm before:border before:transition-all before:duration-200 before:ease-out before:will-change-transform hover:bg-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:before:translate-x-2 hover:before:translate-y-2"
                  >
                    <EnvelopeIcon className="size-5" />
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[300px] items-end justify-center self-stretch sm:mx-0 sm:ml-auto sm:justify-end lg:absolute lg:bottom-0 lg:left-0 lg:mx-0 lg:w-[380px] lg:max-w-none lg:self-auto">
              <Image
                src={profileImg}
                alt="Portrait of Jonas"
                className="relative mt-auto h-auto w-full object-contain object-[right_bottom] brightness-95 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <a
          href="#projects"
          className="theme-accent-link group text-md theme-muted mx-auto mt-16 flex flex-col items-center gap-2 font-medium transition"
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
        <div className="theme-panel theme-panel-border order-2 rounded-md border text-[var(--foreground)] shadow-md shadow-black/20 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="font-heading theme-accent mb-3 text-xl leading-loose font-bold tracking-[0.12em] uppercase">
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
                          : "theme-accent-link theme-accent-border theme-muted border bg-white/5"
                      }`}
                    >
                      {cat}
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none transition-colors ${
                          filter === cat
                            ? `${style.badgeActiveBg} ${style.badgeActiveText}`
                            : "theme-muted bg-white/10"
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
              <div className="theme-timeline absolute top-8 bottom-10 left-2.75 w-0.5" />

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
                          className={`mt-5 h-3 w-3 shrink-0 rounded-full border-2 bg-[var(--surface)] transition-all duration-300 ${style.timelineNode}`}
                        />
                        {isMultiYear && (
                          <>
                            <div
                              className={`my-1.5 w-0.5 flex-1 transition-colors duration-300 ${style.timelineLine}`}
                            />
                            <div
                              className={`mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-[var(--surface)] transition-all duration-300 ${style.timelineDot}`}
                            />
                          </>
                        )}
                      </div>

                      {/* Timeline Event Card */}
                      <a
                        href={item.href ?? undefined}
                        className={`theme-light theme-light-border theme-light-hover block flex-1 rounded-md border px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 ${style.cardHoverBorder}`}
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className={`theme-light-title text-base font-semibold transition-colors ${style.titleHover}`}
                            >
                              {item.title}
                            </h3>
                            <p className="theme-light-meta mt-0.5 text-xs font-semibold tracking-wide uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span
                            className={`theme-light border bg-[var(--surface)] px-2 py-1 text-[11px] font-semibold uppercase ${style.yearText}`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <div className="theme-light-copy mt-3 text-sm leading-relaxed">
                          {item.body}
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="theme-panel theme-panel-border order-1 rounded-md border shadow-md shadow-black/20 lg:col-start-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="font-heading theme-accent text-lg font-bold tracking-[0.12em] uppercase">
              About me
            </h2>
            <p className="theme-muted mt-3 text-sm leading-relaxed">
              Product-minded developer focused on clear UX and data-heavy web
              interfaces. I like tight feedback loops and shipping useful tools.
            </p>

            <div className="mt-5 grid grid-cols-[1fr_2fr] items-start gap-y-3 text-sm text-[var(--foreground)]">
              <div className="theme-accent">Education</div>
              <div> MSc. in Computer Science</div>

              <div className="theme-accent">Expertise</div>
              <div>TypeScript/React</div>

              <div className="theme-accent">Location</div>
              <div> Copenhagen</div>

              <div className="theme-accent">Experience</div>
              <div> 4 years professional experience; coding since 2010</div>

              <div className="theme-accent">Email</div>
              <div className="flex items-center gap-2">
                <a
                  className="theme-accent hover:text-white"
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
                  className="theme-muted transition-colors hover:text-white"
                >
                  {copied ? (
                    <CheckIcon className="theme-accent size-4" />
                  ) : (
                    <DocumentDuplicateIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <aside className="theme-panel theme-panel-border order-3 rounded-md border text-[var(--foreground)] shadow-md shadow-black/20 lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="px-6 py-6 lg:px-7">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-heading theme-accent text-lg font-bold tracking-[0.12em] uppercase">
                Toy Projects
              </h2>
            </div>
            <div className="relative mt-5">
              <div className="theme-timeline absolute top-8 bottom-10 left-2.75 w-0.5" />
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
                        <div className="theme-timeline-node mt-5 h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300 group-hover:scale-[1.25]" />
                        {isMultiYear && (
                          <>
                            <div className="theme-timeline-line my-1.5 w-0.5 flex-1 transition-colors duration-300" />
                            <div className="theme-timeline-dot mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-[var(--surface)] transition-all duration-300 group-hover:scale-[1.25]" />
                          </>
                        )}
                      </div>
                      <a
                        href={item.href ?? undefined}
                        className="theme-light theme-light-border theme-light-hover block flex-1 rounded-md border px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="theme-light-title theme-light-title-hover text-base font-semibold transition-colors">
                              {item.title}
                            </h3>
                            <p className="theme-light-meta mt-0.5 text-xs font-semibold tracking-wide uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span className="theme-year shrink-0 rounded-sm border bg-[var(--surface)] px-2 py-1 text-[11px] font-semibold uppercase">
                            {item.year}
                          </span>
                        </div>
                        <div className="theme-light-copy mt-3 text-sm leading-relaxed">
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
