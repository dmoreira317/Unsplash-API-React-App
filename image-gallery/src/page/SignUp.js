import React, {useState} from 'react'
import firebase from '../config/firebase'
import { useHistory } from "react-router-dom";
import { Formik, useFormik, useFormikContext } from 'formik';
import * as Yup from 'yup'


export default function SignUp(){
    const formik = useFormik({
        initialValues: {email:"", password:""},
        onSubmit: (value) => {
            console.log("Formik", value);
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required.').email('Email is invalid.'),
            password: Yup.string().required('Password is required.').min(6)
        }),
    })

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
                    <h1 className="w-full text-4xl tracking-widest text-center my-6 text-white">
                        Sign Up
                    </h1>
                    <div className="w-full my-6">
                        <input type="email" className="p-2 rounded shadow w-full" placeholder="Email or username" name="email" value={formik.values.email} 
                        onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                            Sign Up
                        </button>
                    </div>
                   
                </form>
                
            </div>
            
      </div>
    )
}
