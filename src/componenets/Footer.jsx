import { Layout } from "./Layout";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base py-5 lg:py-0 ">
      <div className="px-32 flex items-center justify-between lg:flex-col lg:p-3 lg:gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 ">
            &#9825;
          </span>{" "}
          by&nbsp;{" "}
          <Link to="/contact" className="underline underline-offset-2">
            {" "}
            Om Juvatkar
          </Link>
        </div>
      </div>
    </footer>
  );
}
