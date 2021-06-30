import React, {useContext} from 'react'
import {NavLink, useHistory} from "react-router-dom"
import firebase from "../config/firebase"
import AppContext from '../store/AppContext'

export default function Navbar() {
    const [isLoggedIn] = useContext(AppContext)
    const history = useHistory()

    function Logout(){
        firebase.auth().signOut().then(
            (res)=> {
                history.replace('/login')
            }
        ).catch(
            (e)=>{
                console.log(e.response.data);
            }
        )
    }

    return (
        <nav className="py-5 bg-gray-900 text-white flex justify-between">
                <ul className="flex justify-between px-10">
                        <li className="mr-5">
                            <NavLink to="/" exact activeClassName="underline text-blue-200">Home</NavLink>
                        </li>
                        <li className="mr-5">
                            <NavLink activeClassName="underline text-blue-200" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="mr-5">
                            <NavLink to="/tensorflow" exact activeClassName="underline text-blue-200">TensorFlow</NavLink>
                        </li>
                 </ul >
                  <ul className="flex justify-between px-10"> 
                    <li>
                        {
                            isLoggedIn
                            ? (<button onClick={Logout}>Logout</button>)
                            : (<NavLink activeClassName="underline text-blue-200" to="/login">Login</NavLink>)
                        }
                    </li>
                    {
                        !isLoggedIn &&
                        (<li className="ml-5">
                            <NavLink activeClassName="underline text-blue-200" to="/signup">Sign up</NavLink>
                        </li>)
                    }
               </ul>
        </nav>
    )
}