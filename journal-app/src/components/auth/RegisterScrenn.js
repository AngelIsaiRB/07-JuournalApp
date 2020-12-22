import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScrenn = () => {
    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form>
                <input className="auth__input" autocomplete="off" type="text" placeholder="Name" name="name"></input>
                <input className="auth__input" autocomplete="off" type="text" placeholder="Email" name="email"></input>
                <input className="auth__input" type="password" placeholder="password" name="Password"></input>
                <input className="auth__input" type="password" placeholder=" confirm password" name="Password2"></input>

                <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>

               
               
                <Link className="link " to="/auth/login">
                Already register?
                </Link>
            </form>
        </div>
    )
}
