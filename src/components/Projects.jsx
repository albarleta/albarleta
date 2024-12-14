import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projectData = [
    {
      title: "Sentinel",
      description:
        "A full-stack MERN application designed for secure document tracking and management. Features include user authentication, authorization, and a clean interface for managing documents efficiently.",
      imageUrl: "/img/sentinel.webp",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Express",
        "Socket.io",
      ],
      githubLink: "https://github.com/albarleta/sentinel",
      liveDemoLink: "https://sentinel-ie0i.onrender.com/",
    },
    {
      title: "Takam",
      description:
        "A full-stack MERN marketplace application featuring user profiles, item posting, commenting, favoriting, and order management.",
      imageUrl: "/img/takam.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Express",
        "Socket.io",
      ],
      githubLink: "https://github.com/albarleta/takam",
      liveDemoLink: "https://takam.onrender.com/",
    },
    {
      title: "Quick Insight",
      description:
        "A web application that uses AI to generate concise book summaries and key takeaways, helping users quickly evaluate a book's value.",
      imageUrl: "/img/quickinsight.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Google Books API",
        "Google Gemini",
      ],
      githubLink: "https://github.com/albarleta/quickinsight",
      liveDemoLink: "https://quickinsight-app.onrender.com/app.html",
    },
    {
      title: "Mindful Street",
      description: "A static website for a mindfulness service company.",
      imageUrl: "/img/mindfulstreet.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/albarleta/mindfulstreet",
      liveDemoLink: "https://mindfulstreet.onrender.com/",
    },
    {
      title: "Meetings Map",
      description: "An interactive map for attendees to locate meetings.",
      imageUrl: "/img/na.png",
      technologies: ["HTML", "CSS", "JavaScript", "Google Maps"],
      githubLink: "https://github.com/albarleta/na-philippines",
      liveDemoLink: "https://na-philippines.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-16 rounded-tr-[8rem]  rounded-br-[8rem]"
      style={{
        backgroundColor: "#8EC5FC",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      }}
    >
      <div className="container m-auto px-4 pb-24 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain rounded-md"
                  />
                </div>
                <p className="text-gray-600 mt-4 mb-4">{project.description}</p>
              </div>

              <div className="flex flex-col mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800 transition-colors border-2 border-purple-600 px-4 py-2 sm:px-6 sm:py-3 rounded-tl-3xl font-bold text-xs sm:text-sm flex-1 max-w-full"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white hover:text-white transition-colors bg-orange-400 px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-br-3xl text-xs sm:text-sm flex-1 max-w-full"
                  >
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
