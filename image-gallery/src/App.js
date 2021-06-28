import React from "react";
import "./assets/css/styles.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import routes from "./utils/routes";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route) => (
            <Route path={route.path} exact={route.exact} component={route.component}/>
          ))}
      </Switch>
    </Router>
  );
}
export default App;
