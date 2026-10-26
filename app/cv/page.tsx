import { ReactNode } from "react"
import Image from "next/image"
import profile from "../profile_smol.jpg"
import { cn } from "../styling"
import {
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
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
  mssql: { title: "MSSQL Server", color: "#CC2927" },
  vue: { title: "Vue", color: "#4FC08D" },
  tailwind: { title: "TailwindCSS", color: "#06B6D4" },
  graphql: { title: "GraphQL", color: "#E10098" },
  angularjs: { title: "AngularJS", color: "#DD0031" },
  scrum: { title: "Scrum", color: "#2F80ED" },
  agenticAi: { title: "Agentic AI Development", color: "#7C3AED" },
  devops: { title: "DevOps", color: "#2496ED" },
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
    <p>
      Full-stack software engineer with 4.5 years of professional experience
      across TypeScript and .NET / C#.
    </p>
    <p>
      I build polished, reliable products end to end, focusing on frontend
      quality, data-heavy interfaces, and practical AI integrations.
    </p>
  </>
)

const baseSections: CvSections = {
  Experience: [
    {
      title: "Software Developer",
      hoverTitle: "Currently working at Dalux",
      institution: "Dalux",
      tech: [
        tech.agenticAi,
        tech.devops,
        tech.typescript,
        tech.angularjs,
        tech.dotnet,
        tech.scrum,
      ],
      startYear: "2026",
      endYear: "Present",
      description: (
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Developing software at Dalux with agentic AI, DevOps, TypeScript,
            AngularJS, and .NET in a Scrum team.
          </li>
        </ul>
      ),
    },
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
        <ul className="theme-cv-marker ml-4 flex list-disc flex-col gap-2">
          <li>
            Lead maintainer of an open-source TypeScript/React visualization
            environment for repository evolution and ownership analysis.
          </li>
          <li>
            Migrated the stack to React Router, Tailwind CSS, Bun, and Vite.
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
            Delivered full-stack consultancy work across varied codebases and
            domains.
          </li>
          <li>
            Built CO2 dashboards and data integrations for COWI and Arkitema.
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
        tech.mssql,
        tech.mui,
        tech.gis,
      ],
      url: "https://www.dronekompagniet.dk/produkter/software/",
      startYear: "2016",
      endYear: "2019",
      description: (
        <ul className="ml-4 flex list-disc flex-col gap-2">
          <li>
            Helped build Dansk Drone Kompagni’s B2B inspection products from
            concept to production.
          </li>
          <li>
            Built Ortomatic, a browser-based geospatial comparison tool for
            aerial survey data.
          </li>
          <li>Established strong Git, CI/CD, and code review practices.</li>
        </ul>
      ),
    },
  ],

  Skills: [
    {
      institution: "",
      tech: [],
      description: (
        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
          <strong>Frontend</strong>
          <span>
            <span className="theme-cv-accent font-semibold">HTML</span> ·{" "}
            <span className="theme-cv-accent font-semibold">CSS</span> ·
            JavaScript ·{" "}
            <span className="theme-cv-accent font-semibold">TypeScript</span> ·{" "}
            <span className="theme-cv-accent font-semibold">React</span> · React
            Router ·{" "}
            <span className="theme-cv-accent font-semibold">Next.js</span> ·{" "}
            <span className="theme-cv-accent font-semibold">Tailwind CSS</span>{" "}
            · Accessibility
          </span>
          <strong>Working Practices</strong>
          <span>
            <span className="theme-cv-accent font-semibold">Git</span> ·{" "}
            <span className="theme-cv-accent font-semibold">GitHub</span> · Pull
            Requests · Code Review
          </span>
          <strong>Testing and Verification</strong>
          <span>
            CI/CD · GitHub Actions ·{" "}
            <span className="theme-cv-accent font-semibold">Playwright</span>
          </span>
          <strong>Backend and Data</strong>
          <span>
            Node.js · C#/.NET · MSSQL · GraphQL ·{" "}
            <span style={{ fontKerning: "none" }}>APIs</span> · Integrations
          </span>
          <strong>AI-Assisted Development</strong>
          <span>
            <span className="theme-cv-accent font-semibold">
              GitHub Copilot
            </span>{" "}
            · Claude ·{" "}
            <span className="theme-cv-accent font-semibold">Codex</span> ·
            Skills
          </span>
          <strong>AI Integrations</strong>
          <span>
            AI SDK ·{" "}
            <span className="theme-cv-accent font-semibold">OpenAI API</span>
          </span>
          <strong>Cloud and Deployment</strong>
          <span>
            DevOps ·{" "}
            <span className="theme-cv-accent font-semibold">Vercel</span> ({" "}
            <span className="theme-cv-accent font-semibold">Serverless</span>,{" "}
            <span className="theme-cv-accent font-semibold">Blob Storage</span>{" "}
            and Redis) · DigitalOcean (.NET and MSSQL) · Supabase (Postgres)
          </span>
          <strong>Languages</strong>
          <span>Danish · English</span>
          <p className="theme-cv-muted col-span-2 mt-1 text-[11px] italic">
            Highlighted technologies were used to build and generate this
            resume.
          </p>
        </div>
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
      description: null,
    },
    {
      title: "BSc Software Development",
      hoverTitle: "Click to learn more about the program",
      institution: "IT University of Copenhagen",
      tech: [tech.git, tech.githubActions, tech.android, tech.kotlin],
      url: "https://en.itu.dk/Programmes/BSc-Programmes/Software-Development",
      startYear: "2019",
      endYear: "2023",
      description: null,
    },
  ],
  Profile: [
    {
      institution: "",
      tech: [],
      description: <div className="text-[13px] leading-relaxed">{summary}</div>,
    },
  ],
  Publications: [
    {
      title:
        "Git-Truck@Pluck – Contributor-Centric Coordinated Views for Hierarchical Visualization of Git Repository Evolution",
      hoverTitle: "Click to view the publication",
      institution: (
        <>
          IEEE VISSOFT 2026 - 14th Working Conference on Software Visualization
        </>
      ),
      tech: [],
      url: "https://raw.githubusercontent.com/git-truck/papers/master/Git-Truck@Pluck%20–%20Contributor-Centric%20Coordinated%20Views%20for%20Hierarchical%20Visualization%20of%20Git%20Repository%20Evolution.pdf",
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
          IEEE VISSOFT 2022 - 10th Working Conference on Software Visualization
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

export default function Resume() {
  const sections = baseSections
  const pdfHref = "/cv/pdf"
  const sectionColumns = [
    ["Profile", "Experience"],
    ["Skills", "Education", "Publications"],
  ]

  return (
    <>
      <div className="mx-auto mb-4 flex max-w-[calc(250px+60ch)] justify-end print:hidden">
        <Link
          target="_blank"
          prefetch="auto"
          href={pdfHref as Route}
          className="theme-panel-alt theme-accent-border theme-accent-heading mx-auto flex w-fit items-center gap-2 rounded border px-3 py-2 text-sm font-bold transition-colors"
          title="PDF version"
        >
          <DocumentIcon className="size-5" />
          PDF version
        </Link>
      </div>
      <div className="theme-cv-shell theme-panel mx-auto grid overflow-hidden border shadow-2xl shadow-black/25 [grid-template-areas:'main'] not-print:max-w-[calc(260px+64ch)] not-print:rounded-md not-print:border print:inset-0 print:min-h-dvh print:grid-flow-col print:grid-cols-[200px_1fr] print:grid-rows-[144px_1fr] print:shadow-none print:[grid-template-areas:'header_header'_'main_main']">
        <div className="hidden print:fixed print:top-0 print:right-0 print:left-56 print:block print:h-[2cm]" />

        <header className="bg-aside relative hidden items-center justify-center gap-x-4 px-6 [grid-area:header] print:col-span-2 print:flex">
          <Image
            src={profile}
            alt="Avatar"
            loading="eager"
            priority
            className={cn(
              "theme-cv-header-border z-10 -mb-12 aspect-square size-36 self-center justify-self-center rounded-full border-4 object-cover shadow-xl shadow-black/25",
            )}
          />
          <div className="flex flex-col justify-around gap-4 text-center">
            <section className="flex items-center justify-center gap-x-8 gap-y-0 pt-4">
              <ContactEntry
                className="theme-muted text-xs"
                content="hello@nimrossum.com"
                url="mailto:hello@nimrossum.com"
              />
              <ContactEntry
                className="theme-muted text-xs"
                content="in/jonasnimrossum"
                url="https://www.linkedin.com/in/jonasnimrossum/"
                rel="me"
              />
              <ContactEntry
                className="theme-muted text-xs"
                content="+45 52 25 13 37"
                url="tel:+4552251337"
              />
            </section>
            <div className="mx-auto max-w-xl text-center lg:pr-8">
              <h1 className="font-heading theme-cv-header text-5xl leading-none font-bold tracking-tighter uppercase">
                Jonas Nim Røssum
              </h1>
              <p className="theme-cv-header mx-auto mt-2 max-w-68 text-base leading-snug font-normal tracking-wider text-pretty">
                {headline}
              </p>
            </div>
          </div>
        </header>

        <main className="theme-cv-main relative mx-0 mt-0 grid w-auto grid-cols-1 gap-10 border-t p-4 [grid-area:main] sm:mx-4 sm:mt-4 sm:rounded-t-xl sm:p-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-x-8 lg:gap-y-4 lg:border-l print:m-4 print:grid-cols-2 print:gap-5 print:rounded-xl print:p-4 print:text-[14px] print:leading-snug">
          {sectionColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-10 print:gap-5">
              {column.map((sectionHeading) => {
                const entries = sections[sectionHeading]

                return (
                  <section
                    key={sectionHeading}
                    className="relative flex flex-col gap-2"
                  >
                    <SectionHeading title={sectionHeading} />
                    <section className="flex flex-col gap-6 print:gap-4">
                      {entries.map((item, index) => (
                        <div key={index}>
                          {item.title ? (
                            <EntryHeading
                              className={
                                sectionHeading === "Experience"
                                  ? "mb-3 print:mb-1"
                                  : ""
                              }
                              title={item.title}
                              institution={item.institution}
                              url={item.url}
                              startDate={item.startYear}
                              endDate={item.endYear}
                            />
                          ) : null}
                          {/* <EntryTech tech={item.tech} /> */}
                          <div className="theme-cv-body text-xs leading-relaxed">
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
        "font-heading theme-cv-heading flex items-center gap-3",
        className,
      )}
    >
      <div className="text-lg font-bold tracking-[0.14em] uppercase">
        {title}
      </div>
      <div className="theme-cv-heading-line h-px flex-1" />
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
        "mt-4 mb-2 justify-between gap-4 print:mt-1 print:mb-0",
        className,
      )}
    >
      <div className="flex justify-between">
        <h3>
          <span className="font-heading theme-cv-heading text-sm leading-tight font-bold">
            {title}
          </span>
        </h3>
        {startDate ? (
          <div className="theme-cv-accent pt-0.5 text-right text-xs font-semibold whitespace-nowrap">
            {startDate}{" "}
            {endDate !== startDate ? <>- {endDate ?? "Present"}</> : null}
          </div>
        ) : null}
      </div>
      {url ? (
        <a
          className="theme-cv-link group flex w-fit items-start justify-start gap-2 text-[var(--ink)] transition-colors"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col">
            <span className="theme-cv-muted mt-0.5 text-sm leading-snug">
              {institution}
            </span>
          </div>
          <ArrowTopRightOnSquareIcon
            className="theme-cv-accent mt-0.5 inline-flex size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      ) : (
        <div className="flex flex-col">
          <span className="theme-cv-muted mt-0.5 text-sm leading-snug">
            {institution}
          </span>
        </div>
      )}
    </div>
  )
}

function EntryTech({ tech }: { tech: Array<Tech> }) {
  return (
    <div className="mt-2 mb-3 flex flex-wrap gap-1.5 print:mt-0 print:mb-1">
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
  rel,
}: {
  className?: string
  content: ReactNode
  url: string
  rel?: string
}) {
  return (
    <div className="flex items-center gap-1 leading-1">
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
