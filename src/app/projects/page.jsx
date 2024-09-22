import Header from "@/components/Header";

export default function Projects() {
    return (
       <>
       <div>
          <Header />
       </div>
       <div className="w-full h-96 grid mx-auto">
          <div className="p-4 mx-auto w-8/12 mt-16">
           <a href="https://github.com/riskysh/Math-Speedrun" target="_blank">
            <h1 className="text-white text-5xl font-semibold flex relative h-2">Projects</h1>
            <div className="border border-[#1a1a1a] rounded-lg p-4 mt-20 hover:bg-[#1a1a1a] duration-200 cursor-pointer">
                <h1 className="text-white text-3xl font-semibold">Math Speedrun</h1>
                <p className="text-white font-medium mt-6">
                    A simple Math Speedrun game written in SvelteKit. This game is simple, you have to answer the 
                    one number question. You can use timer to track your performance and beat your high score.
                </p>
            </div>
            </a>
            <a href="https://github.com/riskysh/Cool-Tools" target="_blank">
            <div className="border border-[#1a1a1a] rounded-lg p-4 mt-4 hover:bg-[#1a1a1a] duration-200 cursor-pointer">
                <h1 className="text-white text-3xl font-semibold">Cool Tools</h1>
                <p className="text-white font-medium mt-6">
                    This is a website with some collection of tools written in NextJS. It made it while learning
                    NextJS so i thought it would to nice to put all project that i created while learning NextJS here.
                </p>
            </div>
            </a>
          </div>
       </div>
       </>
    )
}