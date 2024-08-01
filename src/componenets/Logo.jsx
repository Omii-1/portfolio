import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        to="/"
        className="w-16 h-16 text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        initial={{backgroundColor: "var(--dark)"}}
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition: {duration: 1, repeat:Infinity}
        }}
      >
        OM
      </MotionLink>
    </div>
  );
}
