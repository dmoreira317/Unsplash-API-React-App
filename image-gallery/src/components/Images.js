//rcc snippet

import React, { useEffect, useState } from "react";

//functional component
export default function images() {
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1623275563425-82bfaf4599a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",

    "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

    "https://images.unsplash.com/photo-1623340437564-0f27a51621bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",

    "https://images.unsplash.com/photo-1623334689744-ffe1e9fa9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80",

    "https://images.unsplash.com/photo-1623334577342-d65961791db8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  ]);

  const [newImageUrl, setnewImageUrl] = useState(""); //This state will be reflected in the input where i have the input (and is realted to this state, in the return section)

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

  //creating a component inside a component to show images
  // Unique keys, for each element of an array as if the program cant identify each element, how could you update, delete,etc said element, so we use an index of the array for instance here, to give entity to each image. //!BUT indexes are not recommended to use as keys
  function ShowImage(params) {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div className="relative">
            <i className={crossClass()} onClick={() => handleRemove(index)}></i>
            <img
              className=""
              src={image}
              alt="images"
              width="150"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></img>
          </div>
        </div>
      );
    });
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setimages([newImageUrl, ...images]);
      setnewImageUrl("");
    }
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
    console.log(event.target.value);
  }

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
  }

  //creating a state to show or not show an elmeent on mouse hover
  const [isHovering, setisHovering] = useState(false);
  function handleMouseEnter() {
    //console.log("mouse over image");
    setisHovering(true);
  }

  function handleMouseLeave() {
    console.log("mouse left the image");
    setisHovering(false);
  }

  function crossClass() {
    return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hover:text-red-600 ${
      isHovering ? "" : "hidden"
    }`;
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
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

//! Class based component down below

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
