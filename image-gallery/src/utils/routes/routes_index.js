import React from "react"
import Home from "../../page/Home"
import Login from "../../page/Login"
import Gallery from "../../page/Gallery"
import SignUp from "../../page/SignUp"
import TensorFlow from "../../page/TensorFlow"

const routes_index = [
    {
        path: '/',
        exact: true,
        component: ()=> <Home />,
        protected: null,
    },
    {
        path: '/login',
        component: ()=> <Login />,
        protected: 'guest',
    },
    {
        path: '/gallery',
        component: ()=> <Gallery />,
        protected: 'auth',
    },
    {
        path: '/signup',
        component: ()=> <SignUp />,
        protected: 'guest',
    },
    {
        path: '/tensorflow',
        component: ()=> <TensorFlow />,
        protected: null,
    },
]

export default routes_index