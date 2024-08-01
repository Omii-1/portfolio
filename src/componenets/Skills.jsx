import { motion } from "framer-motion";

import python from "../assets/icons/skills/python.png"
import html from "../assets/icons/skills/html.png"
import css from "../assets/icons/skills/css.png"
import js from "../assets/icons/skills/js.png"
import tailwind from "../assets/icons/skills/tailwind.png"
import react from "../assets/icons/skills/react.png"
import recoil from "../assets/icons/skills/icons8-recoil-js-480.png"
import redux from "../assets/icons/skills/redux.png"
import express from "../assets/icons/skills/express.png"
import node from "../assets/icons/skills/nodejs.png";
import mongodb from "../assets/icons/skills/mongodb.png"
import mongoose from "../assets/icons/skills/mongoose.png"
import git from "../assets/icons/skills/git.png"
import postman from "../assets/icons/skills/postman.png"
import mongodbcompass from "../assets/icons/skills/mongodbCompass.png"
import github from "../assets/icons/skills/code.png"

const Skill = ({ image, name, x, y }) => {
  return (
    <motion.div
      className="absolute flex flex-col text-center gap-1 items-center justify-center  shadow-dark cursor-pointer "
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
      viewport={{once: true}}
    >
      <img src={image} alt={image}className="h-14 w-14 xl:h-10 xl:w-10 xs:h-5 xs:w-5 " />
      <p className="rounded-full font-semibold bg-primary text-light md:text-sm dark:bg-primaryDark dark:text-dark py-2 px-4 md:py-1.5 md:px-3 lg:bg-transparent lg:dark:bg-transparent lg:text-primary lg:dark:text-primaryDark lg:font-bold">{name}</p>
    </motion.div>
  );
};

export function Skills() {
  return (
    <div className=" h-auto">
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarktLg md:bg-circularLightMd  md:dark:bg-circularDarkMd sm:bg-circularLightSm  sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex text-center w-full
          text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold justify-center rounded-full dark:text-light text-dark p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>

        <Skill name="HTML" image={html} x="-15vw" y="6vw" />
        <Skill name="CSS" image={css} x="-14vw" y="-8vw" />
        <Skill name="Javascript" image={js} x="0vw" y="-9vw" />
        <Skill name="Python" image={python} x="0vw" y="9vw" />
        <Skill name="ReactJs" image={react} x="14vw" y="-8vw" />
        <Skill name="Tailwind CSS" image={tailwind} x="15vw" y="6vw" />
        <Skill name="Redux" image={redux} x="25vw" y="0vw" />
        <Skill name="ExpressJs" image={express} x="-25vw" y="0vw" />
        <Skill name="MongoDB" image={mongodb} x="-8vw" y="-15vw" />
        <Skill name="Recoil" image={recoil} x="-8vw" y="14vw" />
        <Skill name="NodeJs" image={node} x="8vw" y="-15vw" />
        <Skill name="Mongoose" image={mongoose} x="8vw" y="14vw" />
        <Skill name="Git" image={git} x="-23vw" y="-14vw" />
        <Skill name="Github" image={github} x="-23vw" y="14vw" />
        <Skill name="Postman" image={postman} x="23vw" y="-14vw" />
        <Skill name="MongoDB Compass" image={mongodbcompass} x="23vw" y="14vw" />
      </div>
    </div>
  );
}
