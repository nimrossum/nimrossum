import { cvVariants } from "../cv/page"

export default function CvLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-white">CV Links</h1>
      <ul className="list-inside list-disc">
        {Object.entries(cvVariants).map(([variant, content]) => (
          <li key={variant} className="flex space-x-8">
            <a
              href={`/cv/?v=${variant}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {content.headline}
            </a>
            <a
              href={`/cv/pdf?v=${variant}`}
              className="text-blue-500 hover:text-blue-700"
            >
              PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
