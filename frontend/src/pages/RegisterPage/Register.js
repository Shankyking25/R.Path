import React, { useState,useEffect, } from 'react';
import axios from 'axios';
import './register.css'
import {Link,useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import TYPES from "../../redux/types"
import { useDispatch, useSelector } from 'react-redux'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Register = () => {

/*
  const { register, handleSubmit,  setValue, formState: { errors }   } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch()
  const currRegister = useSelector(state => state.RegisterDetail);


useEffect(() => {
  if (currRegister) {
      
    setValue("name", currRegister.name);
    setValue("email", currRegister.email);
    setValue("password", currRegister.password);
  }

})



const  navigate = useNavigate()
  

  const onCreateUser= async(data)=>{

            console.log(data)
  
    
            try {
            const res =   dispatch({ type: TYPES.CREATE_REGISTER, user: data })
      
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {

                // You need to Restart the Server for Proxy Works
                // Now try Again
                window.alert("Registered Successfully");
                navigate('/login')
            }
          } catch (error) {
            console.log(error);
        }
    
      }
  

*/

  


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  
const  navigate = useNavigate()
  
const handleSubmit = (e) => {
  e.preventDefault();

  const userData = { name, email, password };

  // Call the register API endpoint with userData
  const res = fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);

      navigate('/login')
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  
    if (res.status === 400 || !res) {
      window.alert("Already Used Details")
  } 
  
  

  // Reset the form
  setName('');
  setEmail('');
  setPassword('');
};






  
  
  
  return (
    <>
    



      <form
     //  onSubmit={handleSubmit(onCreateUser)}
        
        onSubmit={handleSubmit}
       
      >

<Toaster position='top-center' reverseOrder={false}></Toaster>

<div className="loginContainer">
 <div className="loginContainerv2"  style={{border:"2px solid black"}}>
    <h1>Create your account</h1>

   <div className="inputContainer">
       <label> NAME</label>
       {/* onChange={handleChange} */}
       <input style={{backgroundColor:"gray", color:"black"}}   type="text"
        placeholder="  Name"
              //  {...register("name", {required: true})} 
              
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
  

   </div>


   

   <div className="inputContainer">
       <label>EMAIL</label>
  
       <input style={{ backgroundColor: "gray", color: "black" }} type="email"
        placeholder="  Email"
       // value={email}
              //   {...register("email",  {required: true})}
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              />
   
   
              
   </div>

   

   <div className="inputContainer">
       <label>PASSWORD</label>
        {/* onChange={handleChange} */}
              <input style={{ backgroundColor: "gray", color: "black" }}
                 type=" password"
                 placeholder="  Password"
                // value={password}
               // {...register("password", { required: true })}
              
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                
              />
   
   
   
   </div>

   

   <div className="footerContainer">
           <div>
               Already Signed Up? <Link to="/login">Login</Link>
           </div>
           <div>
               <Link to="/account/forgotpassword">Forgot Password?</Link>
           </div>
   </div>
   



        
   <button  className="loginBTN"      type='submit'   >REGISTER</button>

        

    





</div>


   </div>
   
</form>




<br/>
               



      


      

    </>
  );
};

export default Register;