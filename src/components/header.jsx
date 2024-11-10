import Link from "next/link"

export default function Header() {
    return (
      <header className="w-full flex items-center justify-between text-white px-20 py-6 max-sm:px-10">
          <Link href="/">
              <h1 className="text-3xl font-semibold">Risky</h1>
          </Link>
          <div className="flex gap-4 max-sm:gap-3">
              <Link href="https://github.com/riskysh" target="_blank">
                  <h3 className="font-medium hover:underline underline-offset-4">Github</h3>
              </Link>
              <Link href="https://discord.com/users/1260949968751956008" target="_blank">
                  <h3 className="font-medium hover:underline underline-offset-4">Discord</h3>
              </Link>
              <Link href="mailto:notriskysh@gmail.com" target="_blank">
                  <h3 className="font-medium hover:underline underline-offset-4">Email</h3>
              </Link>
          </div>
      </header>
    )
  }