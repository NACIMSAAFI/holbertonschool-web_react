import React from'react';
import './Login.css';

function Login(){
    return(
        <div className="login">
                <p>Login to access the full dashboard</p>
                
                {/* Email input */}
                <label htmlFor="email"><b>Email</b></label>
                <input 
                type="email" 
                placeholder="Enter Email" 
                name="email" 
                id="email" 
                required 
                />

                {/* Password input */}
                <label htmlFor="psw"><b>Password</b></label>
                <input 
                type="password" 
                placeholder="Enter Password" 
                name="psw" 
                id="psw" 
                required 
                />

                {/* Submit button */}
                <button type="submit" className="registerbtn">OK</button>
            </div>
    )
}

export default Login;