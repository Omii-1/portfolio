import hiremelight from "../assets/contactRollerLight.png"
import hiremeDark from "../assets/contactRollerDark.png"
import { Link } from "react-router-dom"

import { useTheme } from "../context/ThemeContext";

export function Hireme() {
  
  const { theme } = useTheme()

  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-0 md:bottom-auto md:absolute z-5">
      <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
        {
          theme === "dark" ? (
            <img src={hiremeDark} alt="" className=" animate-spin-slow" />
          ) : (
            <img src={hiremelight} alt="" className=" animate-spin-slow" />
          )
        }
        <Link to="/contact" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-20 h-20 md:w-12 md:h-12 md:text-[9px] md:font-bold rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light transition-all duration-500 ">Hire Me</Link>
      </div>
    </div>
  )
}