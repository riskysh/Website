import Link from "next/link";

export default function Header() {
    return (
        <header className="mx-20">
            <Link className="text-white text-3xl font-bold absolute m-5 h-20 w-20 select-none outline-none xl:fixed" href="/">Risky</Link>
            <nav className="float-right m-8 flex">
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="hover:stroke-white duration-200" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    </Link>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="hover:stroke-white duration-200" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                </div>
            </nav>
        </header>
    )
}