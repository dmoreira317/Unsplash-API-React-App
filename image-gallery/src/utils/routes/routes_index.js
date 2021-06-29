import React from "react"
import Home from "../../page/Home"
import Login from "../../page/Login"
import Gallery from "../../page/Gallery"

export default [
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
]