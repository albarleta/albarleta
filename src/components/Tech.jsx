export default function Tech() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 items-end text-slate-700">
      {[
        { src: "/img/html.png", alt: "HTML" },
        { src: "/img/css.png", alt: "CSS" },
        { src: "/img/tailwind.png", alt: "Tailwind" },
        { src: "/img/js.png", alt: "JavaScript" },
        { src: "/img/ts.png", alt: "TypeScript" },
        { src: "/img/react.png", alt: "React" },
        { src: "/img/node.png", alt: "Node" },
        { src: "/img/express.png", alt: "Express" },
        { src: "/img/mongodb.png", alt: "MongoDB" },
        { src: "/img/git.png", alt: "Git" },
        { src: "/img/figma.png", alt: "Figma" },
      ].map(({ src, alt }) => (
        <div
          key={alt}
          className="flex flex-col items-center justify-center w-20"
        >
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2">{alt}</p>
        </div>
      ))}
    </div>
  );
}
