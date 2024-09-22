import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <div>
      <Header />
      </div>
      <div className="w-full h-96 grid mx-auto">
        <div className="p-4 mx-auto w-8/12 mt-16">
          <h1 className="text-white text-5xl font-semibold flex relative h-2">Risky</h1>
          <p className="text-white font-medium flex mt-16">
            Hi i am so called Risky, a creative web developer</p>
          <p className="text-white font-medium mt-4">Specialized in <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://react.dev" target="_blank">React</a>, <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://nextjs.org" target="_blank">NextJS </a>
           and <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://kit.svelte.dev" target="_blank">SvelteKit</a> with strong knowledge in Javascript
          </p>
          <p className="text-white font-medium">
            I have also decent experience with <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://python.org" target="_blank">Python</a> and strong knowledge in building UIs<br></br>
            using <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://ui.shadcn.com" target="_blank">ShadCN.</a>
          </p>
          <p className="text-white font-medium mt-4">
            Apart from this i play with some technologies like <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://rust-lang.org" target="_blank">Rust</a> and <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://pocketbase.io" target="_blank">PocketBase</a>
          </p>
          <p className="text-white font-medium mt-8">
          <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="https://github.com/riskysh" target="_blank">Github</a>  <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="/" target="_blank">Discord</a>  <a className="underline underline-offset-4 decoration-[#808080] hover:decoration-[#fff] duration-700" href="mailto:notriskysh@gmail.com" target="_blank">Email</a>
          </p>
        </div>
      </div>
    </>
  );
}
