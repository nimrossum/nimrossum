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

const isBrightColor = (hexColor: string) => {
  const color = hexColor.replace("#", "").padEnd(6, "0")
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155
}

const tech = {
  typescript: { title: "TypeScript", color: "#3178C6" },
  css: { title: "CSS", color: "#663399" },
  react: { title: "React", color: "#61DAFB" },
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

const sections: Record<string, Entry[]> = {
  Experience: [
    {
      title: "Open Source Maintainer",
      hoverTitle: "Click to view the project on GitHub",
      institution: "Git Truck",
      url: "https://github.com/git-truck/git-truck",
      tech: [tech.typescript, tech.react, tech.d3, tech.nodejs, tech.git],
      startYear: "2022",
      endYear: "Present",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2 marker:text-emerald-800">
          <li>Lead developer and core maintainer of Git Truck</li>
          <li>
            Migrated from Remix v2 to React Router v7, improving maintainability
            and modernizing architecture
          </li>
          <li>
            Rebuilt the UI and migrated from styled-components to Tailwind CSS
            v4, enhancing design consistency and performance
          </li>
          <li>
            Mentored contributors through detailed code reviews and enforced
            high-quality coding standards
          </li>
        </ul>
      ),
    },
    {
      title: "Software Developer",
      hoverTitle: "Click to learn more about the company",
      institution: "twoday IT Minds",
      tech: [tech.typescript, tech.react, tech.dotnet, tech.python],
      url: "https://www.it-minds.dk/",
      startYear: "2022",
      endYear: "2023",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2">
          <li>
            Supported multiple agile teams across diverse stacks, bridging
            frontend and backend expertise
          </li>
          <li>
            Presented technical deep-dive <em>&apos;Morning Boosters&apos;</em>{" "}
            to share knowledge and best practices for React development
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
            Built several full-scale B2B geospatial web applications using React
            and .NET
          </li>
          <li>
            Integrated serverless geospatial computing for high-performance
            mapping and data reporting
          </li>
        </ul>
      ),
    },
  ],
  Education: [
    {
      title: "MSc. Computer Science",
      hoverTitle: "Click to learn more about the program",
      institution: "IT University of Copenhagen",
      tech: [tech.ml, tech.python, tech.scala, tech.arduino],
      url: "https://en.itu.dk/Programmes/MSc-Programmes/Computer-Science",
      startYear: "2023",
      endYear: "2026",
      description: (
        <ul className="flex list-disc flex-col gap-2">
          <li>
            Erasmus exchange at Charles University, Prague (Spring 2024),
            focusing on Applied and Theoretical Machine Learning
          </li>
          <li>
            Thesis:{" "}
            <span className="italic">
              Git Truck v4: Advanced Contributor Exploration in Git Truck
            </span>
            <EntryTech tech={[tech.typescript, tech.react, tech.nodejs]} />
          </li>
        </ul>
      ),
    },
    {
      title: "BSc. Software Development",
      hoverTitle: "Click to learn more about the program",
      institution: "IT University of Copenhagen",
      tech: [tech.dotnet, tech.java, tech.kotlin],
      url: "https://en.itu.dk/Programmes/BSc-Programmes/Software-Development",
      startYear: "2019",
      endYear: "2023",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2">
          <li>
            Electives:{" "}
            <span className="italic">
              DevOps, Software Evolution and Maintenance
            </span>
            <span className="italic">Mobile App Development</span>
          </li>
          <li>
            Thesis: <span className="italic">Git Truck v1</span>
          </li>
        </ul>
      ),
    },
  ],
  Publications: [
    {
      title: "Git-Truck: Advanced Contributor Exploration",
      hoverTitle: "Click to view the publication",
      institution: (
        <>
          IEEE VISSOFT 2026 &mdash; 14th Working Conference on Software
          Visualization
        </>
      ),
      tech: [],
      url: "https://doi.org/10.1109/VISSOFT55257.2022.00021",
      startYear: "2026",
      endYear: "2026",
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2 marker:text-emerald-800">
          <li>
            Co-authored research on advanced contributor exploration of Git
            repositories
          </li>
          <li>Focused on contributor footprints</li>
          {/* <li>Presented findings at IEEE VISSOFT 2026</li> */}
        </ul>
      ),
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
      description: (
        <ul className="ml-0 flex list-disc flex-col gap-2 marker:text-emerald-800">
          <li>
            Co-authored research on polymetric visualization of Git repositories
          </li>
          <li>
            Focused on hierarchical data visualization for improved software
            evolution insights
          </li>
          <li>Presented findings at IEEE VISSOFT 2022</li>
        </ul>
      ),
    },
  ],
}

export default function Resume() {
  return (
    <>
      <div className="mx-auto mb-4 flex max-w-[calc(250px+60ch)] justify-end print:hidden">
        <Link
          target="_blank"
          prefetch="auto"
          href="/cv/pdf"
          className="mx-auto flex w-fit items-center gap-2 rounded px-3 py-2 font-bold text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-white"
          title="PDF version"
        >
          <DocumentIcon className="size-5" />
          PDF version
        </Link>
      </div>
      <div className="mx-auto grid max-w-[calc(250px+60ch)] grid-flow-col grid-cols-[1fr_60ch] grid-rows-[150px_1fr] rounded-lg border-emerald-600 not-print:border print:inset-0 print:h-[200dvh]">
        <div className="hidden print:fixed print:top-0 print:right-0 print:left-[14rem] print:block print:h-[2cm]" />

        <header className="relative col-span-2 grid grid-flow-col grid-cols-subgrid items-center rounded-t-lg bg-emerald-950 px-4">
          <Image
            src={profile}
            // src="https://avatars.githubusercontent.com/u/1959615?v=4"
            alt="Avatar"
            width="200"
            height="200"
            loading="eager"
            priority
            className={cn(
              "absolute bottom-0 left-4 z-10 w-[200px] translate-y-1/2 rounded-full border-2 border-emerald-50",
            )}
          />
          <div />
          <div>
            <h1 className="text-center text-5xl text-emerald-50">
              Jonas Nim Røssum
            </h1>
            <p className="mx-auto mt-2 w-[200px] text-center text-sm font-bold tracking-wide text-pretty text-emerald-50/70 uppercase">
              Full Stack Developer
            </p>
          </div>
        </header>

        <aside className="flex flex-col bg-emerald-950 p-4 pt-[100px] text-stone-50 shadow-sm not-print:rounded-bl-lg lg:sticky lg:max-w-xs lg:rounded-tr-none lg:rounded-bl-lg">
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
              <section className="relative grid grid-cols-2 place-content-between gap-2 opacity-70">
                <div>Danish</div>
                <div>Maternal</div>
                <div>English</div>
                <div>Fluent</div>
              </section>
            </section>
          </section>
        </aside>

        <main className="relative flex flex-col gap-10 bg-stone-300 p-6 text-gray-950 not-print:rounded-br-lg marker:text-emerald-800 print:rounded-tl-xl print:p-4">
          {Object.entries(sections).map(([sectionHeading, entries], i) => (
            <section
              key={sectionHeading}
              className="relative flex flex-col gap-2"
            >
              <SectionHeading title={sectionHeading}>
                {i === 0 ? (
                  <div className="mr-2">
                    <a
                      target="_blank"
                      href="https://jonas.nimrossum.com/cv"
                      className="-mr-2 flex w-max items-center gap-1 py-2 pl-2 font-bold text-emerald-950 not-print:hidden"
                      title="Live version"
                    >
                      <ArrowTopRightOnSquareIcon className="size-6" />
                      Live version
                    </a>
                  </div>
                ) : null}
              </SectionHeading>
              <section className="flex flex-col gap-6 pl-4">
                {entries.map((item, index) => (
                  <div key={index}>
                    <EntryHeading
                      className={
                        i === 1 && index === 1 ? "break-before-page" : ""
                      }
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
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <h2 className="flex items-center gap-1">
      <div
        className={cn("flex-1 border-t-2 border-current", {
          "print:flex-3": children,
        })}
      />
      <div className="text-lg font-bold tracking-widest text-emerald-950 uppercase">
        {title}
      </div>
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
    <div className={cn("mt-4 mb-2 flex justify-between gap-2", className)}>
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
    <div className="mt-2 mb-3 flex flex-wrap gap-1">
      {tech.map((item) => (
        <span
          key={item.title}
          className={cn(
            "rounded px-2 py-0.5 text-xs font-semibold",
            ("className" in item ? item.className : null) ?? "",
            isBrightColor(item.color) ? "text-black" : "text-white",
          )}
          style={{
            ...("style" in item ? item.style : {}),
            backgroundColor: item.color,
          }}
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
