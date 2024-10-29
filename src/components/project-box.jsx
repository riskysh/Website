

export default function ProjectBox({title, description, link}) {
    return (
      <div className="w-fit grid gap-2 cursor-pointer text-white border border-[#1e1e1e] rounded-lg p-4 hover:bg-[#1e1e1e] duration-300">
          <a href={link}>
              <h1 className="text-2xl font-semibold">{title}</h1>
          </a>
          <p className="font-medium">{description}</p>
      </div>
    )
  }