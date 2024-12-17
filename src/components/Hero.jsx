export default function Hero() {
  const scrollToSection = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="min-h-[70vh] flex items-center pt-32 sm:pt-16 md:pt-28 rounded-br-[8rem]"
        style={{
          backgroundColor: "#201890",
          backgroundImage:
            "linear-gradient(135deg, #201890 0%, #4a3faa 36%, #6ae1d6 100%)",
        }}
      >
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
                className="border-2 border-white text-white px-6 py-3 rounded-tl-3xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                About me
              </button>
              <a
                href="/AlBarleta_MERN_WebDeveloper.pdf"
                download="AlBarleta_MERN_WebDeveloper.pdf"
                className="bg-[#3fd86e] text-white px-6 py-3 font-bold rounded-br-3xl hover:bg-[#5dea87] transition-colors inline-flex items-center justify-center"
              >
                Download my resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-center pb-10">
            <img
              src="/img/hero.png"
              alt="Hero"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain mix-blend-screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
