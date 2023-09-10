import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fragment, useState, useEffect, useRef } from "react";
import TextField from '@mui/material/TextField';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MKInput from "components/MKInput";
import { Switch } from "@mui/material";
import MKButton from "components/MKButton";
import { useDispatch, useSelector } from 'react-redux'
import TYPES from "../redux/types"
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import CloseIcon from "@mui/icons-material/Close";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios'
import { alpha, styled} from '@mui/material/styles';
import GoogleLogin from 'react-google-login';

import Image from 'mui-image'

import { Box, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



import { FacebookLoginButton,GoogleLoginButton,LinkedInLoginButton,TwitterLoginButton,DiscordLoginButton } from "react-social-login-buttons";


//import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

import { useAuth0 } from "@auth0/auth0-react";


import { googleLogout, useGoogleLogin } from '@react-oauth/google';


import TwitterLogin from "../pages/TwitterLogin";
import FacebookLogin from "../pages/facebook";


import { useLinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';





const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};





const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
  });





function UserForm0() {
  const { register, handleSubmit, setValue,  formState: { errors }   } = useForm({ mode: 'onBlur' });
  const [gender, setGender] = useState('');
  

  
    /*

    const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;
      const res = await axios.post('/api/login', { tokenId });
      console.log(res.data); // Handle the response accordingly
    } catch (error) {
      console.error(error);
    }
  };
    
     
     */


    const handleLogin = () => {
        console.log("____________")
        axios
        .get('http://localhost:8000/auth/google')
        .then((res) => {
          const { name, email, password, } = res.data.user;
          // Store the user data in your React state or global state management (e.g., Redux)
          // You can use the retrieved data as needed in your application
  
          console.log(name, email, password,gender);
  
          // Redirect to the desired page or perform any other actions
        })
        .catch((err) => {
          console.log(err);
        });
}

  
const responseGoogle = async (response) => {
  try {
    const { tokenId } = response;
    const res = await axios.post('http://localhost:8000/api/login', { tokenId });
    console.log(res.data); // Handle the response accordingly
  } catch (error) {
    console.error(error);
  }
};



    





 

  const handleChange = (e) => {
    setGender(e.target.value);
  };








    const classes = useStyles();




    const { linkedInLogin } = useLinkedIn({
      clientId: '86vhj2q7ukf83q',
      redirectUri: `${window.location.origin}/linkedin`,
      onSuccess: (code) => {
        console.log("------------");
        console.log(code);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  

  


  





  ///////////////////////////////////////
  

  
    //  const { loginWithRedirect,user, isAuthenticated, isLoading,logout } = useAuth0();

      

//////////////////////////////////////////

  
  



//New Testing 
const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};



  

const [ user, setUser ] = useState([]);
const [ profile, setProfile ] = useState([]);

const login = useGoogleLogin({
  onSuccess: (codeResponse) => setUser(codeResponse),
  onError: (error) => console.log('Login Failed:', error)
});

useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                  setProfile(res.data);
                  
                  console.log(res.data)
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

// log out function to log the user out of google and set the profile array to null
const logOut = () => {
    googleLogout();
    setProfile(null);
};








  


  
  return (
    <>       
    

    <Grid container item xs={12} lg={12}>
              

   
              

          <MKBox
 
 pl={{ base: '2px', md: '10px', lg: '135px' }}
  pr={{ base: '2px', md: '10px', lg: '135px' }} 
 bgColor="black"
 width={"100%"}
 
 left={0}
 zIndex={3}
 
 >
 <MKBox display="flex" justifyContent="space-between" alignItems="center">
   <MKBox
    
 
   
   > 
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
       {/*<MKButton size ="small" color="primary" onClick={connectWallet} >
         Connect Wallet
         </MKButton>*/}
       </MKBox>

    </MKBox>
    </MKBox>
 </MKBox>
                      



              


              <MKBox ml={{ xs: "auto", lg: 0 }}>

              <div style={{zIndex:'2',position:'absolute', left:'50%', top:'25%', transform: 'translateX(-50%)'}}>
<MKBox >

<MKBox sx={{backgroundColor: "#0A0519"}}
p={3.5}
position="relative"
width="360px"
display="flex"
flexDirection="column"
borderRadius="xl"
shadow="xl"

border="1px solid #1AADB2"
>
     <MKBox  xs={12} sm={12}  md={12} lg={12} xl={12}    >

   
      <Stack >
      <MKTypography color="primary" style={{textAlign:'center'}}>Form</MKTypography>

      </Stack>
    </MKBox>

   
                              



    <MKBox  
mt={2}
mb={2}
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
                                  

        <form>                         
        <Stack direction={'row'} spacing={2}   >
              



       <Box display="flex" flexDirection="column"   style={{ width:"100%", textAlign:"center", }}>
      <Box className={classes.root}  style={{ textAlign:"center", }}>
        <InputLabel htmlFor="name"    style={{width:"30%"}}>Name:</InputLabel>
        <TextField id="name"  style={{width:"100%"}} fullWidth />
      </Box>
     
     <Box className={classes.root}  mt={1}
mb={1}
 style={{ width: "100%"}}>
        <InputLabel htmlFor="email"  style={{width:"30%"}}>Email:</InputLabel>
        <TextField id="email"   style={{width:"100%"}} fullWidth/>
      </Box>





      <Box className={classes.root}  mt={1}
mb={1}
 style={{ width: "100%"}}>
        <InputLabel htmlFor="password"  style={{width:"40%"}}>Password:</InputLabel>
        <TextField id="password"   style={{width:"100%"}} fullWidth/>
      </Box>




     <Box   style={{display:"flex",alignItems: 'center', width:"100%"}}>
        <InputLabel htmlFor="gender"  style={{ width:"30%"}}>Gender:</InputLabel>
          {/* <TextField id="email"   style={{width:"100%"}} fullWidth/>  */}
      
          
          <FormControl     fullWidth >
                    
                    <Select
                    
                    {...register("gender", {required: true})}
                      value={gender}
                     
                      onChange={handleChange}
                      style={{height:'45px'}}
                    >
                    <MenuItem value={"Male"} key={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"} key={"Female"} >Female</MenuItem>
                    </Select>
                  </FormControl>
                 
         </Box>
                                          



         <Box className={classes.root}  mt={1}
mb={1}
 style={{ width: "100%"}}>
        <MKButton  size="small" variant="outlined"  >Continue</MKButton>
      </Box>

                                          


      <Box className={classes.root}  mt={4}
mb={3}
 style={{ width: "100%", justifyContent:"center"}}>
        <MKButton  size="small" variant="outlined"   type="submit"  >Submit</MKButton>
      </Box>

    </Box>
 </Stack>
                                  </form>


                                  <hr />
            <br/>                      

                                  <Box>
                                      
                                      

      <FacebookLoginButton onClick={() => alert("Hello")} />
      <GoogleLoginButton onClick={() => handleLogin()} />
      <TwitterLoginButton onClick={() => alert("Hello")} />
      <DiscordLoginButton onClick={() => alert("Hello")} />                                   
      <LinkedInLoginButton onClick={() => alert("Hello")} />

</Box>







</MKBox>







</MKBox>
</MKBox>
</div>

</MKBox>


        {/*     
       
        {isAuthenticated ? (<>
            
<MKButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </MKButton>

          </>):(
        <>
          
          

<MKButton onClick={() => loginWithRedirect()}>Log In  </MKButton>


        </>
          )
}

*/}
        

        {/*   
        <div>
          <MKButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </MKButton>

 

      <MKButton onClick={() => loginWithRedirect()}>Log In  </MKButton>

      </div>
*/}










              {/*

<div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>

                                */}



        <br /><br />
        
        <div>
        <div>
            <h2   style={{color:"white"}}>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div  style={{color:"white"}}>
                    <img src={profile.picture} alt="user image" />
                    <h3 style={{color:"white"}}>User Logged in</h3>
                    <p style={{color:"white"}}>Name: {profile.name}</p>
                <p style={{ color: "white" }}>Email Address: {profile.email}</p>
                <p style={{color:"white"}}>Gender Address: {profile.gender}</p>
                    <br />
                    <br />
                    <button style={{colot:"white"}} onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button style={{colot:"white"}}  onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
        </div>
        


        <div>
          <FacebookLogin />
        <TwitterLogin />
      </div>
   
        <br />
        <br />



</Grid>
   

<br />
        <br />


<div>
        <img
      onClick={linkedInLogin}
      src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth: '180px', cursor: 'pointer' }}
    />
</div>


      







    </>
  );
}

export default UserForm0;
