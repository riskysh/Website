import ProjectBox from "@/components/project-box";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center p-4">
      <div className="max-w-2xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Hi, i am Risky
          </h1>
          <p className="text-white mb-6">
            I am a creative developer interested in web dev. I usually build projects using NextJS and SvelteKit and 
            strong knowledge in Javascript.

          </p>
          <p className="text-white">
            Apart from coding i like to play games
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="max-w-2xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-white">
            <Link href="https://github.com/riskysh/crazy-memes" target="_blank"><ProjectBox title={"Crazy Memes"} description={"A simple website where you can watch and share memes images"} /></Link>
            <Link href="https://github.com/riskysh/math-speedrun" target="_blank"><ProjectBox title={"Math Speedrun"} description={"A game where you have to answer simple math questions and beat your highscore"} /></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
