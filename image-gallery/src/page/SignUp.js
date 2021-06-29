import React, {useState} from 'react'
import firebase from '../config/firebase'
import { useHistory } from "react-router-dom";
import { Field, ErrorMessage, Form, Formik, useFormik, useFormikContext } from 'formik';
import * as Yup from 'yup'


export default function SignUp(){
    const history = useHistory()
    return (
        <Formik 
        initialValues={{email:"", password:""}}
        onSubmit={(value, formikBag) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
                (res) =>{
                    history.push('/')
                }
            ).catch((e)=>{
                formikBag.setFieldError('email', e.message)
            });
        }}
        validationSchema={Yup.object({
            email: Yup.string().required('Email is required.').email('Email is invalid.'),
            password: Yup.string().required('Password is required.').min(6)
        })}>
        
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <Form className="m-5 w-10/12">
                    <h1 className="w-full text-4xl tracking-widest text-center my-6 text-white">
                        Sign Up
                    </h1>
                    <div className="w-full my-6">
                        <Field type="email" className="p-2 rounded shadow w-full" placeholder="Email or username" name="email"/>
                         <ErrorMessage name="email" />
                        
                    </div>
                    <div className="w-full my-6">
                        <Field type="password" name="password" className="p-2 rounded shadow w-full" placeholder="Password"/>
                        <ErrorMessage name="password" />

                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                            Sign Up
                        </button>
                    </div>
                </Form>
            </div>
      </div>
    </Formik>
    
)}
