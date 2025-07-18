
export const AboutMe = () =>{
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-10">
          <h1 className="text-xl md:text-5xl font-bold tracking-tight">
            About
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Me
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Hi! I’m a passionate Computer Science undergraduate at Bennett University (Class of 2026) with a strong focus on modern web development and building user-friendly, responsive frontends.
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I love solving challenging problems and have solved over 350 questions on LeetCode and 400+ problems across platforms like GeeksforGeeks and HackerRank, constantly honing my skills in data structures and algorithms.          
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I thrive on creating intuitive, real-world web applications that not only look great but perform seamlessly. Whether it’s developing beautiful UIs with React or bringing ideas to life with full-stack workflows, I enjoy turning complex ideas into scalable, maintainable products.
          </p>

        </div>
      </div>
    </section>
  )
}