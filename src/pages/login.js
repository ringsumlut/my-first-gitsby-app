import React from 'react';
//import { Link } from 'gatsby';
import NavBar from '../components/nav-link';


const LoginPage = () => {

    return (
        <React.Fragment>
            <NavBar />
            <h1>Signup</h1>

            <div className="container">

                <div><label>Email</label>
                    <input type="email" id="email" name="email"></input></div>
                <div><label>Username</label>
                    <input type="text" id="username" name="username"></input></div>
                <div><label>Password</label>
                    <input type="text" id="password" name="password"></input></div>
                <div><label>Re-type Password</label>
                    <input type="text" id="password" name="password"></input></div>
                <button>Signup</button>
            </div >
            <div className="login">
                <h1>Login</h1>
                <div><label>Username</label>
                    <input type="text" id="username" name="username"></input></div>
                <div><label>Password</label>
                    <input type="text" id="password" name="password"></input></div>
                <button>Login</button>
            </div>
        </React.Fragment >
    );
};

export default LoginPage;