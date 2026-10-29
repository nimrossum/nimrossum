import { ReactNode } from "react"
import Image from "next/image"
import profile from "./profile.jpg"
import { cn } from "./styling"
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
      url: "https://www.dalux.com/",
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

  return (
    <div className="cv-page">
      <div className="cv-actions mx-auto mb-4 flex max-w-[1120px] justify-end print:hidden">
        <Link
          target="_blank"
          prefetch="auto"
          href={pdfHref as Route}
          className="cv-pdf-link flex w-fit items-center gap-2"
          title="Download CV"
        >
          <DocumentIcon className="size-5" />
          Download CV
        </Link>
      </div>
      <div className="cv-shell mx-auto max-w-[1120px]">
        <header className="cv-hero">
          <div className="cv-hero-copy">
            <p className="cv-kicker">Software engineer · Copenhagen</p>
            <h1>Jonas Nim Røssum</h1>
            <p className="cv-positioning">
              Full-stack engineer building visual, data-heavy tools.
            </p>
            <p className="cv-intro">
              I build polished, reliable products end to end, focusing on
              frontend quality, data-heavy interfaces, and practical AI
              integrations.
            </p>
            <div className="cv-contact-row" aria-label="Contact links">
              <ContactEntry
                content="hello@nimrossum.com"
                url="mailto:hello@nimrossum.com"
              />
              <ContactEntry
                content="LinkedIn"
                url="https://www.linkedin.com/in/jonasnimrossum/"
                rel="me"
              />
              <ContactEntry
                content="GitHub"
                url="https://github.com/nimrossum"
              />
            </div>
          </div>
          <Image
            src={profile}
            alt="Portrait of Jonas Nim Røssum"
            loading="eager"
            priority
            sizes="(max-width: 700px) 88px, 180px"
            className="cv-portrait"
          />
        </header>

        <main className="cv-content">
          <div className="cv-primary">
            <section className="cv-section cv-experience">
              <SectionHeading title="Experience" />
              <div className="cv-experience-grid">
                {sections.Experience.map((item, index) => (
                  <div className="cv-experience-row" key={index}>
                    <a
                      className="cv-signal-node"
                      href={`#experience-${index}`}
                      aria-label={`${item.startYear} ${item.title} at ${item.institution}`}
                    >
                      <span className="cv-signal-dot" aria-hidden="true" />
                      <span className="cv-signal-year">{item.startYear}</span>
                    </a>
                    <article className="cv-entry" id={`experience-${index}`}>
                      <EntryHeading
                        title={item.title}
                        institution={item.institution}
                        url={item.url}
                        linkInstitution={false}
                        startDate={item.startYear}
                        endDate={item.endYear}
                      />
                      <div className="theme-cv-body cv-entry-body">
                        {item.description}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </section>

            <section className="cv-section cv-publications">
              <SectionHeading title="Publications" />
              <div className="cv-entry-list cv-compact-list">
                {sections.Publications.map((item, index) => (
                  <article className="cv-entry" key={index}>
                    <EntryHeading
                      title={item.title}
                      institution={item.institution}
                      url={item.url}
                      startDate={item.startYear}
                      endDate={item.endYear}
                    />
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="cv-secondary">
            <section className="cv-section">
              <SectionHeading title="Capabilities" />
              <div className="cv-capabilities">
                {sections.Skills[0].description}
              </div>
            </section>
            <section className="cv-section">
              <SectionHeading title="Education" />
              <div className="cv-entry-list cv-compact-list">
                {sections.Education.map((item, index) => (
                  <article className="cv-entry" key={index}>
                    <EntryHeading
                      title={item.title}
                      institution={item.institution}
                      url={item.url}
                      startDate={item.startYear}
                      endDate={item.endYear}
                    />
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
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
    <h2 className={cn("cv-section-heading", className)}>
      <span>{title}</span>
      <div className="cv-section-rule" />
    </h2>
  )
}

function EntryHeading({
  className = "",
  title,
  institution,
  url,
  linkInstitution = true,
  startDate,
  endDate,
}: {
  className?: string
  title: ReactNode
  institution: ReactNode
  url?: string
  linkInstitution?: boolean
  startDate?: string | number
  endDate?: string | number
}) {
  return (
    <div className={cn("cv-entry-heading", className)}>
      <div className="cv-entry-title-row">
        <h3>
          <span className="cv-entry-title">{title}</span>
        </h3>
        {startDate ? (
          <div className="cv-entry-date">
            {startDate}{" "}
            {endDate !== startDate ? <>- {endDate ?? "Present"}</> : null}
          </div>
        ) : null}
      </div>
      {url && linkInstitution ? (
        <a
          className="cv-entry-institution group"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{institution}</span>
          <ArrowTopRightOnSquareIcon
            className="cv-entry-arrow inline-flex size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      ) : (
        <span className="cv-entry-institution">{institution}</span>
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
