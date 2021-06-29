import React, {useState} from 'react'
import firebase from '../config/firebase'
import { useHistory } from "react-router-dom";
import { Formik, useFormik, useFormikContext } from 'formik';


export default function SignUp() {
    const formik = useFormik({
        initialValues: {email:"", password:"",},
        onSubmit: (value) => {
            console.log("Formik", value);
        },
        validate: values => {
            const errors = {};
            if (!values.email){
                errors.email = "Email field is required."
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

            if (!values.password){
                errors.password = "Password field is required."
            }else if (values.password.length <= 6){
                errors.password = "Password must be longer than 6 characters."
            }
            return errors
        }
    })

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
                    <h1 className="w-full text-4xl tracking-widest text-center my-6 text-white">
                        Sign Up
                    </h1>
                    <div className="w-full my-6">
                        <input type="email" className="p-2 rounded shadow w-full" placeholder="Email or username" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {
                            formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>: null
                        }
                        
                    </div>
                    <div className="w-full my-6">
                        <input type="password" className="p-2 rounded shadow w-full" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {
                            formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>: null
                        }
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                            {/*
                                isLoading ? <i className="fas fa-circle-notch fa-spin"></i>:*/}Sign Up
                        </button>
                    </div>
                   
                </form>
                
            </div>
            
      </div>
    )
}
