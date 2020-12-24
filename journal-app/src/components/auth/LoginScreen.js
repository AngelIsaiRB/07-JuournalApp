import React from 'react'

import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom'
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, hnaldeinputchange] = useForm({
        email: "email@emial.com"  ,
        password:"1q123412",
    });

    const {email, password}=formValues

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }

    const handleGoogleLogin = () =>{
        dispatch(startGoogleLogin());
    }


    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    className="auth__input" 
                    value={email}   
                    onChange={hnaldeinputchange} 
                    autoComplete="off" 
                    type="text" 
                    placeholder="Email" 
                    name="email"></input>

                <input 
                    className="auth__input" 
                    value={password} 
                    onChange={hnaldeinputchange}  
                    type="password" 
                    placeholder="password" 
                    name="password"></input>

                <button className="btn btn-primary btn-block" type="submit" >Login</button>

                <hr/>
                <div className="auth__social-networks">
                    <p>login whit social network</p>
                    <div className="google-btn"
                         onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                        <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                create new account
                </Link>
            </form>
        </div>
    )
}
