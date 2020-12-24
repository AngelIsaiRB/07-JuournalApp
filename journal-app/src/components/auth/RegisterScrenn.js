import React from 'react';
import { Link } from 'react-router-dom';
import validator from "validator";
import { useForm } from '../../hooks/useForm';

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
        if(isFormValid()){

        }
    }

    const isFormValid = ()=>{
        
        if(name.trim().length === 0){ 
            console.log("name is required");
            return  false;
        }else if(!validator.isEmail(email)){
            console.log("email is not valid");
            return  false;
        }else if(password !== password2 || password.length <= 5){
            console.log("Password should be at least 6 characters");            
            return  false;
        }
        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                <div className="auth__alert-error">
                    hola mundo
                </div>

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
