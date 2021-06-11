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

  const [newImageUrl, setnewImageUrl] = useState(null);
  //! I dont need this variable below, i just use the state as a holder for the first images
  //   const images = [
  //     "https://images.unsplash.com/photo-1623275563425-82bfaf4599a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",

  //     "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",

  //     "https://images.unsplash.com/photo-1623340437564-0f27a51621bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",

  //     "https://images.unsplash.com/photo-1623334689744-ffe1e9fa9137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80",

  //     "https://images.unsplash.com/photo-1623334577342-d65961791db8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //   ];

  useEffect(() => {
    console.log("Images comp mounted");

    const interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    //This return acts as a unmount state
    return () => {
      console.log("Images unmount");
      clearInterval(interval);
    };
  }, []);

  //creating a component inside a component to show images
  function ShowImage(params) {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img className="mt-2" src={image} alt="images" width="150"></img>
        </div>
      );
    });
  }

  function handleAdd() {
    setimages([newImageUrl, ...images]);
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
    console.log(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <input
          type="text"
          className="p-2 border border-gray-800 shadow rounded"
          onChange={handleChange}
          value={newImageUrl}
        />
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>
          Add New
        </button>
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
