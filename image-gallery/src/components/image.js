import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import useTFClassify from "../utils/hooks/useTFClassify";

function Image({ handleRemove, image, index, show }) {
  const [isHovering, setisHovering] = useState(false);
  const [predict, predictions, setpredictions, isLoading, setisLoading] = useTFClassify()
  const imageRef = useRef()

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
        {isLoading && (<span className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"> <p>Fetching results...</p></span>)}
        {predictions.length > 0 && ( 
            <span className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5" 
            onClick={()=>setpredictions([])}>
                {predictions.map((prediction) => (
                  <div className="flex justify-between">    
                    <p>{prediction.className}</p>
                    <p>{Math.floor(prediction.probability * 100)}%</p>
                  </div>))
                }
            </span>
        )}

        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hover:text-red-600 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
         <i
          className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 hover:text-red-600 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => predict(imageRef.current)}
        ></i>
        <img ref={imageRef} crossOrigin="anonymous" onClick={show} className="" src={image} alt="images" width="100%" height="auto"></img>
      </div>
  );
}

//TODO Manually created errors
// const types = {
//   function(props, propName){
//     if (typeof(props[propName]) !== 'function'){
//       return new Error(`'${propName}' must be a function, but received ${typeof props[propName]}`);
//     }
//   },
//   number(props, propName){
//     if (typeof(props[propName]) !== 'number'){
//       return new Error(`'${propName}' must be a number, but received ${typeof props[propName]}`);
//     }
//   },
// }

//importing errors from prop-types library
Image.propTypes = {
  show: PropTypes.func,
  image: PropTypes.string,
  index: PropTypes.number,
  handleRemove: PropTypes.func,
}
export default Image;