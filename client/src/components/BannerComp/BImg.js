import React from "react";
//images
import myImg from "../../assets/myImg.png";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import "./BImg.css";

function BImg() {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px] "
    >
      <div className="border-radius-animation">
        <img src={myImg} alt="" className="rounded-full" />
      </div>
    </motion.div>
  );
}

export default BImg;
