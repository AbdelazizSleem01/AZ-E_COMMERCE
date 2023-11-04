import React from 'react'
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import '../style/Login.scss'

const ForgetPass = () => {

    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return (
        <div className='Forget '>
                <h1 className='text-center'> Forgot Password</h1>
                <form className='Forget_btn  mx-auto' onSubmit={(e)=>handleSubmit(e)}>
                    <input className='mx-auto'  name="email" />
                    <button className='mx-auto'>Reset</button>
                </form>
        </div>
    )
}

export default ForgetPass
