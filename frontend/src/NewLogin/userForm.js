import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fragment, useState, useEffect, useRef } from "react";
import TextField from '@mui/material/TextField';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import MKButton from "components/MKButton";
import { useDispatch, useSelector } from 'react-redux'
import TYPES from "../redux/types"

import Image from 'mui-image'

import { Box, } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import axios from 'axios';




function UserForm() {
 
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

*/
  
  

  
  /*

  const onCreateUser= async(data)=>{

            console.log(data)
  
        dispatch({ type: TYPES.CREATE_REGISTER, user: data })
    
      }
  

*/
  
  
  
  
  
const handleLogout = async () => {
  try {
    // Send a POST request to the logout endpoint on the server
    await axios.post('http://localhost:3000/logout');

    // Clear any client-side authentication token or session
    // For example, remove the token from local storage or cookies
    localStorage.removeItem('token');

    // Perform any additional actions after successful logout
    // For example, redirect the user to the login page
    window.location.href = '/';
  } catch (error) {
    console.error(error);
    // Handle logout error
  }
};




  
  return (
    <>       

    <MKBox xs={12} lg={12}   >
          
        


    <div>
          <button onClick={handleLogout}>Logout</button>
        </div>





        {/*

          <MKBox
 
 pl={{ base: '2px', md: '10px', lg: '135px' }}
  pr={{ base: '2px', md: '10px', lg: '135px' }} 
 bgColor="black"
 width={"100%"}
 
 left={0}
 zIndex={3}
 style={{overflow:"hidden"}}
 >
 <MKBox display="flex" justifyContent="space-between" alignItems="center">
    <MKBox> 
     <Stack direction={"row"} spacing={1}>
                <Image
                  //src={logoImage}
                  alt='Infinity Void' width="40px" />
      <MKTypography variant="logoFont">
        InfinityVoid
       </MKTypography>
      </Stack>  
    </MKBox>
            
   <MKBox
     color="inherit"
     display={{ xs: "none", lg: "flex" }}
     ml="auto"
   >
 
   </MKBox>
     <MKBox ml={{ xs: "auto", lg: 0 }}>
 
       <MKBox p={4}>
     
       </MKBox>

    </MKBox>
  </MKBox>
</MKBox>
  */}       


            
              
        
<br/>


 {/*
     <div  style={{display:"flex",  justifyContent:"center", alignItems:"center", height:"100%",   minHeight:"100vh",overflowY:"hidden"}}>
        

            <div   >   

            <MKBox >

<MKBox sx={{backgroundColor: "#0A0519"}}
pl={3.5} pr={3.5} pb={2} pt={2}
position="relative"
width="360px"
display="flex"
flexDirection="column"
borderRadius="xl"
shadow="xl"

border="1px solid #1AADB2"
>
     <MKBox  xs={12} sm={12}  md={12} lg={12} xl={12}    >

      <MKTypography color="primary" style={{textAlign:'center'}}>Form</MKTypography>

    </MKBox>

   
                              


              
    <MKBox  
mt={1}

p={2}
width="300px"
borderRadius="xl"
shadow="xl"
bgColor="walletBox"
sx={{ display: 'flex-row', backgroundColor:'#343a40',     
'&:hover': {
backgroundColor: "#0A0519",
opacity: [1.9,1.9, 1.9],
border:"1px solid #1AADB2",
transform: "scale(1.05)"


                                      },
                                  }}    >
                                  



                  

        <form autoComplete="off" onSubmit={handleSubmit(onCreateUser)} >
                <TextField 
                    label="Name"
                    {...register("name", {required: true})} 
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                      fullWidth
                    
                  
                 />
                 <TextField 
                     label="Email"
                    required
                    variant="outlined"
                    color="secondary"     
                    type="email"
                    fullWidth
                      sx={{ mb: 3 }}
                      {...register("email",  {required: true})}
                 />
                 
                    

                 <TextField 
                     label="Password"
                    required
                    variant="outlined"
                    color="secondary"     
                    type="password"
                    fullWidth
                      sx={{ mb: 3 }}
                      {...register("password",  {required: true})}
                 />
                 

                 <Box   style={{ width: "100%", textAlign:"center"}}>  
                 <MKButton  size="small" variant="outlined"   type='submit'  >Continue</MKButton>
                 </Box>
     
     
           </form>
  
    
<br/>
                <hr/>  



           <div className="card" style={{ display:"flex"}}>
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/google"   style={{fontSize:'30px'}}><GoogleIcon  style={{color:"white"}}  /></a>   
             </div>
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/facebook" style={{fontSize:'30px'}}> <FacebookIcon style={{color:"white"}} /></a>   
             </div>
            
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/linkedin"   style={{fontSize:'30px'}}><LinkedInIcon  style={{color:"white"}}/></a>   
             </div>


            
             <div className="row"  style={{padding:"15px"}}>
              <a href="/auth/discord" ><i style={{fontSize:'24px', color:"white"}} class='fab'>&#xf392;</i></a>   
             </div>


              
             <div className="row"  style={{padding:"10px"}}>
              <a href="/auth/twitter"  style={{fontSize:'30px'}}>< TwitterIcon style={{color:"white"}}   /></a>   
             </div>


         </div>













</MKBox>







</MKBox>
</MKBox>
</div>

</div>
    */}

 
</MKBox>
                            
    </>
  );
}

export default UserForm;
