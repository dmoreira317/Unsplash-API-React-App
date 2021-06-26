import React, { useState } from "react";

export default function Image({ handleRemove, image, index }) {
  const [isHovering, setisHovering] = useState(false);

  return (
    <div className="p-1 m-1 border flex justify-center">
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
        <img className="" src={image} alt="images" width="100%" height="auto"></img>
      </div>
    </div>
  );
}
