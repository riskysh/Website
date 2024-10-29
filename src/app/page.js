import ProjectBox from "@/components/project-box";


export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center p-4">
      <div className="max-w-2xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Hi, i'm Risky
          </h1>
          <p className="text-white mb-6">
            I'm a creative developer interested in web dev. I usually build projects using NextJS and SvelteKit and 
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
            <ProjectBox title={"Crazy Memes"} description={"A simple website where you can watch and share memes images"} />
            <ProjectBox title={"Math Speedrun"} description={"A game where you have to answer simple math questions and beat your highscore"} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
