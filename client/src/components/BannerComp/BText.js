import React from "react";
import {
  FaGithub,
  // FaYoutube, FaDribbble
} from "react-icons/fa";
// import {AiOutlinePaperClip} from "react-icons/ai";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";


const sendEmail = () => {
  window.location.href = 'mailto:ssevvalsenel@gmail.com';
};


function BText() {
  return (
    <div className="flex-1 text-center mt-12 font-secondary lg:text-left">
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-4"
      >
        ŞEVVAL <span>ŞENEL</span>
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] "
      >
        <span className="text-white mr-4">I am a</span>
        <TypeAnimation
          sequence={["Developer", 2000, "Engineer", 2000]}
          speed={50}
          className="text-accent"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
      <div>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-8 max-w-lg mx-auto lg:mx-0 font-primary"
        >
          Welcome to my website! <br />
          If you want to see information about me and the projects I have worked
          on, you can access them by clicking on the menu below.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
        >
          <button onClick={sendEmail} className="btn btn-lg ">Contact me to review my CV!</button>
          {/* <a href="#" className="text-gradient btn-link">
          My Portfolio
        </a> */}
        </motion.div>
      </div>
    </div>
  );
}

export default BText;
