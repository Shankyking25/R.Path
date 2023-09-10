
import { Fragment, useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Stack from '@mui/material/Stack';
import MKAvatar from "components/MKAvatar";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
//import defaultBanner from "../assets/images/defaultBanner.jpg";
//import defaultProfile from "../assets/images/defaultAvatar.png";
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useDispatch, useSelector } from 'react-redux';
import S3FileUpload from 'react-s3';
import { useNavigate ,  } from 'react-router-dom';
import moment from "moment";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import TYPES from "../redux/types"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AWS from 'aws-sdk';

import { textAlign } from "@mui/system";

let crossAdd = localStorage.getItem("crossmintAddress");




  const s3FileUpload = new AWS.S3({
    
    correctClockSkew:true,
    
    endpoint:'fra1.digitaloceanspaces.com', //Specify the correct endpoint based on where your bucket is
    
    accessKeyId:process.env.REACT_APP_ACCES_KEY_ID,
    
    secretAccessKey:process.env.REACT_APP_SECRET_ACCESS_KEY,
    
    region:'fra1'//Specify the correct region name based on where your bucket is
    
    ,logger: console
    
    });


function HeaderBanner() {
    const { address, isConnected } = useAccount();
    
    const [profileImage, setProfileImage] = useState("");
    const [notificationMessage, setNotificationMessage] = useState("");
    const [profileimageUrl, setProfileImageUrl] = useState('');
    const profileInput = useRef();
    const [heroBannerImage, setHeroBannerImage] = useState("");
    const [heroBannerimageUrl, setHerobannerImageUrl] = useState('');
    const heroBannerInput = useRef();
    const [bannerStyle, setBannerStyle] = useState({display: 'none'});
    const [profileStyle, setProfileStyle] = useState({display: 'none',zIndex:'100',position:'fixed', top:'120'});
    const [showProfile, setShowProfile] = useState(false);
    const [accountPage, setAccountPage] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [notificationMessageType, setNotificationMessageType] =useState();
    const [openNotificationCopy, setOpenNotificationCopy] = useState(false);
    const currUser = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()


useEffect(()=>{
    var a = window.location.pathname;
    var b = a.split("/");
    if (b[1] == "account"){
      setAccountPage(true);
    }
},[])

useEffect(()=>{
    if(!currUser){
  //  setHeroBannerImage(defaultBanner) 
 //   setProfileImage(defaultProfile)
    }else{

if(currUser.heroBannerimageUrl == undefined){
//setHeroBannerImage(defaultBanner) 

}else{
setHeroBannerImage(currUser.heroBannerimageUrl) 
}


if(currUser.avatarimageUrl== undefined){
//  setProfileImage(defaultProfile)

}else{
    setProfileImage(currUser.avatarimageUrl)
}


    
   }
    },[currUser])


    useEffect(()=>{
      if(!currUser.avatarimageUrl){
   //     setProfileImage(defaultProfile)
      }
      if(!currUser.avatarimageUrl){
   //     setHeroBannerImage(defaultBanner) 
      }
    
      },[currUser])


const updateBanner =async()=>{
    setShowBanner(true);
  }
  
  const updateProfile =()=>{
    console.log('callingUpdateProfile');
    setShowProfile(true);
  }

  const closeBanner = ()=>{
    setShowBanner(false);
  }

  const closeProfile = ()=>{
    setShowProfile(false);
  }




  const handleProfileImageChange = () => {
   
    const currDate = Date.now();
    const file = profileInput.current.files[0];
   let newName = currDate+file.name.replace(/\s/g, "");
   
    if (currUser.avatarimageUrl) {
     
      var k = currUser.avatarimageUrl
   
      let urlParts = k.split("/");
      let lastPart = urlParts.pop();
 


      newName = lastPart;
     
      
    }     
  
    const newFile = new File([profileInput.current.files[0]], newName);
    var fileSize = newFile.size;
    if ( fileSize > 500000){
    setNotificationMessageType("error");
    setOpenNotification(true);
    setNotificationMessage("File size must be less than 500KB");
    }else{
   setProfileImage(URL.createObjectURL(newFile));


   const uploadRequest = new AWS.S3.ManagedUpload({
    
    params: { Bucket:'dashboard', Key:newName, Body:newFile, ACL: 'public-read' },
    
    service:s3FileUpload
    
    });
    
    uploadRequest.on('httpUploadProgress', function(event) {
    
    const progressPercentage = Math.floor(event.loaded * 100 / event.total);
    
    console.log('Upload progress ' + progressPercentage);
    
    });
    
    console.log('Configed and sending');
    
    uploadRequest.send(function(err,response) {
    
    if (err) {
    
    console.log('UPLOAD ERROR: ' + JSON.stringify(err, null, 2));
    
    } else {
    
      console.log(response.Location)
      setProfileImageUrl(response.Location)
      var updatedData ={avatarimageUrl:response.Location}
      dispatch({ type: TYPES.UPDATE_USER_BY_ID, id:currUser.id, data:updatedData });
      setNotificationMessageType("success");
      setOpenNotification(true);
      setNotificationMessage("Image uploaded successfully");
    }
    
    });

   
/*
   S3FileUpload
    .uploadFile(newFile, config)
    .then(data => {
       
        setProfileImageUrl(data.location)
        var updatedData ={avatarimageUrl:data.location}
        dispatch({ type: TYPES.UPDATE_USER_BY_ID, id:currUser.id, data:updatedData });
        setNotificationMessageType("success");
        setOpenNotification(true);
        setNotificationMessage("Image uploaded successfully");
    
    })
    .catch(err => console.error(err))

    */

  }

  closeProfile();
}


  const handleHeroImageChange = () => {

    const currDate = Date.now();
   
    const file = heroBannerInput.current.files[0];
    var newName = currDate + file.name.replace(/\s/g, "");

    if (currUser.heroBannerimageUrl) {
      var k = currUser.heroBannerimageUrl
      let urlParts = k.split("/");
      let lastPart = urlParts.pop();
      newName = lastPart;
   
      
    }   



    const newFile = new File([heroBannerInput.current.files[0]], newName);
    

    var fileSize = newFile.size;
    if ( fileSize > 1000000){
      setNotificationMessageType("error");
      setOpenNotification(true);
       setNotificationMessage("File size must be less than 1MB");
    }else{

    setHeroBannerImage(URL.createObjectURL(newFile));
    
 
    const uploadRequest = new AWS.S3.ManagedUpload({
    
    params: { Bucket:'dashboard', Key:newName, Body:newFile,ACL: 'public-read' },
    
    service:s3FileUpload
    
    });
    
    uploadRequest.on('httpUploadProgress', function(event) {
    
    const progressPercentage = Math.floor(event.loaded * 100 / event.total);
    
    console.log('Upload progress ' + progressPercentage);
    
    });
    
    console.log('Configed and sending');
    
    uploadRequest.send(function(err,response) {
    
    if (err) {
    
    console.log('UPLOAD ERROR: ' + JSON.stringify(err, null, 2));
    
    } else {
    
      console.log(response.Location)
      setHerobannerImageUrl(response.Location)
      var updatedData ={heroBannerimageUrl:response.Location}
      dispatch({ type: TYPES.UPDATE_USER_BY_ID, id:currUser.id, data:updatedData });
      setNotificationMessageType("success");
      setOpenNotification(true);
    setNotificationMessage("Image uploaded successfully");
    }
    
    });
 
    /*
    S3FileUpload
     .uploadFile(newFile, config)
     .then(data => {
        setHerobannerImageUrl(data.location)
        var updatedData ={heroBannerimageUrl:data.location}
        dispatch({ type: TYPES.UPDATE_USER_BY_ID, id:currUser.id, data:updatedData });
        setNotificationMessageType("success");
        setOpenNotification(true);
      setNotificationMessage("Image uploaded successfully");
    })
     .catch(err => console.error(err))

     */
 
   }
   closeBanner();
  }


  const copyWallet = (address)=>{
    navigator.clipboard.writeText(address)
    setOpenNotificationCopy(true);
    setNotificationMessage("Wallet address successfully copied to clipboard");
  }














   
    return (
        <>


<Snackbar open={openNotification} autoHideDuration={6000} onClose={()=>setOpenNotification(false)}>
            <Alert onClose={()=>setOpenNotification(false)} severity={notificationMessageType}>{notificationMessage}</Alert>
      </Snackbar>

      <Snackbar open={openNotificationCopy} autoHideDuration={6000} onClose={()=>setOpenNotificationCopy(false)}>
            <Alert onClose={()=>setOpenNotification(false)} severity="success">{notificationMessage}</Alert>
      </Snackbar>

               <MKBox
                minHeight="45vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${heroBannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                    position:'relative',
                    zIndex:'1',
                    padding:"0px",
                   
                }}
               
              
            >
 <MKBox
                minHeight="45vh"
                width="100%"
                sx={{
                 
                    '&:hover': {
                        backgroundColor: "#000",
                        opacity: [0.5, 0.5, 0.5]
                      },
                }}
                onMouseEnter={e => {
                    setBannerStyle({display: 'block'});
                }}
                onMouseLeave={e => {
                    setBannerStyle({display: 'none'})
                }}
              
            >

            <Container >
                 <Grid mt={20} container item xs={12} lg={12} justifyContent="center" mx="auto"  >
                  
              <IconButton  color="white" style={bannerStyle} onClick={()=>updateBanner()}>
                <ModeEditIcon />
              </IconButton>
              </Grid>
           
          </Container>
</MKBox>
</MKBox>

          <MKBox>
  
<Grid container item xs={12} lg={12} rowSpacing={1}  mt={-7} pl={{ base: '2px', md: '10px', lg: '135px' }} pr={{ base: '2px', md: '10px', lg: '135px' }} >


<Grid item xs={3} lg={0.9} md={1.5}>

<MKBox  sx={{display: "grid", placeItems: "center", textAlign:'center'}}>
<MKBox
                minHeight="120px"
                width="120px"
              
                sx={{
                    backgroundImage: `url(${profileImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat:"no-repeat",
                    padding:"0px",
                    position:'relative',
                    zIndex:'2',
                    borderRadius:'60px',
                  
                }}
               
              
            >
 <MKBox
                   minHeight="120px"
                   width="120px"
                sx={{
                  borderRadius:'60px',
                    '&:hover': {
                        backgroundColor: "#000",
                        opacity: [0.5, 0.5, 0.5]
                      },
                }}
                onMouseEnter={e => {
                  setProfileStyle({display: 'block'});
                }}
                onMouseLeave={e => {
                  setProfileStyle({display: 'none'})
                }}
              
            >
            <Container>
                 <Grid container item xs={12} lg={12} justifyContent="center" mx="auto"  >
                  <MKBox mt={6}>
                  <IconButton  color="white" style={profileStyle} onClick={()=>updateProfile()}>
                <ModeEditIcon />
              </IconButton>

                  </MKBox>
             
      

              </Grid>
           

          </Container>
          </MKBox>
</MKBox>


          {currUser.linkedENSName && currUser.linkedENSName.currentOwner == address.toLowerCase() ? (
  <MKBox  >
    <MKTypography  style={{fontSize:'14px' }}>
   @{currUser.linkedENSName.name}
    </MKTypography>
</MKBox>
):(
<MKBox >
    <MKTypography style={{fontSize:'14px' }}>
   @{currUser.name}#{address&& address.slice(38)}
    </MKTypography>
</MKBox>)}
</MKBox>



</Grid>






<Grid item xs={5} lg={3} md={4}>
<MKBox pl={4}>
    <MKTypography variant="body1" mt={7} style={{fontSize:'16px'}}>
    {currUser.fullName}
    </MKTypography>

    <MKTypography variant="body1" style={{fontSize:'12px'}}>
  Joined {moment(currUser.createdAt).format('MMMM')} {moment(currUser.createdAt).format('DD')}, {moment(currUser.createdAt).format('YYYY')}
    </MKTypography>

</MKBox>
</Grid>


<Grid item lg={6.8} md={4.6} mt={9}>

</Grid>
 
<Grid item xs={4} lg={0.8}  md={1} mt={9}>
<Stack textAlign={'right'} direction={"row"} spacing={2} pl={{lg:'23px'}}>
<MKTypography  variant="body1" style={{fontSize:'12px'}}>
{address&& address.substring(0, 4)}....{address&& address.slice(38)}
 </MKTypography>
 <ContentCopyIcon color="primary" fontSize="medium" sx={{ cursor: "pointer" }} onClick={() => {copyWallet(address.toLowerCase())}} />
</Stack>

</Grid>

</Grid>
</MKBox>


<Modal open={showProfile} onClose={closeProfile} sx={{ display: "grid", placeItems: "center" }}>
    <Slide direction="down" in={showProfile} timeout={500}>
      <MKBox
        position="relative"
        width="300px"
        display="flex"
        flexDirection="column"
        borderRadius="xl"
        bgColor="black"
        shadow="xl"
      >
               <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Upload File
</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeProfile} />
              </MKBox>

 
              <hr style={{color:'white'}} />
        <MKBox p={2}>
     <MKTypography  size="small" variant="p">Dimensions</MKTypography>
    <MKTypography mt={1} size="small" variant="subtitle2">Height- 500 Pixels</MKTypography>
    <MKTypography size="small" variant="subtitle2" >Width- 500 Pixels</MKTypography>
    <MKTypography size="small" variant="subtitle2" >Max File Size- 500kb</MKTypography>
   
    </MKBox>

    <MKBox pt={1} pl={2}>
    <Button p="10" color="primary" size ="small" variant="outlined"  component="label" endIcon={<AddCircleOutlineIcon />} sx={{
    color:'white',
   '&:hover': {
    backgroundColor: '#26F8FF',
    color:'#000'
  }
}}>
    Upload Profile Image
    <input hidden accept="image/*" multiple type="file"  onChange={handleProfileImageChange}  ref={profileInput}/>
   
   </Button>
   </MKBox>

        
        
       
      </MKBox>
    </Slide>
  </Modal>



  <Modal open={showBanner} onClose={closeBanner} sx={{ display: "grid", placeItems: "center" }}>
    <Slide direction="down" in={showBanner} timeout={500}>
      <MKBox
        position="relative"
        width="300px"
        display="flex"
        flexDirection="column"
        borderRadius="xl"
        bgColor="black"
        shadow="xl"
      >
               <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Upload File
                </MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeBanner} />
              </MKBox>

 
              <hr style={{color:'white'}} />
       

        <MKBox p={2}>

       
<MKTypography  size="small" variant="p">Dimensions</MKTypography>
<MKTypography mt={1} size="small" variant="subtitle2">Height- 720 Pixels</MKTypography>
<MKTypography  size="small" variant="subtitle2">Width- 1280 Pixels</MKTypography>
<MKTypography size="small" variant="subtitle2">Max File Size- 1MB</MKTypography>
</MKBox>

<MKBox pt={1} pl={2}>
<Button p="10" color="primary" size ="small" variant="outlined"  component="label" endIcon={<AddCircleOutlineIcon />}
 sx={{
    color:'white',
   '&:hover': {
    backgroundColor: '#26F8FF',
    color:'#000'
  }
}}>
Upload Banner Image
<input hidden accept="image/*" multiple type="file"  onChange={handleHeroImageChange}  ref={heroBannerInput}/>

</Button>


   </MKBox>

    </MKBox>
        
       
      
    </Slide>
  </Modal>

          </>
    )
}

export default HeaderBanner
