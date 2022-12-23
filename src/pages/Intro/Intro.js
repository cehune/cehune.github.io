import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import './intro.css';




const Example = () => {


  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};

export default Example;