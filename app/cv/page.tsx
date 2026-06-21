import { CSSProperties, ReactNode, SVGProps } from "react"
import Image from "next/image"
import profile from "../profile.jpg"
import { cn } from "../styling"
import {
  AtSymbolIcon,
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import type { Route } from "next"

const tech = {
  typescript: { title: "TypeScript", color: "#3178C6" },
  css: { title: "CSS", color: "#663399" },
  react: { title: "React", color: "#61DAFB" },
  reactRouter: { title: "React Router", color: "#CA4245" },
  nextjs: { title: "Next.js", color: "#111111" },
  nodejs: { title: "Node.js", color: "#339933" },
  javascript: { title: "JavaScript", color: "#F7DF1E" },
  python: { title: "Python", color: "#3776AB" },
  dotnet: { title: ".NET", color: "#512BD4" },
  vue: { title: "Vue", color: "#4FC08D" },
  tailwind: { title: "TailwindCSS", color: "#06B6D4" },
  graphql: { title: "GraphQL", color: "#E10098" },
  docker: { title: "Docker", color: "#2496ED" },
  mui: { title: "Material UI", color: "#007FFF" },
  scala: { title: "Scala", color: "#DC322F" },
  java: { title: "Java", color: "#ea9100" },
  ml: {
    title: "Machine Learning",
    color: "#f7971e",
    className:
      "from-(--from) via-(--via) to-(--to)   animate-gradient-x bg-gradient-to-r",
    style: {
      "--from": "#f7971e",
      "--via": "#ffd200",
      "--to": "#f7971e",
    } as React.CSSProperties,
  },
  d3: {
    title: "D3",
    color: "#f9a03c",
    className: "from-(--from) to-(--to) bg-gradient-to-r",
    style: { "--from": "#f19e2e", "--to": "#b3514e" } as React.CSSProperties,
  },
  arduino: { title: "Arduino", color: "#00979D" },
  git: { title: "Git", color: "#F05032" },
  githubActions: { title: "GitHub Actions", color: "#2088FF" },
  vite: { title: "Vite", color: "#646CFF" },
  bun: { title: "Bun", color: "#fbf0df" },
  duckdb: { title: "DuckDB", color: "#FFF000" },
  kotlin: {
    title: "Kotlin",
    color: "#0095D5",
    className: "from-(--from) to-(--to) bg-gradient-to-r",
    style: {
      "--from": "#da4a52",
      "--to": "#7b58ff",
    } as React.CSSProperties,
  },
  android: { title: "Android", color: "#3DDC84" },
} as const satisfies Record<
  string,
  {
    title: string
    color: string
    className?: string
    style?: React.CSSProperties
  }
>

type Tech = (typeof tech)[keyof typeof tech]

type Entry = {
  title: string
  hoverTitle: string
  institution: ReactNode
  url: string
  tech: Array<Tech>
  startYear: string
  endYear?: string
  description: ReactNode
}

type CvSections = Record<string, Entry[]>

const baseSections: CvSections = {
  Experience: [
    {
      title: "Open Source Maintainer",
      hoverTitle: "Click to view the project on GitHub",
      institution: "Git Truck",
      url: "https://github.com/git-truck/git-truck",
      tech: [
        tech.typescript,
        tech.react,
        tech.reactRouter,
        tech.tailwind,
        tech.d3,
        tech.duckdb,
        tech.nodejs,
        tech.bun,
        tech.vite,
      ],
      startYear: "2022",
      endYear: "Present",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2 marker:text-emerald-800">
          <li>
            Lead developer and maintainer of Git Truck, an open-source developer
            tool for software visualization and Git repository analysis.
          </li>
          <li>
            Own the TypeScript/React architecture for contributor analysis,
            temporal filtering, repository exploration, and CLI-driven usage.
          </li>
          <li>
            Build data-heavy visualization workflows with D3 and DuckDB, with
            attention to performance, release quality, and UX for large
            repositories.
          </li>
          <li>
            Migrated from Remix v2 and styled-components to React Router v7,
            Tailwind CSS v4, Bun, Vite, and Node.js tooling, improving data
            loading, UI consistency, and contributor experience.
          </li>
        </ul>
      ),
    },
    {
      title: "Software Developer",
      hoverTitle: "Click to learn more about the company",
      institution: "twoday IT Minds",
      tech: [
        tech.typescript,
        tech.react,
        tech.dotnet,
        // tech.python
      ],
      url: "https://www.it-minds.dk/",
      startYear: "2022",
      endYear: "2023",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2">
          <li>
            Worked as a software engineering consultant in agile client teams,
            building React/TypeScript tools for operational and advisory
            workflows.
          </li>
          <li>
            Built React/TypeScript internal tools, uptime dashboards, and
            operational interfaces for PensionDanmark, improving visibility into
            system status.
          </li>
          <li>
            Delivered frontend and full-stack features across dashboards,
            advisory tools, and backend integrations in close collaboration with
            client and cross-functional teams.
          </li>
        </ul>
      ),
    },
    {
      title: "Software Developer",
      hoverTitle:
        "Click to learn more about the projects I developed at the company",
      institution: "Dansk Drone Kompagni ApS",
      tech: [tech.typescript, tech.react, tech.dotnet],
      url: "https://www.dronekompagniet.dk/produkter/software/",
      startYear: "2016",
      endYear: "2019",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2">
          <li>
            Built full-stack B2B geospatial products with React and .NET for
            clients including Odense Letbane, covering mapping, reporting, and
            customer-facing workflows.
          </li>
          <li>
            Integrated serverless geospatial processing for map analysis, data
            exports, and PDF report generation.
          </li>
          <li>
            Owned product requirements, architecture choices, implementation,
            and release delivery in a startup environment.
          </li>
        </ul>
      ),
    },
  ],
  Education: [
    {
      title: "MSc Computer Science",
      hoverTitle: "Click to learn more about the program",
      institution: "IT University of Copenhagen",
      tech: [
        // tech.ml,
        // , tech.python,
        // tech.scala, tech.arduino
      ],
      url: "https://en.itu.dk/Programmes/MSc-Programmes/Computer-Science",
      startYear: "2023",
      endYear: "2026",
      description: (
        <ul className="flex list-disc flex-col gap-2">
          <li>
            Focused on software visualization, machine learning, and
            developer-facing tools.
          </li>
          <li>MSc thesis published at IEEE VISSOFT 2026.</li>
        </ul>
      ),
    },
    {
      title: "BSc Software Development",
      hoverTitle: "Click to learn more about the program",
      institution: "IT University of Copenhagen",
      tech: [
        // tech.dotnet, tech.java, tech.kotlin
      ],
      url: "https://en.itu.dk/Programmes/BSc-Programmes/Software-Development",
      startYear: "2019",
      endYear: "2023",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2">
          <li>
            Focused on software evolution, maintenance, DevOps, and application
            development.
          </li>
          <li>BSc thesis published at IEEE VISSOFT 2022.</li>
        </ul>
      ),
    },
  ],
  Publications: [
    {
      title:
        "Git-Truck@Pluck – Contributor-Centric Coordinated Views for Hierarchical Visualization of Git Repository Evolution",
      hoverTitle: "Click to view the publication",
      institution: (
        <>
          IEEE VISSOFT 2026 &mdash; 14th Working Conference on Software
          Visualization
        </>
      ),
      tech: [],
      url: "https://vissoft.io/2026/index.html",
      startYear: "2026",
      endYear: "2026",
      description: null,
    },
    {
      title:
        "Git-Truck: Hierarchy-Oriented Visualization of Git Repository Evolution",
      hoverTitle: "Click to view the publication",
      institution: (
        <>
          IEEE VISSOFT 2022 &mdash; 10th Working Conference on Software
          Visualization
        </>
      ),
      tech: [],
      url: "https://doi.org/10.1109/VISSOFT55257.2022.00021",
      startYear: "2022",
      endYear: "2022",
      description: null,
    },
  ],
}

const headline = "Full-stack TypeScript / React Developer"

const summary = (
  <>
    Full-stack TypeScript/React developer building production-grade tools,
    data-heavy interfaces, and developer tooling. Maintains open-source software
    through Git Truck, with strong frontend architecture, visualization, Node.js
    integration, and MSc-level computer science experience.
  </>
)

const focus = [
  "React, TypeScript, UI architecture",
  "Data visualization and developer tools",
  "Full-stack product delivery",
]

const skills = [
  "TypeScript",
  "React",
  "React Router",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "D3",
  "Git",
  "GitHub Actions",
  "Vite / Bun",
  "DuckDB",
]

export default function Resume() {
  const sections = baseSections
  const pdfHref = "/cv/pdf"

  return (
    <>
      <div className="mx-auto mb-4 flex max-w-[calc(250px+60ch)] justify-end print:hidden">
        <Link
          target="_blank"
          prefetch="auto"
          href={pdfHref as Route}
          className="mx-auto flex w-fit items-center gap-2 rounded px-3 py-2 font-bold text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-white"
          title="PDF version"
        >
          <DocumentIcon className="size-5" />
          PDF version
        </Link>
      </div>
      <div className="mx-auto grid grid-flow-col grid-cols-[1fr_60ch] grid-rows-[150px_1fr] rounded-lg border-emerald-600 bg-emerald-950 not-print:max-w-[calc(250px+60ch)] not-print:border print:inset-0 print:min-h-[200vh] print:grid-cols-[232px_1fr]">
        <div className="hidden print:fixed print:top-0 print:right-0 print:left-[14rem] print:block print:h-[2cm]" />

        <header className="relative col-span-2 grid grid-flow-col grid-cols-subgrid items-center bg-emerald-950 px-4 not-print:rounded-t-lg">
          <Image
            src={profile}
            // src="https://avatars.githubusercontent.com/u/1959615?v=4"
            alt="Avatar"
            width="200"
            height="200"
            loading="eager"
            priority
            className={cn(
              "absolute bottom-0 left-4 z-10 translate-y-1/2 rounded-full border-2 border-emerald-50",
            )}
          />
          <div />
          <div>
            <h1 className="text-center text-5xl text-emerald-50">
              Jonas Nim Røssum
            </h1>
            <p className="mx-auto mt-2 text-center text-sm font-bold tracking-wide text-pretty text-emerald-50/70 uppercase">
              {headline}
            </p>
          </div>
        </header>

        <aside className="flex flex-col bg-emerald-950 p-4 pt-[100px] text-stone-50 shadow-sm not-print:rounded-bl-lg lg:sticky lg:rounded-tr-none lg:rounded-bl-lg not-print:lg:max-w-xs">
          <section className="flex flex-col gap-3">
            <section className="mt-8 flex flex-col">
              <h2 className="mb-3 text-sm leading-normal font-bold tracking-widest text-emerald-50/50 uppercase opacity-60">
                Contact
              </h2>
              <section className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-3">
                <ContactEntry
                  content="hello@nimrossum.com"
                  url="mailto:hello@nimrossum.com"
                  iconFn={AtSymbolIcon}
                />
                <ContactEntry
                  content="in/jonasnimrossum"
                  url="https://www.linkedin.com/in/jonasnimrossum/"
                  iconFn={BriefcaseIcon}
                  rel="me" // semantic hint for identity link
                />
                <ContactEntry
                  className="not-print:hidden"
                  content="+45 52 25 13 37"
                  url="tel:+4552251337"
                  iconFn={PhoneIcon}
                />
              </section>
            </section>
            <section className="mt-8 flex flex-col">
              <h2 className="mb-3 text-sm leading-normal font-bold tracking-widest text-emerald-50/50 uppercase opacity-60">
                Languages
              </h2>
              <section className="relative flex flex-col place-content-between gap-2 opacity-70">
                <div>Danish, native</div>
                <div>English, fluent</div>
              </section>
            </section>
            {focus.length ? (
              <section className="mt-8 flex flex-col">
                <h2 className="mb-3 text-sm leading-normal font-bold tracking-widest text-emerald-50/50 uppercase opacity-60">
                  Focus
                </h2>
                <section className="relative flex flex-col place-content-between gap-2 opacity-70">
                  {focus.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </section>
              </section>
            ) : null}
            {skills.length ? (
              <section className="mt-8 flex flex-col">
                <h2 className="mb-3 text-sm leading-normal font-bold tracking-widest text-emerald-50/50 uppercase opacity-60">
                  Skills
                </h2>
                <section className="relative flex flex-wrap gap-2 opacity-80">
                  {skills.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-emerald-50/10 px-2 py-1 text-xs font-semibold text-emerald-50"
                    >
                      {item}
                    </span>
                  ))}
                </section>
              </section>
            ) : null}
          </section>
        </aside>

        <main className="relative flex flex-col gap-12 rounded-tl-xl bg-stone-300 p-6 text-gray-950 not-print:rounded-br-lg marker:text-emerald-800 print:gap-8 print:p-4 print:text-[15px] print:leading-snug">
          <section>
            <p>{summary}</p>
          </section>
          {Object.entries(sections).map(([sectionHeading, entries], i) => (
            <section
              key={sectionHeading}
              className="relative flex flex-col gap-2"
            >
              <SectionHeading
                title={sectionHeading}
                className={i === 1 ? "break-before-page pt-4" : ""}
              />
              <section className="flex flex-col gap-6 pl-4 print:gap-3">
                {entries.map((item, index) => (
                  <div key={index}>
                    <EntryHeading
                      title={item.title}
                      institution={item.institution}
                      url={item.url}
                      startDate={item.startYear}
                      endDate={item.endYear}
                    />
                    <EntryTech tech={item.tech} />
                    <div className="text-gray-800">{item.description}</div>
                  </div>
                ))}
              </section>
            </section>
          ))}
        </main>
      </div>
    </>
  )
}

function SectionHeading({
  className = "",
  title,
  children = null,
}: {
  className?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <h2 className={cn("flex items-center gap-1 text-emerald-950", className)}>
      <div
        className={cn("flex-1 border-t-2 border-current", {
          "print:flex-3": children,
        })}
      />
      <div className="text-lg font-bold tracking-widest uppercase">{title}</div>
      <div className="flex-1 border-t-2 border-current" />
      <div className="flex-0">{children}</div>
    </h2>
  )
}

function EntryHeading({
  className = "",
  title,
  institution,
  url,
  startDate,
  endDate,
}: {
  className?: string
  title: ReactNode
  institution: ReactNode
  url: string
  startDate: string | number
  endDate?: string | number
}) {
  return (
    <div
      className={cn(
        "mt-4 mb-2 flex justify-between gap-2 print:mt-2 print:mb-1",
        className,
      )}
    >
      <h3>
        <a
          className="flex w-fit items-center justify-start gap-3 border-b border-current hover:text-emerald-500"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="font-bold">{title}, </span>
            {institution}
          </span>
          <ArrowTopRightOnSquareIcon
            className="inline-flex size-4 shrink-0"
            aria-hidden="true"
          />
        </a>
      </h3>
      <div className="text-sm font-medium whitespace-nowrap text-gray-500">
        {startDate}{" "}
        {endDate !== startDate ? <>&mdash; {endDate ?? "Present"}</> : null}
      </div>
    </div>
  )
}

function EntryTech({ tech }: { tech: Array<Tech> }) {
  return (
    <div className="mt-2 mb-3 flex flex-wrap gap-1 print:mt-1 print:mb-2">
      {tech.map((item) => (
        <span
          key={item.title}
          className={cn(
            "rounded px-2 py-0.5 text-xs font-semibold",
            ("className" in item ? item.className : null) ?? "",
            `text-(--contrast-color)`,
          )}
          style={
            {
              ...("style" in item ? item.style : {}),
              backgroundColor: item.color,
              "--contrast-color": `contrast-color(${item.color})`,
            } as CSSProperties
          }
        >
          {item.title}
        </span>
      ))}
    </div>
  )
}

function ContactEntry({
  className,
  content,
  url,
  iconFn: Icon,
  iconProps,
  rel,
}: {
  className?: string
  content: ReactNode
  url: string
  iconFn: React.FC<SVGProps<SVGSVGElement>>
  iconProps?: SVGProps<SVGSVGElement>
  rel?: string
}) {
  return (
    <>
      <Icon
        className={cn("size-5 opacity-70", className)}
        aria-hidden="true"
        {...iconProps}
      />
      <p>
        <a
          className={className}
          href={url}
          target="_blank"
          rel={`noopener noreferrer ${rel ?? ""}`}
        >
          {content}
        </a>
      </p>
    </>
  )
}
