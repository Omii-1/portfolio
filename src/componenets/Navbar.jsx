import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useTheme } from "../context/ThemeContext";

import { Logo } from "./Logo";

import github from "../assets/icons/contact/github-logo.png";
import linkedin from "../assets/icons/contact/linkedin-logo.png";
import instagram from "../assets/icons/contact/instagram.png";
import gmail from "../assets/icons/contact/gmail.png";
import sun from "../assets/svgs/sun.svg";
import moon from "../assets/svgs/moon.svg";

const CustomLink = ({ to, title, className = "" }) => {
  const router = useLocation();
  return (
    <Link to={to} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px]  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.pathname === to ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
  const router = useLocation();
  const navigate = useNavigate()
  const handleClick = () => {
    toggle()
    navigate(to)
  }
  return (
    <button onClick={handleClick}  className={`${className} relative group text-light dark:text-dark`}>
      {title}

      <span
        className={`h-[1px]  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.pathname === to ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </button>
  );
};


export function Navbar() {
  const {theme, toggleTheme} = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light  z-10 lg:px-16 md:px-12 sm:px-8 ">

      <button
        onClick={handleClick}
        className=" flex-col items-center justify-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light  transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light  block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink to="/" title="Home" className="mr-4" />
          <CustomLink to="/about" title="About" className="mx-4" />
          <CustomLink to="/projects" title="Projects" className="mx-4" />
          <CustomLink to="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-3">
          <motion.a
            href="https://www.linkedin.com/in/om-juvatkar/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <img src={linkedin} alt="Linkedin" className="h-10" />
          </motion.a>
          <motion.a
            href="https://github.com/Omii-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <img src={github} alt="Github" className="h-10" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/om_juvatkar/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <img src={instagram} alt="Instagram" className="h-10" />
          </motion.a>
          <motion.a
            href="mailto:omjuvatkar123@gmail.com"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <img src={gmail} alt="Gmail" className="h-9" />
          </motion.a>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={toggleTheme}
            className={`rounded-full p-1 border border-solid  ${
              theme === "light"
                ? "border-dark text-light"
                : "bg-light text-dark border-transparent"
            }`}
          >
            {theme === "dark" ? (
              <img src={sun} alt="sun" className="h-6" />
            ) : (
              <img src={moon} alt="moon" className="h-6" />
            )}
          </motion.button>
        </nav>
      </div>

      {
        isOpen ? (
        <motion.div
        initial={{scale: 0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className="min-w-[75vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-24">
          <nav className="flex flex-col items-center justify-center gap-3 mb-4 ">
            <CustomMobileLink to="/" title="Home" className="" toggle ={handleClick} />
            <CustomMobileLink to="/about" title="About" className="" toggle ={handleClick} />
            <CustomMobileLink to="/projects" title="Projects" className="" toggle ={handleClick} />
            <CustomMobileLink to="/contact" title="Contact" className="" toggle ={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-3">
            <motion.a
              href="https://www.linkedin.com/in/om-juvatkar/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <img src={linkedin} alt="Linkedin" className="h-8" />
            </motion.a>
            <motion.a
              href="https://github.com/Omii-1"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <img src={github} alt="Github" className="h-8" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/om_juvatkar/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <img src={instagram} alt="Instagram" className="h-8" />
            </motion.a>
            <motion.a
              href="mailto:omjuvatkar123@gmail.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <img src={gmail} alt="Gmail" className="h-7" />
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={toggleTheme}
              className={`rounded-full p-1 border border-solid  ${
                theme === "light"
                  ? "border-light bg-light"
                  : "border-dark bg-white "
              }`}
            >
              {theme === "dark" ? (
                <img src={sun} alt="sun" className="h-5" />
              ) : (
                <img src={moon} alt="moon" className="h-5" />
              )}
            </motion.button>
          </nav>
        </motion.div>

        ) : null
      }

      <div className="absolute mt-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
