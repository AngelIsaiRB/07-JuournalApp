import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScrenn } from '../components/auth/RegisterScrenn';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" component={LoginScreen}/>
                <Route path="/auth/register" component={RegisterScrenn}/>
                
                <Redirect to="/auth/login"/>
            </Switch>
        </div>
    )
}
