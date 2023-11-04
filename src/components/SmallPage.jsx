import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import '../style/Home.scss'

const SmallPage = ({firstName, lastName}) => {

    const [user] = useAuthState(auth)
    const [isClosed, setIsClosed] = useState(false);
    const Navigation = useNavigate();

    
    const handleClose = () => {
        setIsClosed(true);
    };

    if (isClosed) {
        return null;
    }
    const logout = async () => {
        await signOut(auth).then(val=>{
            console.log(val,'val')

        })
        Navigation('/Login'); 
    };



    return (
        <div className="Small_gmail">
            <div className="Close-btn" onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="Name">
                <h6>{user.email}</h6>
                {user?.providerData[0]?.providerId === 'google.com' ? (
                <img src={user.photoURL} className="img-fluid Avatar" alt="" />
                ) : (
                <>
                    <div className="UserPhoto  ">
                        {(firstName && lastName) ? (
                            <>
                                <h6 className="text-uppercase d-flex text-center">
                                {firstName.charAt(0)} {''} {lastName.charAt(0)}
                                </h6>
                            </>
                        ) : ''}
                    </div>
                </>
                )}
                {user ? (
                        <>
                            {user.providerData[0]?.providerId === 'google.com' ? (
                            <h4>Hi, {user.displayName}!</h4>
                            ) : (
                            <h4>Hi, {firstName} {lastName}!</h4>
                            )}
                        </>
                        ) : (
                        <h4>Welcome!</h4>
                        )}
                <Link
                to="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"
                target="_blank"
                >
                <button>Manage your Google Account</button>
                </Link>
            </div>
            <button className="mx-auto Btn_Submit" onClick={logout}>
                Logout
            </button>
            </div>
        );
        };

export default SmallPage

