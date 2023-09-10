import React, {useState} from "react";
import "./register.css"
import {Link,useNavigate} from "react-router-dom"

import {useGoogleLogin} from '@react-oauth/google';


import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import convertToBase64 from '../../helper/convert';
import { registerUser } from '../../helper/helper'
import toast, { Toaster } from 'react-hot-toast';




const InitState = {
    firstName: "",
    lastName: "",
    email: '',
    password: '',
    confirmPassword: ''
}


function Register() {
 
    {/*
    const nagivate = useNavigate();
  //  const dispatch = useDispatch();
    const [sForm,
        setsForm] = useState(InitState)

    const handleChange = (e) => setsForm({
        ...sForm,
        [e.target.name]: e.target.value
    });

    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

      //  dispatch(signupGoogle(accessToken,nagivate))
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (sForm.firstName !== "" && sForm.lastName !== "" && sForm.password !== "" && sForm.confirmPassword !== "" && sForm.email !== "" && sForm.password === sForm.confirmPassword && sForm.password.length >= 4) {
       //     dispatch(signup(sForm,nagivate))
        }
    }

    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

*/}

    





const navigate = useNavigate()
const [file, setFile] = useState()


const formik = useFormik({
  initialValues : {
    email: '',
    username: '',
    password : ''
  },
  validate : registerValidation,
  validateOnBlur: false,
  validateOnChange: false,
  onSubmit : async values => {
    values = await Object.assign(values, { profile : file || ''})
    let registerPromise = registerUser(values)
    toast.promise(registerPromise, {
      loading: 'Creating...',
      success : <b>Register Successfully...!</b>,
      error : <b>Could not Register.</b>
    });

    registerPromise.then(function(){ navigate('/')});
  }
})

/** formik doensn't support file upload so we need to create this handler */
const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}






    
    
    






    return (
        <>
         
             <form  onSubmit={formik.handleSubmit}>

             <Toaster position='top-center' reverseOrder={false}></Toaster>

           <div className="loginContainer">
              <div className="loginContainerv2">
                 <h1>Create your account</h1>

                <div className="inputContainer">
                    <label>FIRST NAME</label>
                    {/* onChange={handleChange} */}
                    <input style={{backgroundColor:"gray", color:"black"}}  name="firstName" placeholder="enter your first name" type="text"/>
               
               
                    <input {...formik.getFieldProps('username')} type="text" placeholder='Username*' />
                </div>


                

                <div className="inputContainer">
                    <label>LAST NAME</label>
                    {/* onChange={handleChange} */}
                    <input   style={{backgroundColor:"gray", color:"black"}} name="lastName"  placeholder="enter your last name" type="text"/>
               
                </div>



                <div className="inputContainer">
                    <label>EMAIL</label>
                     {/* onChange={handleChange} */}
                  
                    <input style={{ backgroundColor: "gray", color: "black" }} name="email" placeholder="enter your email" type="email" />
                
                
                    <input   {...formik.getFieldProps('email')}  type="text" placeholder='Email*' />
                
                </div>

                

                <div className="inputContainer">
                    <label>PASSWORD</label>
                     {/* onChange={handleChange} */}
                    <input style={{backgroundColor:"gray", color:"black"}} name="password" placeholder="enter your password" type="password"/>
                
                    <input {...formik.getFieldProps('password')} type="text" placeholder='Password*'  />
                
                </div>

                

{/*
                <div className="inputContainer">
                    <label>CONFIRM PASSWORD</label>
                    // onChange={handleChange} 
                    <input style={{backgroundColor:"gray", color:"black"}}   name="confirmPassword"  placeholder="retype your password" type="password"/>
           
                </div>
 */}    

                

                <div className="footerContainer">
                        <div>
                            Already Signed Up? <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/account/forgotpassword">Forgot Password?</Link>
                        </div>
                </div>
                



                      {/*   onClick={handleOnSubmit}  */}
                <button  className="loginBTN"      type='submit'   >REGISTER</button>
                <span className="or">or</span>
                      {/*  onClick={() => login()}  */}

                      <button  className="googleBTN">
                    <i class="fa-brands fa-google"></i>  Sign in with google</button>
                  


            </div>

                </div>
                
            </form>
        </>
    )
}

export default Register;