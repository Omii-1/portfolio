import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { LiIcon } from "./LiIcon";

const Details = ({ position, company, companylink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companylink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl mb-24 md:mb-12 w-full text-center dark:text-light">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
          <Details
            position="Intern"
            company="coincent"
            companylink="https://www.coincent.ai"
            time="June 2024 - July 2024"
            address="Remote"
            work="Developed a real-time chat application at Coincent using the MERN stack. Implemented user authentication and authorization with JWT, real-time messaging with Socket.io, and features such as user search and online/offline status display. Also built a single-page e-commerce frontend."
          />

          <Details
            position="Intern"
            company="Navodita Infotech"
            companylink="https://navoditainfotech.com/"
            time="May 2024 - June 2024"
            address="Remote"
            work="Developed BookHeaven, an online bookstore, using the MERN stack. Implemented secure user authentication with JWT and bcrypt. Built RESTful APIs with Node.js/Express.js, a responsive React.js UI, and used MongoDB for data storage. The project includes comprehensive user and admin features."
          />
        </ul>
      </div>
    </div>
  );
}
