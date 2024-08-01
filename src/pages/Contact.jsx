import { FaUserLarge } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";

import Swal from 'sweetalert2'
import { motion } from "framer-motion";


import {Layout} from "../componenets/Layout";
import { TransitionEffect } from "../componenets/TransitionEffect"


export function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5f8d7993-5736-450e-8fb9-321c2c193dcf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try{

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Success !",
          text: "Message sent successfully !",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong, please try again later.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message.",
        icon: "error"
      });
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <TransitionEffect />
      <Layout className="!py-10 xl:!px-10 sm:px-14">
        <div className="grid grid-cols-12 gap-x-5 md:gap-y-8 items-center">
          <motion.div initial={{y:-200}} whileInView={{y:0, transition:{duration: 0.5}, ease:"easeInOut"}} className="col-span-6 md:col-span-12 items-center">       
            <div className="mb-6 ">
              <h1  className="text-primary dark:text-primaryDark text-8xl md:text-7xl sm:text-5xl xs:text-4xl font-bold mb-2 text-start md:text-center ">
                Get in Touch
              </h1>
              <p className="text-2xl md:text-xl sm:text-base xs:text-sm text-dark/75 dark:text-light/75 md:text-center">
                Have a question or want to work together? Fill out the form or
                reach out directly.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-dark dark:text-light">        
              <div className="flex gap-3">
                <motion.div whileHover={{scale: 1.2}} >
                  <FaUserLarge className="text-primary dark:text-primaryDark h-6 w-6 sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
                </motion.div>
                <h3 className="text-lg md:text-base sm:text-sm xs:text-xs">Om Juvatkar</h3>
              </div>
              <div className="flex gap-3">
                <motion.div whileHover={{scale: 1.2}}>
                <IoMail className="text-primary dark:text-primaryDark h-6 w-6 sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
                </motion.div>
                <h3 className="text-lg md:text-base sm:text-sm xs:text-xs">omjuvatkar123@gmail.com</h3>
              </div>
              <div className="flex gap-3">
                <motion.div whileHover={{scale: 1.2}}>
                <MdCall className="text-primary dark:text-primaryDark h-6 w-6 sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
                  
                </motion.div>
                <h3 className="text-lg md:text-base sm:text-sm xs:text-xs">(+91) 7038596890</h3>
              </div>
            </div>      
          </motion.div>

          <div className="col-span-6 md:col-span-12 self-center sm:px-4 xs:px-0">
            <motion.form onSubmit={onSubmit} initial={{y:200}} whileInView={{y:0, transition:{duration: 0.5}, ease:"easeInOut"}} className="flex flex-col border border-solid border-r-8 border-b-8 border-dark dark:border-light p-12 sm:p-8 xs:p-6 w-full gap-4 sm:gap-2 rounded-2xl shadow-2xl bg-light dark:bg-dark ">
              <div className="flex flex-col gap-2 sm:gap-1 xs:gap-0.5">
                <label htmlFor="" className="text-2xl sm:text-xl xs:text-lg font-semibold dark:text-light">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="text-xl sm:text-lg xs:text-base p-2 px-4 rounded-lg border dark:border-black hover:border-primary dark:hover:border-primaryDark focus:border-none outline-none focus:outline-primary dark:focus:outline-primaryDark text-dark/75 dark:text-light/75 dark:bg-black"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 sm:gap-1 xs:gap-0.5">
                <label htmlFor="" className="text-2xl sm:text-xl xs:text-lg font-semibold dark:text-light">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@gmail.com"
                  className="text-xl sm:text-lg xs:text-base p-2 px-4 rounded-lg border dark:border-black hover:border-primary dark:hover:border-primaryDark focus:border-none outline-none focus:outline-primary dark:focus:outline-primaryDark text-dark/75 dark:text-light/75 dark:bg-black"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 sm:gap-1 xs:gap-0.5">
                <label htmlFor="" className="text-2xl sm:text-xl xs:text-lg font-semibold dark:text-light">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message . . ."
                  rows={5}
                  className="text-xl sm:text-lg xs:text-base border border-solid dark:border-black hover:border-primary dark:hover:border-primaryDark focus:border-none outline-none focus:outline-primary dark:focus:outline-primaryDark  p-2 px-4 rounded-lg  text-dark/75 dark:text-light/75 dark:bg-black"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-solid text-light bg-primary dark:hover:bg-primaryDark hover:bg-primary/75 dark:bg-primaryDark/75 text-2xl sm:text-xl xs:text-lg font-bold p-2 rounded-lg"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
