import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import chatapp from "../assets/images/chatapp.png";
import bookstore from "../assets/images/bookstore.png";

import { Layout } from "../componenets/Layout";
import { AnimateText } from "../componenets/AnimateText";
import { TransitionEffect } from "../componenets/TransitionEffect"

const FramerImage = motion.img

const FeaturedProject = ({ stack, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-12 dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 " >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" /> 
      <a
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark dark:border-light"
      >
        <FramerImage src={img} alt={title} whileHover={{scale: 1.05}} transition={{duration: 0.2}}  />
      </a>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <a
          to={link}
          target="_blank"
          className="hover:underline text-primary dark:text-primaryDark underline-offset-2 "
        >
          <h2 className="text-primary dark:text-primaryDark my-2 w-full text-left text-4xl sm:text-2xl font-bold">
            {title}
          </h2>
        </a>
        <span className=" font-medium text-lg sm:text-base dark:text-light">Stack: {stack}</span>
        <p className="my-2 font-medium sm:text-sm text-dark dark:text-light/75">
          {summary.split(". ").map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </p>
        <div className="mt-2 pr-6 w-full flex items-center gap-8 sm:gap-5 relative justify-end lg:justify-start">
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <FaGithub className="dark:text-light h-12 w-12 sm:h-8 sm:w-8" />
          </motion.a>
          <motion.a
            href={link}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <GrDeploy  className="dark:text-light h-12 w-12 sm:h-7 sm:w-7" />
          </motion.a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid p-6 xl:p-4 border-dark dark:border-light bg-light dark:bg-dark  relative shadow-2xl col-span-6 ">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" /> 
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg border-2 border-solid border-dark dark:border-light"
      >
        <FramerImage src={img} alt={title} whileHover={{scale: 1.05}} transition={{duration: 0.2}}/>
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <a
          href={link}
          target="_blank"
          className="hover:underline text-primary dark:text-primaryDark underline-offset-2"
        >
          <h2 className="text-primary dark:text-primaryDark  my-2 w-full text-left text-3xl lg:text-2xl font-bold">
            {title}
          </h2>
        </a>
        <div className="mt-2 dark:text-light flex items-center gap-8 sm:gap-5">
          <motion.a
            href={github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <FaGithub className="dark:text-light h-12 w-12 sm:h-8 sm:w-8" />
          </motion.a>
          <motion.a
            href={link}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <GrDeploy className="dark:text-light h-12 w-12 sm:h-7 sm:w-7" />
          </motion.a>
        </div>
      </div>
    </article>
  );
};

export function Projects() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="lg:!pt-4">
          <AnimateText text="Featured Projects" className="mb-16 sm:mb-8 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />

          <div className="grid grid-cols-12 gap-y-32 gap-x-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title="Chat App"
                stack="MongoDB, Express.js, React.js, Node.js, JWT, Socket.io"
                img={chatapp}
                link="https://chat-app-om.onrender.com/"
                github="https://github.com/Omii-1/chat-app-deploy"
                summary="• Developed a real-time chat application with user authentication and authorization. • Implemented real-time messaging with Socket.io. • Added functionality to search for people and display online/offline status."
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="BookHeaven - Online Bookstore"
                stack="MongoDB, Express.js, React.js, Node.js, JWT"
                img={bookstore}
                link="https://bookheaven-om.vercel.app/"
                github="https://github.com/Omii-1/BookHeaven"
                summary="• Developed a full-stack e-commerce website with user and admin features. • Implemented secure user authentication with JWT and bcrypt. • Built RESTful APIs using Node.js/Express.js, a responsive React.js UI, and used MongoDB for data storage"
              />
            </div>

            
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="BookHeaven - Online Bookstore"
                img={bookstore}
                link="https://bookheaven-om.vercel.app/"
                github="https://github.com/Omii-1/BookHeaven"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="BookHeaven - Online Bookstore"
                img={bookstore}
                link="https://bookheaven-om.vercel.app/"
                github="https://github.com/Omii-1/BookHeaven"
              />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
