import "./animabout.scss";
import { motion, useMotionValue, useTransform,} from "framer-motion";
import {useState} from 'react';




const AnimAbout = () => {


  return (

    <div>
        <motion.div
      className={"box "}
      
      animate={{
        scale: [1, 1.5, 1.5, 1.5, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["10%", "25%", "50%", "50%", "10%"] ,
       
        backgroundColor: ["#E8CC17 ", "#D38114 ", "#DE6161", "#D38114 ", "#E8CC17 "]
      }}
      transition={{
        
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.15, 0.45, 0.8,],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />

    

    </div>

    
  );
}

export default AnimAbout;