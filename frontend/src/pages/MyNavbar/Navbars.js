import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";




import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import imgGirl from '../../assets/images/defaultImage.jpg';
import LogImg from "../../Images/R.Path_Logo_4.png"




import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';






function Navbars(props) {







	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};




	const click = () => {
	console.log("Click")
}


	
	
const [bannerImageUrl, setBannerImageUrl] = useState();

	

const [unitName, setUnitName] = useState();

   const openNav = (imageUrl,name) => {
 
    setBannerImageUrl(imageUrl)
    setUnitName(name);
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  
  }
  
    
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    }
    


	

	const  navigate = useNavigate()

const homeButton =()=>{
	navigate('/')
}












	const handleLogout = async () => {
        try {
          // Send a POST request to the logout endpoint on the server
          await axios.post('http://localhost:3000/logout');
    
          // Clear any client-side authentication token or session
          // For example, remove the token from local storage or cookies
          localStorage.removeItem('token');
    
          // Perform any additional actions after successful logout
          // For example, redirect the user to the login page
          window.location.href = '/login';
        } catch (error) {
          console.error(error);
          // Handle logout error
        }
      };















	return (
<>
		
		

<Grid className="header" container item xs={12} lg={12} mx="auto"   >
                
				<Box  width={"6%"}  >
				
							</Box>
							
								<Box  style={{display:"flex"}}  width={"84%"}   p={1} mt={1}  >
								   <Box    textAlign="center" style={{display:"flex", }}  width={"20%"} > 
									   <Box>
								{/*		<img 
										 style={{
											  marginBottom:"0px",
											 
											position: "relative",
											width: "60px",
											height:"35px"
											  }}
										 src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
											*/}
											<img src={LogImg}  
												 style={{
											  marginBottom:"0px",
											 
											position: "relative",
											width: "60px",
											height:"45px"
											  }}  />  
									        
									
									  </Box>
								    
									  <Box style={{paddingLeft:"5px"}}>
									  <h5  style={{marginBottom:"0px", fontSize:"24px", color:"black", marginTop:"0px"}}  >R.Path</h5>
									  </Box>
									</Box> 
								
						
								
			
								
			
			
			
			
			
								
							<Box className="nav" p={1} style={{display:"flex",width:"100%"}}  ref={navRef} >
						
								 
				
								   <Box  style={{width:"15%"}}>
								   </Box>
							
					
								   <Box    style={{ width:"40%"}}  >           
				
				
								   <Link to={`/`} >
									 <button
						  style={{ 
							  marginBottom:"0px",
				backgroundColor: "#DBE9FA",
				width:"80px",
				height:"30px",
				borderRadius: "20px",
				
				border:"none",
				color: "black",
				//padding: "12px 16px",
				fontSize: "12px",
				cursor: "pointer"}}
				//onClick={homeButton}
				>
				Home
				
									</button>
				</Link>
				
				
				
				
							</Box>
				
				
							
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%",   margin:"4px"}}   >
			 <button
			 			  style={{ 
							marginBottom:"0px",
			  backgroundColor: "#DBE9FA",
			  width:"80px",
			  height:"30px",
			  borderRadius: "20px",
			  
			  border:"none",
			  color: "black",
			  //padding: "12px 16px",
			  fontSize: "12px",
			  cursor: "pointer"}}
			 > Blog </button> 
				
				</Box>    
				
				
				
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%", margin:"4px"}}   >
				<button   
				// style={{paddingTop:"2px",marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}
				style={{ 
					marginBottom:"0px",
	  backgroundColor: "#DBE9FA",
	  width:"80px",
	  height:"30px",
	  borderRadius: "20px",
	  
	  border:"none",
	  color: "black",
	  //padding: "12px 16px",
	  fontSize: "12px",
	  cursor: "pointer"}}
				
				> About Us </button>
				
				</Box>           
				
				
				
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%", margin:"4px"}}   >
				<button  // style={{paddingTop:"2px", marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}
							  style={{ 
								marginBottom:"0px",
				  backgroundColor: "#DBE9FA",
				  width:"80px",
				  height:"30px",
				  borderRadius: "20px",
				  
				  border:"none",
				  color: "black",
				  //padding: "12px 16px",
				  fontSize: "12px",
				  cursor: "pointer"}}
				
				> Contact Us  </button>
				
				</Box>    
				
				
				
				
				
				
			{/*	
				<Box   style={{ width:"50%" }}>
			
				
				
				<button
						  style={{ 
							  marginBottom:"0px",
				backgroundColor: "#DBE9FA",
				width:"80px",
				height:"30px",
				borderRadius: "20px",
				
				border:"none",
				color: "black",
				//padding: "12px 16px",
				fontSize: "12px",
				cursor: "pointer"}}
				
								
								
				>
				Mainnet  
				
				</button>
				
				
				
						  </Box>           
				
						  */}
				
				
				
							
						
						 </Box>
				
				
					{props.auth ?
						
							<Box className="nav" style={{ display:"flex",width:"30%",}}  ref={navRef} >
						
						            <Box style={{ width: "50%",  }}  >
						                <Link to={`/login`} >
											  <Button   style={{width:"100px",backgroundColor:"blue", color:"white"}}    >Login</Button>
										</Link> 
						            </Box>	
						

								    <Box  pl={1}  style={{ width: "50%" }}>
									    <Link to={`/register`} >
							                    <Button style={{ width: "100px", backgroundColor: "blue", color: "white" }}  >Register</Button>
								        </Link>
						            </Box>
							   
						</Box>	
						
						:

						<Box>
                           <Button   style={{width:"100px",backgroundColor:"blue", color:"white"}}   onClick={handleLogout}>Logout</Button>
						</Box>
			 }
			
					</Box>
										 
							
					<Box  width={"10%"}  >
								<Button
						style={{ color: "yellow" }}
						className="nav-btn"
						//  onClick={showNavbar}
					
						onClick={() => openNav()}
					>
										 <FaBars />
								</Button>
					</Box>
								
			
										
						
						
										</Grid>       
						
						

			


			






</>

	);
}





export default Navbars;
