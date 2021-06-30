import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Image({ handleRemove, image, index, show }) {
  const [isHovering, setisHovering] = useState(false);
  

  return (
      <div
        className="relative"
        onMouseEnter={() => {
          setisHovering(true);
        }}
        onMouseLeave={() => {
          setisHovering(false);
        }}
      >
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hover:text-red-600 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img onClick={show} className="" src={image} alt="images" width="100%" height="auto"></img>
      </div>
  );
}
