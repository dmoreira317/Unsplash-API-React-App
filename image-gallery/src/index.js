import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./assets/css/styles.css";
import { BrowserRouter as Router } from "react-router-dom";

//This index is responsible for rendering the app only

ReactDOM.render(
<Router>
    <App />
</Router>,

document.getElementById("root"));
