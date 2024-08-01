import { Layout } from "../componenets/Layout";
import { Hireme } from "../componenets/Hireme";
import { AnimateText } from "../componenets/AnimateText";
import { TransitionEffect } from "../componenets/TransitionEffect"

import profile from "../assets/images/developer-pic-1.png";
import resume from "../assets/Resume_Om_Juvatkar.pdf"
import lightBulb from "../assets/svgs/lightBulb.svg"

import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="flex items-center justify-center  text-dark w-full ">
        <Layout className=" !md:p-16 !sm:pt-8 xs:!py-28">
          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className="w-1/2 md:w-full flex justify-center">
              <img src={profile} alt="om juvatkar" className=" h-auto md:inline-block w-full md:w-1/2 sm:w-2/3 " />
            </div>

            <div className="w-1/2 flex items-center flex-col self-center lg:w-full lg:text-center">
              
              <AnimateText text="Turning Vision Into Reality With Code And Design." className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl" />
              <p className="my-4 text-lg sm:text-base dark:text-light font-base">
                As a skilled full-stack developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a href={resume} target={"_blank"} className="flex items-center bg-dark dark:bg-light text-light dark:text-dark  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base  dark:hover:border-light">Resume<FaExternalLinkAlt className="ml-2" /></a>
                <Link to="/contact" className="ml-4 text-lg font-base capitalize text-dark dark:text-light underline">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <Hireme />

        <div className="absolute right-8 bottom-8 lg:hidden inline-block w-24 md:hidden">
          <img src={lightBulb} alt="" className="w-full h-auto" />
        </div>
      </div>  
    </>
  );
}
