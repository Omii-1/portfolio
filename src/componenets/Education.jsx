import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { LiIcon } from "./LiIcon";

const Details = ({ type, time, place, info, marks }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <div className="capitalize font-semibold text-primary dark:text-primaryDark xs:text-sm">
          {marks}
        </div>
        <p className="font-medium w-full dark:text-light md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

export function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-48 xs:mb-12 sm:mb-16 md:mb-24 lg:mb-24 xl:mb-36">
      <h2 className="font-bold text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl mb-24 md:mb-12  w-full text-center dark:text-light">
        Education
      </h2>

      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
        />
        <ul
          className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
          <Details
            type="Bachelor of Engineering in Electronics and Telecommunication"
            place="A. P. Shah Institute of Technology, Thane"
            time="2021 - 2024"
            marks="CGPA: 7.5/10"
            info="Worked on a prototype ventilator, gaining experience in biomedical device development and system integration."
          />

          <Details
            type="Diploma in Electronics and Telecommunication"
            place="Government Polytechnic Malvan"
            time="2029 - 2021"
            marks="Percentage: 82.27%"
            info="Worked on a Bluetooth home automation project, focusing on wireless communication and control systems."
          />
        </ul>
      </div>
    </div>
  );
}
