import React, {useEffect, useState} from "react";
import "./assets/css/styles.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import routes from "./utils/routes";
import Navbar from "./components/Navbar";
import firebase from "firebase";
import AppContext from "./store/AppContext";


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [user, setuser] = useState({})
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setisLoggedIn(true)
            setuser(user)
        } else {
          setisLoggedIn(false)
          setuser({})
        }
      });
}, [])

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Navbar />
        <Switch>
          {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
            ))}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}
export default App;
