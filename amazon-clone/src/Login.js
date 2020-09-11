import React, { useState } from 'react';
import  {Link, useHistory} from "react-router-dom";
import "./Login.css";
import {db, auth} from "./firebase"
import { useRadioGroup } from '@material-ui/core';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = event => {
        event.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // creation réussie
            console.log(auth);
            if (auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return(
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1> Sign In </h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login__signInButton" type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p>By Signing-In you agree to the Amazon Clone
                    Condition of Use.
                </p>
                <button className="login__registerButton" type='submit' onClick={register}> Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;