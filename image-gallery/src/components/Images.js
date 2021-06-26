//rcc snippet

import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import useScroll from "../utils/hooks/useScroll";
import Image from "./image";

//?functional component
export default function images() {
  const [images, setimages] = useFetchImage();

  const scrollPosition = useScroll();

  const inputref = useRef(null);

  const varRef = useRef(0);

  useEffect(() => {
    inputref.current.focus();
 
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
   
    return () => {};
  }, [varRef.current]);
  const [newImageUrl, setnewImageUrl] = useState(""); 

  function handleRemove(index) {
   
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);

  }
  
  function ShowImage(params) {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        const
        key={index}
      />
    ));
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setimages([newImageUrl, ...images]);
      setnewImageUrl("");
    }
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
    //console.log(event.target.value);
  }

  return (
    <section>
      {scrollPosition}

      <div className="gap-0" style={{
        columnCount:5
      }}>
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            id="inputBox"
            ref={inputref}
            className="p-2 border border-gray-800 shadow rounded w-full"
            onChange={handleChange}
            value={newImageUrl}
          />
        </div>
        <div className="">
          <button
            disabled={newImageUrl === ""}
            className={`p-2 text-white ml-2 ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-200"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
