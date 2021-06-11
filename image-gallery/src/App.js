import React, { useState, useEffect, useRef } from "react";
import "./assets/css/styles.css";
import Images from "./components/Images";

//Class based component, less used since the introduction of hooks, and functional components
// class App extends React.Component {
//   constructor(props) {
//     super(props); //im bringing the props from the React.Component class
//     this.state = { title: "Hello React", isShowing: false };
//     console.log("App constructor");
//   }
//   //states are immutable, you need to use a setState to update a state

//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//     // this.state is an object thus i need to make the update as an object

//     //    This below also works, but its not as short and pretty
//     //   if (this.state.isShowing == false) {
//     //     return this.setState({ isShowing: true });
//     //   } else {
//     //     return this.setState({ isShowing: false });
//     //   }
//   };

//   //This hook means that the app is fully mounted, i can also check when an app is constructed, and also rendered and how it changes by consoleloggin it, this below will only work after the component is ready.
//   componentDidMount() {
//     console.log("App Mounted");
//     this.setState({
//       title: " title state was changed to: Roses image on and off",
//     });
//   }

//   //This hook runs only when an update happens
//   componentDidUpdate() {
//     console.log("App updated");
//   }

//   render() {
//     console.log("App render");
//     return (
//       <section className="flex justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4">{this.state.title}</div>
//             <div>
//               <button
//                 className="p-1 bg-blue-700 text-white mb-2"
//                 onClick={this.handleClick}
//               >
//                 Toggle Image
//               </button>
//             </div>
//             {this.state.isShowing ? <Images /> : null}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// just for rendering or static features
//double curly braces for accessing the object props for style for instance, one for the prop and another for the style object
function App() {
  const [title, setTitle] = useState("Hello react");

  //This states are realted to the toggle button, handle change and effects, which were meant to show the lifecycle of components
  //   const [isShowing, setIsShowing] = useState(false);
  //   const [didMount, setdidMount] = useState(false);
  //   const mountRef = useRef(false);

  // A function to show/hide the images, works along the button in return.
  //   function handleClick() {
  //     setIsShowing(!isShowing);
  //   }

  //All these effects were created alogn with toggle button and handle click to show the components lifecycle
  //   useEffect(() => {
  //     //Triggered on component mounted, by not using the second argument [],
  //     setdidMount(true);
  //     console.log("App mounted");
  //     setTitle("Title changed by setTitle");
  //     return () => {};
  //   }, []);

  //   //Component will update
  //   useEffect(() => {
  //     //Triggered on component updated, by using the brackets, if the state is passed in those brackets, this useEffect only works for that updated state. Here i check the state of the mounting, which is changed only when app is mounted and only then i give the log for the update below
  //     if (mountRef.current) {
  //       console.log("App updated");
  //     } else {
  //       mountRef.current = true;
  //     }
  //     return () => {};
  //   }, [isShowing]);

  return (
    <section className="flex justify-center">
      {/*console.log("Rendered")*/}
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>

          <Images />
          {/* // only to use for example, this activates or deactivates the images on-screen
          <div>
             <button
              className="p-1 bg-blue-700 text-white mb-2"
              onClick={handleClick}
            >
              Toggle Image
            </button>
          </div>
           
          {isShowing ? <Images /> : null}
           
          </div>*/}
        </div>
      </div>
    </section>
  );
}
export default App;
