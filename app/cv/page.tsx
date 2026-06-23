import { ReactNode, SVGProps } from "react"
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
  csharp: { title: "C#", color: "#239120" },
  vue: { title: "Vue", color: "#4FC08D" },
  tailwind: { title: "TailwindCSS", color: "#06B6D4" },
  graphql: { title: "GraphQL", color: "#E10098" },
  docker: { title: "Docker", color: "#2496ED" },
  mui: { title: "Material UI", color: "#007FFF" },
  gis: { title: "GIS", color: "#2E7D32" },
  pointclouds: { title: "Point Clouds", color: "#0F766E" },
  tiling3d: { title: "3D Tiling", color: "#7C3AED" },
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
  title?: string
  hoverTitle?: string
  institution: ReactNode
  url?: string
  tech: Array<Tech>
  startYear?: string
  endYear?: string
  description: ReactNode
}

type CvSections = Record<string, Entry[]>

const headline = "Full-stack software engineer with strong frontend expertise"

const summary = (
  <>
    Full-stack software engineer with strong frontend expertise in
    TypeScript/React. I build polished products end to end, turning complex
    technical requirements into intuitive, reliable software.
  </>
)

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
        <ul className="marker:text-aside ml-4 flex list-disc flex-col gap-2">
          <li>
            Lead developer and maintainer of Git Truck, an open-source developer
            tool for software visualization and Git repository analysis.
          </li>
          <li>
            Maintain the TypeScript/React architecture for contributor analysis,
            temporal filtering, repository exploration, and data-heavy D3/DuckDB
            visualization workflows.
          </li>
          <li>
            Migrated from Remix v2 and styled-components to React Router v7,
            Tailwind CSS v4, Bun, Vite tooling, improving data loading, UI
            consistency, and longevity of the codebase.
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
        <ul className="ml-4 flex list-disc flex-col gap-2">
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
      tech: [
        tech.typescript,
        tech.react,
        tech.dotnet,
        tech.csharp,
        tech.mui,
        tech.gis,
      ],
      url: "https://www.dronekompagniet.dk/produkter/software/",
      startYear: "2016",
      endYear: "2019",
      description: (
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Built full-stack B2B geospatial products with React, TypeScript,
            Material Design, and .NET/C#, including drone-captured site data,
            measurements, reporting, and inspection workflows.
          </li>
          <li>
            Integrated serverless processing for map analysis, data exports, and
            PDF report generation, turning large spatial datasets into practical
            tools for professional users.
          </li>
          <li>
            Owned features end-to-end across requirements, architecture,
            frontend, backend, release delivery, and client feedback in a small
            product-focused team.
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
        <ul className="ml-4 list-disc">
          <li>Focused on software visualization and machine learning.</li>
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
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Focused on software evolution, maintenance, DevOps, and application
            development.
          </li>
        </ul>
      ),
    },
  ],
  Summary: [
    {
      institution: "",
      tech: [],
      description: <p className="text-xs leading-relaxed">{summary}</p>,
    },
  ],
  "Selected Projects": [
    {
      title: "Git Truck",
      hoverTitle: "Click to view the project on GitHub",
      institution: "Open Source",
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
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Open-source TypeScript/React tool for visualizing Git repository
            evolution, contributor activity, and codebase structure.
          </li>
          <li>
            Combines Git data processing, DuckDB-backed analysis, and D3
            visualizations for interactive exploration of large repositories.
          </li>
        </ul>
      ),
    },
    {
      title: "Speech & Dialogue Systems",
      hoverTitle: "Speech and dialogue systems project",
      institution: "Erasmus Exchange Project",
      tech: [tech.ml],
      startYear: "2024",
      endYear: "2024",
      description: (
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Built end-to-end voice interaction prototypes connecting STT,
            dialogue management, TTS, and speech APIs including ElevenLabs.
          </li>
          <li>
            Addressed real-time voice interface constraints including latency,
            turn-taking, interruption handling, and robustness to recognition
            errors in product-like conversational flows.
          </li>
        </ul>
      ),
    },
  ],
  Publications: [
    {
      title: "Git-Truck@Pluck",
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

// const summary = (
//   <>
//     <p>
//       Experienced full-stack developer with a strong background in
//       production-grade tooling and data-heavy interfaces, and developer tooling.
//     </p>
//     <p>
//       Built geospatial software at Dansk Drone Kompagni for drone-based site
//       data, mapping, and reporting.
//     </p>
//     <p>
//       I enjoy taking ownership of features end-to-end across frontend, backend,
//       and product collaboration.
//     </p>
//   </>
// )

const skills = [
  "TypeScript",
  "React",
  "C# / .NET",
  "React Router",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "D3",
  "GIS / Mapping",
  "Git",
  "GitHub Actions",
  "Vite",
  "Bun",
  "DuckDB",
]

export default function Resume() {
  const sections = baseSections
  const pdfHref = "/cv/pdf"
  const sectionColumns = [
    ["Summary", "Experience"],
    ["Selected Projects", "Education", "Publications"],
  ]

  return (
    <>
      <div className="mx-auto mb-4 flex max-w-[calc(250px+60ch)] justify-end print:hidden">
        <Link
          target="_blank"
          prefetch="auto"
          href={pdfHref as Route}
          className="mx-auto flex w-fit items-center gap-2 rounded border border-[#d6b36a]/30 bg-[#1f261c] px-3 py-2 text-sm font-bold text-[#f0d894] transition-colors hover:border-[#f0d894] hover:bg-[#283322] hover:text-white"
          title="PDF version"
        >
          <DocumentIcon className="size-5" />
          PDF version
        </Link>
      </div>
      <div className="bg-aside mx-auto grid overflow-hidden border-[#3f4c37] shadow-2xl shadow-black/25 [grid-template-areas:'main'] not-print:max-w-[calc(260px+64ch)] not-print:rounded-md not-print:border print:inset-0 print:min-h-dvh print:grid-flow-col print:grid-cols-[200px_1fr] print:grid-rows-[144px_1fr] print:shadow-none print:[grid-template-areas:'header_header'_'main_main']">
        <div className="hidden print:fixed print:top-0 print:right-0 print:left-56 print:block print:h-[2cm]" />

        <header className="bg-aside relative hidden items-center justify-around px-6 [grid-area:header] print:col-span-2 print:flex">
          <Image
            src={profile}
            alt="Avatar"
            loading="eager"
            priority
            className={cn(
              "z-10 -mb-12 aspect-square size-36 self-center justify-self-center rounded-full border-4 border-[#f7f5ee] object-cover shadow-xl shadow-black/25",
            )}
          />
          <div className="flex flex-col justify-around gap-4 text-center">
            <section className="flex items-center justify-center gap-x-8 gap-y-0">
              <ContactEntry
                className="text-xs text-[#eef3df]/70"
                content="hello@nimrossum.com"
                url="mailto:hello@nimrossum.com"
                iconFn={AtSymbolIcon}
              />
              <ContactEntry
                className="text-xs text-[#eef3df]/70"
                content="in/jonasnimrossum"
                url="https://www.linkedin.com/in/jonasnimrossum/"
                iconFn={BriefcaseIcon}
                rel="me"
              />
              <ContactEntry
                className="text-xs text-[#eef3df]/70"
                content="+45 52 25 13 37"
                url="tel:+4552251337"
                iconFn={PhoneIcon}
              />
            </section>
            <div className="mx-auto max-w-xl pt-2 text-center lg:pr-8">
              <h1 className="font-heading text-5xl leading-none font-bold tracking-tighter text-[#f2dfad] uppercase">
                Jonas Nim Røssum
              </h1>
              <p className="mx-auto mt-3 max-w-64 text-sm font-bold tracking-wider text-pretty text-[#d7d8cf]/70">
                {headline}
              </p>
            </div>
          </div>
        </header>

        <main className="relative mx-0 mt-0 grid w-auto grid-cols-1 gap-10 border-t border-[#d8d5c7] bg-[#f7f5ee] p-4 text-[#20231d] [grid-area:main] marker:text-[#55745d] sm:mx-4 sm:mt-4 sm:rounded-t-xl sm:p-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-x-8 lg:gap-y-4 lg:border-l print:m-3 print:grid-cols-2 print:gap-6 print:rounded-xl print:p-3 print:text-[15px] print:leading-snug">
          {sectionColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-10 print:gap-6">
              {column.map((sectionHeading) => {
                const entries = sections[sectionHeading]

                return (
                  <section
                    key={sectionHeading}
                    className="relative flex flex-col gap-2"
                  >
                    <SectionHeading title={sectionHeading} />
                    <section className="flex flex-col gap-6 print:gap-3">
                      {entries.map((item, index) => (
                        <div key={index}>
                          {item.title ? (
                            <EntryHeading
                              title={item.title}
                              institution={item.institution}
                              url={item.url}
                              startDate={item.startYear}
                              endDate={item.endYear}
                            />
                          ) : null}
                          {/* <EntryTech tech={item.tech} /> */}
                          <div className="text-xs leading-relaxed text-[#3f423b]">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </section>
                  </section>
                )
              })}
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

function SectionHeading({
  className = "",
  title,
}: {
  className?: string
  title: string
}) {
  return (
    <h2
      className={cn(
        "font-heading flex items-center gap-3 text-[#1f332b]",
        className,
      )}
    >
      <div className="h-px flex-1 bg-[#c8c2ad]" />
      <div className="text-lg font-bold tracking-[0.14em] uppercase">
        {title}
      </div>
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
  url?: string
  startDate?: string | number
  endDate?: string | number
}) {
  return (
    <div
      className={cn(
        "mt-4 mb-2 justify-between gap-4 print:mt-2 print:mb-1",
        className,
      )}
    >
      <div className="flex justify-between">
        <h3>
          <span className="font-heading text-sm leading-tight font-bold">
            {title}
          </span>
        </h3>
        {startDate ? (
          <div className="pt-0.5 text-right text-xs font-semibold whitespace-nowrap text-[#8a7b55]">
            {startDate}{" "}
            {endDate !== startDate ? <>&mdash; {endDate ?? "Present"}</> : null}
          </div>
        ) : null}
      </div>
      {url ? (
        <a
          className="group flex w-fit items-start justify-start gap-2 text-[#20231d] transition-colors hover:text-[#456c52]"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col">
            <span className="mt-0.5 text-sm leading-snug text-[#6b675b]">
              {institution}
            </span>
          </div>
          <ArrowTopRightOnSquareIcon
            className="mt-0.5 inline-flex size-4 shrink-0 text-[#8a7b55] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      ) : (
        <div className="flex flex-col">
          <span className="mt-0.5 text-sm leading-snug text-[#6b675b]">
            {institution}
          </span>
        </div>
      )}
    </div>
  )
}

function EntryTech({ tech }: { tech: Array<Tech> }) {
  return (
    <div className="mt-2 mb-3 flex flex-wrap gap-1.5 print:mt-1 print:mb-2">
      {tech.map((item) => (
        <span
          key={item.title}
          className={cn(
            "bg-aside/80 rounded border border-black/8 px-2 py-0.5 text-xs font-bold text-white shadow-sm",
            // ("className" in item ? item.className : null) ?? "",
            // `text-(--contrast-color)`,
          )}
          // style={
          //   {
          //     ...("style" in item ? item.style : {}),
          //     backgroundColor: item.color,
          //     "--contrast-color": `contrast-color(${item.color})`,
          //   } as CSSProperties
          // }
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
    <div className="flex items-center gap-1 leading-1">
      <Icon
        className={cn("size-3 opacity-70", className)}
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
    </div>
  )
}
