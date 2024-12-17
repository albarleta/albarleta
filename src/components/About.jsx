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
              Hey, I'm Al, a full-stack web developer specializing in the MERN
              stack (MongoDB, Express, React, Node.js). After completing an
              intensive coding bootcamp, I've gained the skills to transform
              ideas into fully functional full-stack web applications. I'm
              passionate about solving problems, collaborating on creative
              projects, and continuously grow as a developer.
            </p>

            <p className="text-slate-600 mb-10">
              Outside of coding, I enjoy various interests listed below. Hover
              over the badges to learn more.
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
