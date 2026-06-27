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
      activeText: "text-[#f0d894]",
      activeBg: "bg-[#1f332b]",
      activeBorder: "border-[#d6b36a]/70",
      activeShadow: "shadow-[0_0_14px_rgba(214,179,106,0.16)]",
      badgeActiveText: "text-[#f7f5ee]",
      badgeActiveBg: "bg-[#d6b36a]/45",
    },
    Professional: {
      activeText: "text-[#dce8cf]",
      activeBg: "bg-[#1f332b]",
      activeBorder: "border-[#7f9b78]/70",
      activeShadow: "shadow-[0_0_12px_rgba(127,155,120,0.18)]",
      badgeActiveText: "text-[#eef3df]",
      badgeActiveBg: "bg-[#55745d]/60",
      timelineNode:
        "border-[#7f9b78] group-hover:scale-[1.25] group-hover:bg-[#7f9b78] group-hover:shadow-[0_0_12px_rgba(127,155,120,0.35)]",
      timelineLine:
        "bg-[#7f9b78]/30 group-hover:bg-[#7f9b78]/80 group-hover:shadow-[0_0_8px_rgba(127,155,120,0.22)]",
      timelineDot:
        "border-[#7f9b78]/50 group-hover:scale-[1.25] group-hover:border-[#7f9b78] group-hover:bg-[#7f9b78] group-hover:shadow-[0_0_10px_rgba(127,155,120,0.3)]",
      cardHoverBorder: "hover:border-[#7f9b78]/50",
      titleHover: "group-hover:text-[#2f5b3f]",
      yearText: "text-[#8a7b55] border-[#d6b36a]/25",
    },
    "Open Source": {
      activeText: "text-[#f0d894]",
      activeBg: "bg-[#1f332b]",
      activeBorder: "border-[#d6b36a]/70",
      activeShadow: "shadow-[0_0_14px_rgba(214,179,106,0.2)]",
      badgeActiveText: "text-[#f7f5ee]",
      badgeActiveBg: "bg-[#d6b36a]/45",
      timelineNode:
        "border-[#d6b36a] group-hover:scale-[1.25] group-hover:bg-[#d6b36a] group-hover:shadow-[0_0_12px_rgba(214,179,106,0.35)]",
      timelineLine:
        "bg-[#d6b36a]/30 group-hover:bg-[#d6b36a]/80 group-hover:shadow-[0_0_8px_rgba(214,179,106,0.24)]",
      timelineDot:
        "border-[#d6b36a]/50 group-hover:scale-[1.25] group-hover:border-[#d6b36a] group-hover:bg-[#d6b36a] group-hover:shadow-[0_0_10px_rgba(214,179,106,0.32)]",
      cardHoverBorder: "hover:border-[#d6b36a]/50",
      titleHover: "group-hover:text-[#7a5c16]",
      yearText: "text-[#8a7b55] border-[#d6b36a]/25",
    },
    "Publications & Talks": {
      activeText: "text-[#e8dfc2]",
      activeBg: "bg-[#1f332b]",
      activeBorder: "border-[#c8c2ad]/65",
      activeShadow: "shadow-[0_0_12px_rgba(200,194,173,0.16)]",
      badgeActiveText: "text-[#f7f5ee]",
      badgeActiveBg: "bg-[#8a7b55]/60",
      timelineNode:
        "border-[#c8c2ad] group-hover:scale-[1.25] group-hover:bg-[#c8c2ad] group-hover:shadow-[0_0_12px_rgba(200,194,173,0.3)]",
      timelineLine:
        "bg-[#c8c2ad]/30 group-hover:bg-[#c8c2ad]/80 group-hover:shadow-[0_0_8px_rgba(200,194,173,0.2)]",
      timelineDot:
        "border-[#c8c2ad]/50 group-hover:scale-[1.25] group-hover:border-[#c8c2ad] group-hover:bg-[#c8c2ad] group-hover:shadow-[0_0_10px_rgba(200,194,173,0.28)]",
      cardHoverBorder: "hover:border-[#c8c2ad]/50",
      titleHover: "group-hover:text-[#6f603f]",
      yearText: "text-[#8a7b55] border-[#d6b36a]/25",
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
        <div className="mx-auto w-full max-w-6xl rounded-md border border-[#3f4c37] bg-[#202a22] shadow-2xl shadow-black/25">
          <div className="relative flex flex-col-reverse items-center gap-10 overflow-hidden rounded-md border border-[#d6b36a]/14 bg-[#202a22] p-6 text-[#eef3df] sm:flex-row sm:items-end lg:min-h-[430px] lg:p-12">
            <div className="z-10 max-w-3xl lg:ml-[320px]">
              <h1 className="font-heading mb-2 text-4xl leading-none font-bold tracking-tight text-[#f2dfad] sm:text-5xl lg:text-6xl">
                Jonas Nim Røssum
              </h1>
              <p className="text-sm font-bold tracking-widest text-[#d7d8cf]/70 uppercase">
                Full Stack developer &middot; based in Copenhagen
              </p>
              <p className="mt-8 max-w-2xl text-2xl leading-tight font-semibold text-[#eef3df] sm:text-3xl lg:leading-[1.1]">
                <span className="whitespace-nowrap">
                  Web Apps
                  <span className="mx-3 text-[#f0d894]/55">&middot;</span>
                </span>
                <span className="whitespace-nowrap">
                  Data Viz
                  <span className="mx-3 text-[#f0d894]/55">&middot;</span>
                </span>
                <span className="whitespace-nowrap">ML</span>
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  target="_blank"
                  prefetch="auto"
                  href={"/cv/pdf" as Route}
                  className="flex items-center gap-2 rounded-sm border border-[#d6b36a]/40 bg-[#202a22] px-5 py-3 text-sm font-bold text-[#f0d894] transition hover:border-[#f0d894] hover:bg-[#283322] hover:text-white"
                >
                  <DocumentTextIcon className="size-5" />
                  CV (PDF)
                </Link>
                <div className="relative z-0 inline-flex">
                  <a
                    target="_blank"
                    href="mailto:hello@nimrossum.com"
                    className="group relative flex items-center gap-2 rounded-sm border border-[#d6b36a]/35 bg-[#eef3df] px-5 py-3 text-sm font-bold text-[#1f332b] transition-all duration-200 ease-out before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:translate-x-0 before:translate-y-0 before:transform before:rounded-sm before:border before:border-[#d6b36a]/45 before:transition-all before:duration-200 before:ease-out before:will-change-transform hover:border-[#f0d894] hover:bg-white hover:text-[#1f332b] hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:before:translate-x-2 hover:before:translate-y-2 hover:before:border-[#d6b36a]"
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
          className="group text-md mx-auto mt-16 flex flex-col items-center gap-2 font-medium text-[#d7d8cf]/70 transition hover:text-[#f0d894]"
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
        <div className="order-2 rounded-md border border-[#3f4c37] bg-[#202a22] text-[#eef3df] shadow-md shadow-black/20 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="font-heading mb-3 text-xl leading-loose font-bold tracking-[0.12em] text-[#f0d894] uppercase">
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
                          : "border border-[#d6b36a]/18 bg-white/5 text-[#eef3df]/70 hover:border-[#d6b36a]/45 hover:text-[#f0d894]"
                      }`}
                    >
                      {cat}
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none transition-colors ${
                          filter === cat
                            ? `${style.badgeActiveBg} ${style.badgeActiveText}`
                            : "bg-[#eef3df]/10 text-[#eef3df]/68"
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
              <div className="absolute top-8 bottom-10 left-2.75 w-0.5 bg-[#d6b36a]/22" />

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
                          className={`mt-5 h-3 w-3 shrink-0 rounded-full border-2 bg-[#f7f5ee] transition-all duration-300 ${style.timelineNode}`}
                        />
                        {isMultiYear && (
                          <>
                            <div
                              className={`my-1.5 w-0.5 flex-1 transition-colors duration-300 ${style.timelineLine}`}
                            />
                            <div
                              className={`mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-[#f7f5ee] transition-all duration-300 ${style.timelineDot}`}
                            />
                          </>
                        )}
                      </div>

                      {/* Timeline Event Card */}
                      <a
                        href={item.href ?? undefined}
                        className={`block flex-1 rounded-md border border-[#d8d5c7] bg-[#eeeadf] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f5ee] hover:shadow-lg hover:shadow-black/10 ${style.cardHoverBorder}`}
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className={`text-base font-semibold text-[#20231d] transition-colors ${style.titleHover}`}
                            >
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-semibold tracking-wide text-[#6b675b] uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 rounded-sm border bg-[#f7f5ee] px-2 py-1 text-[11px] font-semibold uppercase ${style.yearText}`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-[#3f423b]">
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

        <aside className="order-1 rounded-md border border-[#3f4c37] bg-[#202a22] shadow-md shadow-black/20 lg:col-start-2 lg:row-start-1">
          <div className="px-6 py-6 lg:px-7">
            <h2 className="font-heading text-lg font-bold tracking-[0.12em] text-[#f0d894] uppercase">
              About me
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#eef3df]/82">
              Product-minded developer focused on clear UX and data-heavy web
              interfaces. I like tight feedback loops and shipping useful tools.
            </p>

            <div className="mt-5 grid grid-cols-[1fr_2fr] items-start gap-y-3 text-sm text-[#eef3df]">
              <div className="text-[#f0d894]/78">Education:</div>
              <div> MSc. in Computer Science</div>

              <div className="text-[#f0d894]/78">Expertise:</div>
              <div>TypeScript/React</div>

              <div className="text-[#f0d894]/78">Location:</div>
              <div> Copenhagen</div>

              <div className="text-[#f0d894]/78">Experience:</div>
              <div> 4 years professional experience; coding since 2010</div>

              <div className="text-[#f0d894]/78">Email:</div>
              <div className="flex items-center gap-2">
                <a
                  className="text-[#f0d894] hover:text-white"
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
                  className="text-[#eef3df]/65 transition-colors hover:text-white"
                >
                  {copied ? (
                    <CheckIcon className="size-4 text-[#f0d894]" />
                  ) : (
                    <DocumentDuplicateIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <aside className="order-3 rounded-md border border-[#3f4c37] bg-[#202a22] text-[#eef3df] shadow-md shadow-black/20 lg:col-start-2 lg:row-start-2 lg:self-start">
          <div className="px-6 py-6 lg:px-7">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-heading text-lg font-bold tracking-[0.12em] text-[#f0d894] uppercase">
                Toy Projects
              </h2>
            </div>
            <div className="relative mt-5">
              <div className="absolute top-8 bottom-10 left-2.75 w-0.5 bg-[#d6b36a]/22" />
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
                        <div className="mt-5 h-3 w-3 shrink-0 rounded-full border-2 border-[#d6b36a] bg-[#f7f5ee] transition-all duration-300 group-hover:scale-[1.25] group-hover:bg-[#d6b36a] group-hover:shadow-[0_0_12px_rgba(214,179,106,0.35)]" />
                        {isMultiYear && (
                          <>
                            <div className="my-1.5 w-0.5 flex-1 bg-[#d6b36a]/30 transition-colors duration-300 group-hover:bg-[#d6b36a]/80 group-hover:shadow-[0_0_8px_rgba(214,179,106,0.24)]" />
                            <div className="mb-6 h-2 w-2 shrink-0 rounded-full border-[1.5px] border-[#d6b36a]/50 bg-[#f7f5ee] transition-all duration-300 group-hover:scale-[1.25] group-hover:border-[#d6b36a] group-hover:bg-[#d6b36a] group-hover:shadow-[0_0_10px_rgba(214,179,106,0.32)]" />
                          </>
                        )}
                      </div>
                      <a
                        href={item.href ?? undefined}
                        className="block flex-1 rounded-md border border-[#d8d5c7] bg-[#eeeadf] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#d6b36a]/50 hover:bg-[#f7f5ee] hover:shadow-lg hover:shadow-black/10"
                        target={item.href ? "_blank" : undefined}
                        rel={item.href ? "noopener noreferrer" : undefined}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold text-[#20231d] transition-colors group-hover:text-[#8a7b55]">
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-semibold tracking-wide text-[#6b675b] uppercase">
                              {item.role}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-sm border border-[#d6b36a]/25 bg-[#f7f5ee] px-2 py-1 text-[11px] font-semibold text-[#8a7b55] uppercase">
                            {item.year}
                          </span>
                        </div>
                        <div className="mt-3 text-sm leading-relaxed text-[#3f423b]">
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
