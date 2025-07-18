import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 mx-auto">
        {/* LEFT: PHOTO + RESUME BUTTON */}
        <div className="flex flex-col items-center justify-center pl-35">
          {/* Profile Photo */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img
              src="/Profile.jpg"
              alt="Naman Kumar Bhagat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Download Resume Button */}
          <a
            href="/NamanBhagat_Resume.pdf"
            download
            className="mt-5 cursor-pointer flex justify-between items-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </a>

        </div>

        {/* RIGHT: TEXT */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-2 animate-fade-in-delay-1">
              Naman
            </span>
            <span className="text-primary ml-2 animate-fade-in-delay-2">
              Kumar
            </span>
            <span className="text-primary ml-2 animate-fade-in-delay-3">
              Bhagat
            </span>
          </h1>
          <p className="text-lg mt-4 md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
            I create stellar web experiences with modern technologies and love
            problem solving. Specializing in front-end development, I build
            interfaces that are both beautiful and functional.
          </p>
          <div className="pt-8 align-middle justify-center alopacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
