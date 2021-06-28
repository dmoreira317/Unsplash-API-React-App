import React, {useState} from 'react'
import firebase from '../config/firebase'
import { useHistory } from "react-router-dom";


export default function Login() {
    let history = useHistory()
    const [isLoading, setisLoading] = useState(false)
    const [errors, seterrors] = useState("")
    const [form, setform] = useState({email: "", password:""})

    function handleForm(e){
        if (isLoading) return;
        setisLoading(true);
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then(
            (res)=>{
                history.push("/") // This takes us to the home page
                seterrors("")
                setisLoading(false)
                console.log('logged in')
            }
        ).catch((e)=> {
            seterrors(e.message)
            setisLoading(false)
        }            
        );
    }
    function handleInput(e){
        setform({
            ...form, [e.target.name]:e.target.value
        })
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto text-3xl flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <form className="m-5 w-10/12" onSubmit={handleForm}>
                    {errors !== "" && <p className="text-red-600">{errors}</p>}
                    <h1 className="w-full text-4xl tracking-widest text-center my-6 text-white">
                        Login
                    </h1>
                    <div className="w-full my-6">
                        <input type="email" className="p-2 rounded shadow w-full" placeholder="Email or username" value={form.email} onChange={handleInput} name="email"/>
                    </div>
                    <div className="w-full my-6">
                        <input type="password" className="p-2 rounded shadow w-full" placeholder="Password" value={form.password} onChange={handleInput} name="password"/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                            {
                                isLoading ? <i className="fas fa-circle-notch fa-spin"></i>:"Login"
                            }
                            </button>
                    </div>
                   
                </form>
                
            </div>
            
      </div>
    )
}
