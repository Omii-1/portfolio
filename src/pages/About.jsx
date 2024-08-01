import { AnimateText } from "../componenets/AnimateText"
import { Layout } from "../componenets/Layout"
import { Skills } from "../componenets/Skills"
import { Experience } from "../componenets/Experience"
import { Education } from "../componenets/Education"
import { TransitionEffect } from "../componenets/TransitionEffect"

import profile from "../assets/images/profile2.jpg"
import { useEffect, useRef } from "react"
import { useMotionValue, useSpring, useInView } from "framer-motion"

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000})
  const inView = useInView(ref, {once: true})

  useEffect(() => {
    if(inView){
      motionValue.set(value)
    }
  } , [inView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export function About() {
  return (
    <>
      <TransitionEffect />
      <div className="flex  w-full flex-col items-center justify-center">
        <Layout className="flex flex-col gap-24 md:gap-12 xs:pt-4 ">
          <AnimateText text="Innovation Drives Excellence!" className="lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 xl:col-span-4 md:col-span-8 flex flex-col items-start justify-start h-full md:order-2">

              <h2 className="mb-4 md:text-center w-full text-2xl font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>

              <p className="font-medium text-xl lg:text-lg sm:text-base dark:text-light">
                {`Hi, I'm Om Juvatkar 👋. I'm an Electronics and Telecommunication Engineering student passionate about creating innovative digital solutions. With skills in Python, JavaScript, React, MongoDB, and Arduino, I excel in web development and embedded systems.`}
              </p>
              <p className="mt-2 font-medium text-xl lg:text-lg sm:text-base dark:text-light">
                {`I strive to lead projects that integrate technology to solve real-world problems and enhance user experiences. Let's bring intuitive and enjoyable tech solutions to life together! 💡`}
              </p>

            </div>

            <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 md:order-1">  
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />        
              <img src={profile} alt="" className="w-full h-auto rounded-2xl" />           
            </div>

            <div className="col-span-2 xl:col-span-8 flex flex-col xl:flex-row items-end xl:items-center justify-around md:order-3">
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl md:text-lg sm:text-base xs:text-sm font-medium capitalize text-primary/75 dark:text-primaryDark/75">Projects Completed</h2>
              </div>

              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl md:text-lg sm:text-base xs:text-sm font-medium capitalize text-primary/75 dark:text-primaryDark/75">Years of Experience</h2>
              </div>
            </div>

          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </div>
    </>
  )
}
