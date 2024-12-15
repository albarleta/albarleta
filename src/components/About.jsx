import Tech from "./Tech";
import Interests from "./Interests";
export default function About() {
  return (
    <section id="about">
      <div className="container m-auto py-16 px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="font-bold text-md mb-2 text-slate-700">Summary:</h3>
            <p className="text-slate-600 mb-10">
              I am a full-stack web developer specializing in the MERN (MongoDB,
              Express, React, Node.js) stack. Recently refined my skills through
              an intensive coding bootcamp and am eager to apply technical
              expertise and creative problem-solving to build innovative web
              solutions.
            </p>
            <div>
              <h3 className="font-bold text-md mb-3 text-slate-700">
                Interests:
              </h3>
              <Interests />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-md mb-2 text-slate-700">Skills:</h3>
            <Tech />
          </div>
        </div>
      </div>
    </section>
  );
}
