//rcc snippet

import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import useScroll from "../utils/hooks/useScroll";
import Image from "./image";

//?functional component
export default function images() {
  // const [images, setimages] = useState([]); //!imported via fetchImages hook, right below here

  const [images, setimages] = useFetchImage();

  //I'll import the hook useScroll here, generally, hoooks start with useXxxx names.
  const scrollPosition = useScroll();

  //TODO more useffect tests on image array and input focus ------------
  //This inputref is to hold focus on an input box only
  const inputref = useRef(null);

  //to be used as reference for state changes of images (when deleting for instance)
  const varRef = useRef(0);

  //useffect for mount of inputref
  useEffect(() => {
    inputref.current.focus();
    
    //TODO Ill use this below as a hook, useFetchImage
    // axios
    //   .get(
    //     `${process.env.REACT_APP_UNSPLASH_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    //   )
    //   .then((res) => {
    //     setimages(res.data);
    //     //console.log(res);
    //   });
    //this below is using JS only, above we use the useRef mode.
    // const inputBox = document.getElementById("inputBox");
    // inputBox.focus();
    //console.log(varRef);
    //TODO
  }, []);

  //useffect to keep track of how many updates are made on my images array (just for updates)
  useEffect(() => {
    varRef.current = varRef.current + 1;
    //setting an update within an update useEffect, will create an infinite loop, because once i setUpdate it actually is an update, so it does the useeffect again and so on. That's why we use useRef, to hold a state, which behaves like a varibale instead of a state.
    //setupdateCount(updateCount + 1);
    return () => {};
  }, [varRef.current]); //this makes the useeffect run on every render, if i give it empty, it runs only once. (if this prop changes, it triggers again)
  //TODO end of useeffect for arrays images----------------------------

  //? testing the uselayouteffect and useeffect -----------------------
  //   const [myName, setmyName] = useState("Diego");

  //   // use effect runs after the new rendering is complete, the component is already printed on screen
  //   useEffect(() => {
  //     console.log("i am useeffect 1");
  //   });

  //   //This layout effect runs along with the re-render, synchronously, used for rare cases.
  //   useLayoutEffect(() => {
  //     setmyName("my new name is React JS");
  //     console.log("i am useLayouteffect 2");
  //   });
  //? end of layout test -----------------------------------------------

  //* Image states, remove handler -------------------------------------
  const [newImageUrl, setnewImageUrl] = useState(""); //This state will be reflected in the input where i have the input (and is realted to this state, in the return section)

  function handleRemove(index) {
    //console.log(`image index: ${index}`);

    //this filter removes whatever we filter, in this case, anything different from current image
    //console.log(images.filter((image, i) => i !== index));
    //setimages(images.filter((image, i) => i !== index));

    //fitering with spread operator, which opens the array into elements, the brackets here create a new array, with the separated elements of the spread operator.
    //A good example for spread operator is a book, and you want to separate the pages, so you get rid of the back and fron tcover, which is what spread does, with the array and gets elements only. Therefore i add brackets to create a new book.
    // console.log([
    //   ...images.slice(0, index),
    //   ...images.slice(index + 1, images.length),
    // ]);

    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    //console.log("i am changing the state");
  }
  //* Image states, remove handler----------------------------

  //! I dont need this variable below, i just use the state as a holder for the first images
  //   const images = [
  //     "https://images.unsplash.com/photo-1623275563425-82bfaf4599a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",

  //     "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

  //     "https://images.unsplash.com/photo-1623340437564-0f27a51621bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",

  //     "https://images.unsplash.com/photo-1623334689744-ffe1e9fa9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80",

  //     "https://images.unsplash.com/photo-1623334577342-d65961791db8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //   ];

  //This effects were made to show mounting and unmounting a component, as its lifecycle
  //   useEffect(() => {
  //     console.log("Images comp mounted");

  //     const interval = setInterval(() => {
  //       console.log("Hello");
  //     }, 1000);

  //     //This return acts as a unmount state
  //     return () => {
  //       console.log("Images unmount");
  //       clearInterval(interval);
  //     };
  //   }, []);
  //! ------------------------------------------------------------

  //TODO creating components inside components -------------------
  //creating a component inside a component to show images
  // Unique keys, for each element of an array as if the program cant identify each element, how could you update, delete,etc said element, so we use an index of the array for instance here, to give entity to each image. //*BUT indexes are not recommended to use as keys
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
  //TODO end of components ---------------------------------------------

  //?creating a state to show or not show an elmeent on mouse hover--
  //unused functions below, just an example of application
  //   function handleMouseEnter() {
  //     //console.log("mouse over image");
  //   }
  //   function handleMouseLeave() {
  //     console.log("mouse left the image");
  //   }
  //   function crossClass() {
  //     return;
  //   }
  //? ---------------------------------------------------------------

  return (
    <section>
      {/* The hook variable goes here, scrollPosition*/}
      {scrollPosition}
      {/* <h2>Component is updated {varRef.current} times</h2> */}
      <div className="flex flex-wrap justify-center">
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

//! Class based component down below-------------------------------
// export default class Images extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { interval: null };
//   }

//   componentDidMount() {
//     console.log("Image mounted");
//     this.setState({
//       interval: setInterval(() => {
//         console.log("Hello");
//       }, 1000),
//     });
//   }

//   //Once the component is unmounted, you can perform certain tasks, to make sure you close it properly
//   componentWillUnmount() {
//     console.log("Images unmounted");
//     clearInterval(this.state.interval);
//   }
//   render() {
//     return (
//       <img
//         className="mt-2"
//         src="https://images.unsplash.com/photo-1623275563425-82bfaf4599a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//         alt="roses"
//       ></img>
//     );
//   }
// }
//!---------------------------------------------------------------------
