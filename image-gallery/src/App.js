import React from "react";
import "./assets/css/styles.css";

//Class based component, less used since the introduction of hooks, and functional components
// class App extends React.Component {
//   constructor(props) {
//     super(props); //im bringing the props from the React.Component class
//     this.state = { title: "Hello React 2" };
//   }
//   render() {
//     return <div>{this.state.title}</div>;
//   }
// }

// just for rendering or static features
//double curly braces for accessing the object props for style for instance, one for the prop and another for the style object
function App({ title }) {
  return (
    <div>
      <div className="bg-gray-600 text-white p-5 border">
        {title}, Hola con estilo
      </div>
    </div>
  );
}
export default App;
