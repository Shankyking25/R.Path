import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import TYPES from "../../redux/types"

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = ({ onLogin }) => {
 




const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    
const  navigate = useNavigate()
  
  
const handleSubmit = (e) => {
  e.preventDefault();

  const userData = { email, password };

  // Call the login API endpoint with userData
  const res =  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data


      console.log(res.status)
      if (res.status === 400 || !res) {
        window.alert("Invalid Credential")
      } else {
        window.alert("Login Successfull");
      }


      console.log(data);
      navigate('/')
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

   




  
  // Reset the form
  setEmail('');
  setPassword('');
};




  
  
  


  return (
  <>


      

<br/>

    <div className="loginContainer"  >
        <form //</div>onSubmit={handleLogin}
          onSubmit={handleSubmit}
        >
          <div className="loginContainerv2"  style={{border:"2px solid black"}}  >
                <h1>Welcome back</h1>

            


                <div className="inputContainer">
                    <label>EMAIL</label>
                    <input style={{backgroundColor:"gray", color:"black"}}            type="email"
        placeholder="  Email"
     //   value={email}
              // onChange={(e) => setEmail(e.target.value)}
              
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              
              />
                </div>

                <div className="inputContainer">
                    <label>PASSWORD</label>
                    <input  style={{backgroundColor:"gray", color:"black"}}   type="password"
        placeholder="  Password"
       // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

              
              />
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
                <button className="loginBTN"  type="submit" >LOGIN</button>
                <span className="or">or</span>
                          {/* onClick={() => login()} */}
                          <div style={{ display: "flex", justifyContent:"center",}}>
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/google"   style={{fontSize:'30px'}}><GoogleIcon  style={{color:"black"}}  /></a>   
             </div>
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/facebook" style={{fontSize:'30px'}}> <FacebookIcon style={{color:"black"}} /></a>   
             </div>
            
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/linkedin"   style={{fontSize:'30px'}}><LinkedInIcon  style={{color:"black"}}/></a>   
             </div>


            
              
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/twitter"  style={{fontSize:'30px'}}>< TwitterIcon style={{color:"black"}}   /></a>   
             </div>


         </div>
                  
                    <span className="notreg">Not registered yet?  <Link className="singupBTN" to="/register">Register</Link></span>
                    
            </div>
            </form>
        </div>


      

        <br/>


        <br/>









  </>  
  );
};

export default Login;