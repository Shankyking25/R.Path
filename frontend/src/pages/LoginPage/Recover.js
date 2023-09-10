import React, {useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./login.css"
import {useGoogleLogin} from '@react-oauth/google';

import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'




function Login(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    {/*
    const navigate = useNavigate()
   // const dispatch = useDispatch()


    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

     //   dispatch(signinGoogle(accessToken,navigate))
    }
    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

    function handleSubmit(e){
        e.preventDefault();
        if(email !== "" && password !== ""){
      //      dispatch(signin({email,password}, navigate))
        }

    }

*/}
    


const clientId = "526431704672-8s013obbhq6ck3d3t4jqq9hbt2rhjcu1.apps.googleusercontent.com";
useEffect(() => {
    gapi.load("client:auth2", () => {
        gapi.auth2.init({ clientId: clientId })
    })
}, [])

const responseGoogle = (response) => {
    // console.log(response)
    axios.post('http://localhost:8000',
        { idToken: response.tokenId }
    ).then(response => {
        // console.log(response)
        props.response(response)
    })
        .catch(err => { console.log(err) })
}





    

    return (
        <div className="loginContainer">
            <div className="loginContainerv2">
                <h1>Welcome back</h1>

                <div className="inputContainer">
                    <label>EMAIL</label>
                    <input style={{backgroundColor:"gray", color:"black"}}     onChange={e=> setEmail(e.target.value)} placeholder="enter your email" type="email"/>
                </div>

                <div className="inputContainer">
                    <label>PASSWORD</label>
                    <input  style={{backgroundColor:"gray", color:"black"}}    onChange={e=> setPassword(e.target.value)} placeholder="enter your password" type="password"/>
                </div>

                <div className="forgetmeContainer">
                    <div>
                        Remember Me <input type="checkbox" />
                    </div>
                    <div>
                        <Link to="/account/forgotpassowrd">Forgot password?</Link>
                    </div>
                </div>
                               {/*   onClick={handleSubmit} */}
                <button className="loginBTN">LOGIN</button>
                <span className="or">or</span>
                          {/* onClick={() => login()} */}
                 <button  className="googleBTN">
                    <i class="fa-brands fa-google"></i>  Sign in with google</button>
                
                    <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
                    <span className="notreg">Not registered yet?  <Link className="singupBTN" to="/register">Register</Link></span>
                    
            </div>

        </div>
    )
}

export default Login;