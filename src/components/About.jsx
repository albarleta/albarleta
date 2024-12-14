import Tech from "./Tech";
import { LiaBookSolid } from "react-icons/lia";
import { MdPodcasts } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiAlien } from "react-icons/pi";
import { GiGuitarBassHead } from "react-icons/gi";
import { FaCat } from "react-icons/fa";

export default function About() {
  const interests = [
    { icon: <LiaBookSolid className="text-purple-800" />, label: "Books" },
    { icon: <MdPodcasts className="text-purple-800" />, label: "Podcasts" },
    { icon: <GrTechnology className="text-purple-800" />, label: "Technology" },
    { icon: <PiAlien className="text-purple-800" />, label: "Science Fiction" },
    {
      icon: <GiWeightLiftingUp className="text-purple-800" />,
      label: "Weight Lifting",
    },
    {
      icon: <GiGuitarBassHead className="text-purple-800" />,
      label: "Music",
    },
    {
      icon: <FaCat className="text-purple-800" />,
      label: "Cats",
    },
  ];

  return (
    <section id="about">
      <div className="container m-auto py-16 px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold text-md mb-2 text-slate-700">Overview:</h3>
            <p className="text-slate-600 mb-8">
              I am a full-stack web developer specializing in the MERN (MongoDB,
              Express, React, Node.js) stack. Recently refined my skills through
              an intensive coding bootcamp and am eager to apply technical
              expertise and creative problem-solving to build innovative web
              solutions.
            </p>
            <div>
              <h3 className="font-bold text-md mb-2 text-slate-700">
                Interests:
              </h3>
              <ul className="text-slate-600 flex gap-3 flex-wrap">
                {interests.map((interest, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 bg-slate-200 px-2 rounded-full"
                  >
                    {interest.icon} {interest.label}
                  </li>
                ))}
              </ul>
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
