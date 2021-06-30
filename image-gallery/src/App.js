import React, {useEffect, useState} from "react";
import "./assets/css/styles.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import routes from "./utils/routes/routes_index";
import Navbar from "./components/Navbar";
import firebase from "firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";
import AnimatedRoute from "./utils/routes/AnimatedRoute";


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [user, setuser] = useState({})
  const [isLoading, setisLoading] = useState(true)
 
  useEffect(() => {
    setisLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setisLoggedIn(true)
            setuser(user)
            setisLoading(false)
        } else {
          setisLoggedIn(false)
          setuser({})
          setisLoading(false)
        }
      });
}, [])

  if (isLoading) return <Loading />
  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Navbar />
        <Switch>
          {routes.map((route, index) =>{
              if (route.protected === 'guest'){
                return (<GuestRoute key={index} path={route.path} exact={route.exact} >
                    <route.component />
                </GuestRoute>
                )}
              
              if (route.protected === 'auth'){
                return (<AuthRoute key={index} path={route.path} exact={route.exact}>
                   <route.component />
                </AuthRoute>
              )}
              return (<AnimatedRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
              </AnimatedRoute>
              )}
            )}
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}
export default App;
