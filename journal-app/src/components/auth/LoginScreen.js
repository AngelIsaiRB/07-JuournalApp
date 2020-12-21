import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h3>Login</h3>
            <form>
                <input type="text" placeholder="email" name="email"></input>
                <input type="password" placeholder="password" name="password"></input>

                <button type="submit" >Login</button>

                <hr/>
                google login
            </form>
        </div>
    )
}
