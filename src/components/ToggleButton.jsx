import {  useEffect, useState } from "react"
import { Moon,Sun } from "lucide-react";

export const ToggleButton = () =>{
  const [isDark,setisDark] = useState(true);

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === 'dark'){
      setisDark(true);
      document.documentElement.classList.add("dark")
    }else{
      localStorage.setItem("theme","light")
      setisDark(false)
    }
  },[]);

  const toggleTheme = () => {
    if(isDark){
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
      setisDark(false)
    }else{
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
      setisDark(true)
    }
  }
  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outlin-hidden">
      {/* {isDark ? (<Sun className="h-6 w-6 text-yellow-300"/>) : (<Moon className="h-6 w-6 text-blue-900"/>)} */}
    </button>
  )
}