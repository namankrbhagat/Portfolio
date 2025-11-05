import { useState } from "react";
import { AboutMe } from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { LoadingScreen } from "../components/LoadingScreen";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ToggleButton } from "../components/ToggleButton";
import { Footer } from "../components/Footer";

export const Home = () => {
   const [isloaded,setisLoaded] = useState(false)
  return(
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
     {!isloaded && <LoadingScreen onComplete={() => setisLoaded(true)}/> }
        <ToggleButton/>
        <StarBackground/>
        {isloaded &&< NavBar/>}
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
        <Footer/>
     </div>
  )
};