import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

export const ToggleButton = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If 'theme' is 'dark' or null (not set), default to dark mode
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
    >
      {/* {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )} */}
    </button>
  );
};
