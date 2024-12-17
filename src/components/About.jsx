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
            <p className="text-slate-600 mb-5">
              Hi, I'm Al, a full-stack web developer with expertise in the MERN
              stack (MongoDB, Express, React, Node.js). I recently completed an
              intensive coding bootcamp, where I honed my skills in transforming
              ideas into fully functional full-stack applications.
            </p>
            <p className="text-slate-600 mb-5">
              I love solving complex problems, collaborating on creative
              projects, and always looking for new ways to grow as a developer.
            </p>
            <p className="text-slate-600 mb-10">
              When I’m not coding, you can find me enjoying the interests listed
              below—hover over the badges to learn more!
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
