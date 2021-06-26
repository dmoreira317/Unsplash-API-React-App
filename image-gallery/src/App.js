import React, { useState, useEffect, useRef } from "react";
import "./assets/css/styles.css";
import Images from "./components/Images";

function App() {
  const [title, setTitle] = useState("Hello react");

  return (
    <section className="flex justify-center">
      {/*console.log("Rendered")*/}
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>

          <Images />
     
        </div>
      </div>
    </section>
  );
}
export default App;
