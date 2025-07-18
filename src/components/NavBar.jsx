import { useEffect, useState } from "react";
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'

const navItems = [
  {icons : FaLinkedin, href: "https://www.linkedin.com/in/naman-kumar-bhagat/",target : "_blank", rel : "noopener noreferrer"},
  {icons : FaGithub, href: "https://github.com/namankrbhagat",target : "_blank", rel : "noopener noreferrer"},
  {icons : SiLeetcode, href: "https://leetcode.com/u/NamanBhagat/",target : "_blank", rel : "noopener noreferrer"}

]

export const NavBar = () =>{
  const [isScrolled,setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }
    
    return () => window.addEventListener("scroll",handleScroll)
  },[])

  return (
        <nav
      className={`fixed top-8 left-60 right-60 z-40 transition-all duration-300 
        rounded-2xl shadow-md
        ${isScrolled ? "py-3 bg-violet-300 backdrop-blur-md" : "py-5 bg-violet-500 backdrop-blur-md"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <span className="text-4xl font-bold text-black flex text-glow">
          &lt;Naman/&gt;
        </span>

        <div className="hidden md:flex space-x-20">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="text-glow text-foreground/80 hover:text-black transition-colors duration-300"
            >
              <item.icons
                size={40}
                className="transition-transform duration-300 hover:scale-130"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>

  )
}