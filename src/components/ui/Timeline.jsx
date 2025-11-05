import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center border-2 border-border">
                <motion.div
                  className="h-4 w-4 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 10px rgba(59,130,246,0.6)",
                      "0 0 20px rgba(59,130,246,1)",
                      "0 0 10px rgba(59,130,246,0.6)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-4xl font-bold text-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden 
                    w-[4px] bg-gradient-to-b from-transparent via-primary/30 to-transparent 
                    rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 
                      w-[4px] bg-gradient-to-b from-primary via-primary to-primary/60 
                      rounded-full shadow-[0_0_20px_rgba(59,130,246,0.9)]"
          />
        </div>
      </div>
    </div>
  );
};
