import Link from "next/link";
import { Lightbulb, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center w-full p-8">
      <nav className="flex justify-between max-w-7xl w-full">
        <Link className="text-white text-3xl font-bold select-none" href="/">
          Risky
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/projects">
            <Lightbulb className="w-6 h-6 text-neutral-500 hover:text-white duration-200" />
          </Link>
          <Link target="_blank" href="https://github.com/riskysh">
            <Github className="w-6 h-6 text-neutral-500 hover:text-white duration-200" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
