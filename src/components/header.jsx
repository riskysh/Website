

export default function Header() {
    return (
      <header className="w-full flex items-center justify-between text-white px-20 py-6 max-sm:px-10">
          <a href="/">
              <h1 className="text-3xl font-semibold">Risky</h1>
          </a>
          <div className="flex gap-4 max-sm:gap-3">
              <a href="https://github.com/riskysh" target="_blank">
                  <h3 className="font-medium hover:underline underline-offset-4">Github</h3>
              </a>
              <a href="https://discord.com/users/1260949968751956008" target="_blank">
                  <h3 className="font-medium hover:underline underline-offset-4">Discord</h3>
              </a>
              <a href="/blogs">
                  <h3 className="font-medium hover:underline underline-offset-4">Blogs</h3>
              </a>
          </div>
      </header>
    )
  }