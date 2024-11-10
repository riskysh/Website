import Link from "next/link"

export default function ProjectBox({title, description, link}) {
    return (
      <Link href={link} target="_blank">
      <div className="w-fit grid gap-2 text-white border border-[#1e1e1e] rounded-lg p-4 hover:bg-[#1e1e1e] duration-300">
              <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="font-medium">{description}</p>
      </div>
      </Link>
    )
  }