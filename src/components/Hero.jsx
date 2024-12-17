import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const angularVelocityRef = useRef(0);
  const animationFrameRef = useRef(null);

  const scrollToSection = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const spinOnClick = () => {
    // Set an initial high angular velocity
    angularVelocityRef.current = Math.random() * 30 + 20; // Random initial velocity

    const spinDown = () => {
      setRotation((prev) => prev + angularVelocityRef.current);

      // Apply friction to reduce the velocity
      angularVelocityRef.current *= 0.98;

      // Continue spinning until the velocity is low enough
      if (Math.abs(angularVelocityRef.current) > 0.1) {
        animationFrameRef.current = requestAnimationFrame(spinDown);
      } else {
        // Stop the animation when velocity is negligible
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    // Start the spin-down animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(spinDown);
  };

  useEffect(() => {
    // Cleanup any running animations
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-900 to-purple-950 min-h-[70vh] flex items-center pt-32 sm:pt-16 md:pt-28 rounded-br-[8rem]">
        <div className="container mx-auto grid md:grid-cols-2 gap-4 items-center px-4">
          <div className="text-center md:text-left max-w-lg mx-auto">
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold mb-2 break-words">
              Al Barleta
            </h1>
            <p className="text-gray-200 mb-8 text-xl sm:text-3xl">
              I turn ideas into full-stack solutions.
            </p>
            <div className="flex justify-center gap-2 flex-col md:flex-row md:justify-start m-auto md:m-0 max-w-xs md:max-w-max mb-8">
              <button
                onClick={scrollToSection}
                className="border-2 border-white text-white px-6 py-3 rounded-tl-3xl font-bold"
              >
                About me
              </button>
              <a
                href="/AlBarleta_MERN_WebDeveloper.pdf"
                download="AlBarleta_MERN_WebDeveloper.pdf"
                className="bg-orange-400 text-white px-6 py-3 font-bold rounded-br-3xl"
              >
                Download my resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-center pb-10">
            <img
              src="/img/hero.png"
              alt="Hero"
              onClick={spinOnClick}
              style={{
                transform: `rotate(${rotation}deg)`,
                cursor: "pointer",
                userSelect: "none",
                transition: "transform 0.05s linear",
              }}
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 object-cover md:mt-10"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
