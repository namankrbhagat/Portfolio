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
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? "w-[600px] py-3" 
          : "w-[650px] py-4"
        }
        bg-card/20 backdrop-blur-2xl border border-white/10 rounded-2xl 
        shadow-[0_8px_32px_0_rgba(139,92,246,0.15)]
        hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.3)]
        hover:border-white/20
      `}
    >
      <div className="flex items-center justify-between px-8">
        {/* Logo */}
        <a 
          href="#hero"
          className={`font-bold text-primary transition-all duration-300 hover:scale-110 hover:text-shadow-lg
            ${isScrolled ? "text-2xl" : "text-3xl"}
          `}
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}
        >
          &lt;Naman/&gt;
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="group relative"
            >
              {/* Glowing background circle on hover */}
              <div className="absolute inset-0 -m-2 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-md transition-all duration-300"></div>
              
              {/* Icon */}
              <item.icons
                size={26}
                className="relative text-foreground/60 group-hover:text-primary transition-all duration-300 
                  group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom glass reflection effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </nav>
  )
}