import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScrenn = () => {

    const  [formValues, handlenputChange ] = useForm({
        name: "isai",
        email : "email@emial.com",
        password : "password",
        password2 : "password",
    });

    const {name,email,password,password2} =formValues;

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                <input value={name} onChange={handlenputChange} className="auth__input" autoComplete="off" type="text" placeholder="Name" name="name"></input>
                <input value={email} onChange={handlenputChange} className="auth__input" autoComplete="off" type="text" placeholder="Email" name="email"></input>
                <input value={password} onChange={handlenputChange} className="auth__input" type="password" placeholder="password" name="password"></input>
                <input value={password2} onChange={handlenputChange} className="auth__input" type="password" placeholder=" confirm password" name="password2"></input>

                <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>

               
               
                <Link className="link " to="/auth/login">
                Already register?
                </Link>
            </form>
        </div>
    )
}
