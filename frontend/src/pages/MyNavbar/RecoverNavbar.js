import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";




import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataDigitalBestSeller } from '../../data';
import imgGirl from '../../assets/images/defaultImage.jpg';



import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { Heading } from "../common/Heading"

import { about } from "../data/dummydata"
import { services } from "../data/dummydata"

import image from "./img/img1.jpg"; 
import image2 from "./img/img2.jpg"; 
import image3 from "./img/img3.jpg"; 
import image4 from "./img/img4.jpg"; 
import Container from "@mui/material/Container";


import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';








function Navbars() {







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
const [show, setShow] = useState(false);

const [value, setValue] = useState("");
const [data, setData] = useState([]);

	

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
    


	











	{/*   slide  */}

	const [defaultImage, setDefaultImage] = useState({});
	const settings = {
	  dots: true,
	  infinite: false,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  initialSlide: 0,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
		  },
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			initialSlide: 2,
		  },
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  },
		},
	  ],
	};
  
	const handleErrorImage = (data) => {
	  setDefaultImage((prev) => ({
		...prev,
		[data.target.alt]: data.target.alt,
		linkDefault: imgGirl,
	  }));
	};













	const [showImage, setShowImage] = useState(false);

	const handleClick = () => {
	  setShowImage(true);
	};















	return (
<>

			{/*
			<header   >
				
				   <div  style={{width:"20%"}}>
					<h3>LOGO</h3>
					</div>
				
				
				<nav  ref={navRef} style={{  border:"2px solid black"}}>
				<div className="dropdown">	
				<a href="/#" className="   dropbtn" style={{fontSize:"bold"}}  >Home</a>
					
					
						
				<div className="dropdown-content" style={{marginTop:"200px"}} >
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
					
					
					
					
					</div>

					





					<div  className="dropdown" >
						<a href="/#"  className="dropbtn" style={{fontSize:"bold"}} >My work</a>

		
						<div className="dropdown-content" style={{marginTop:"200px"}} >
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
    </div>

					</div>
					
					<div>
						<a href="/#">Blog</a>
					</div>
					
					<div>
						<a href="/#">About me</a>
					</div>

					<div>
						<a href="/#">About me</a>
						</div>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
					</nav>

				



					<div   style={{ marginLeft:"40px",  border:"2px soliod white"}}  >
			<div style={{border:"2px soliod white"}}  >
			<Button     style={{backgroundColor:"white"}} onClick={click}>
				login
				</Button>
			</div>
			
			<div  style={{marginLeft:"10px"}}>
			<Button style={{backgroundColor:"white"}} onClick={click}>
				Register
				</Button>
            </div>
			</div>
				




			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

	*/}
	
		
		
		


			



	





































{/*

	<Grid className="header" container item xs={12} lg={12} mx="auto"   >
                
	<Box  width={"6%"}  style={{border:"2px solid black"}}>
	
				</Box>
				
				    <Box  style={{display:"flex", border:"2px solid black"}}  width={"84%"}   p={1} mt={1}  >
					   <Box    textAlign="center" style={{display:"flex", border:"2px solid pink"}}  width={"20%"} > 
						   <Box>
						    <img 
						     style={{
								  marginBottom:"0px",
								 
								position: "relative",
								width: "60px",
								height:"35px"
								  }}
							 src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
						  </Box>
					
						  <Box style={{paddingLeft:"5px"}}>
						  <h5  style={{marginBottom:"0px", fontSize:"24px", color:"black", marginTop:"0px"}}  >AIRSWAP</h5>
						  </Box>
						</Box> 
					
			
					

					





					
				<Box className="nav" p={1} style={{display:"flex",width:"100%", border:"2px solid pink"}}  ref={navRef} >
			
		         	
	
	                   <Box  style={{ width:"30%"}}>
	                   </Box>
				
	    
	                   <Box    style={{ width:"40%"}}  >           
	
	
	
                     	<button
			  style={{ 
				  marginBottom:"0px",
	backgroundColor: "#DBE9FA",
	width:"80px",
	height:"30px",
	borderRadius: "20px",
	
	border:"none",
	color: "DodgerBlue",
	//padding: "12px 16px",
	fontSize: "12px",
	cursor: "pointer"}}
	
	>
	Disconnect
	
	                    </button>
	
	
	
	
	
	            </Box>
	
	
				
	
	
	
	
	<Box  style={{textAlign:"center", width:"50%",   margin:"4px"}}   >
	<p   style={{paddingTop:"2px", marginBottom:"0px",marginTop:"0px", fontSize:"13px"}}> Activity  </p>
	
	</Box>    
	
	
	
	
	
	
	
	<Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
	<p   style={{paddingTop:"2px",marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> Explorer  </p>
	
	</Box>           
	
	
	
	
	
	
	
	<Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
	<p   style={{paddingTop:"2px", marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> More  </p>
	
	</Box>    
	
	
	
	
	
	
	
	
	<Box   style={{ width:"50%" }}>
	
	
	
	
	
	<button
			  style={{ 
				  marginBottom:"0px",
	backgroundColor: "#DBE9FA",
	width:"80px",
	height:"30px",
	borderRadius: "20px",
	
	border:"none",
	color: "DodgerBlue",
	//padding: "12px 16px",
	fontSize: "12px",
	cursor: "pointer"}}
	
	>
	Mainnet  
	
	</button>
	
	
	
	          </Box>           
	
	
	
	
	
	            
			
		     </Box>
	
	
		        <Box className="nav" style={{ display:"flex",width:"30%", border:"2px solid pink"}}  ref={navRef} >
			
			                <Box  style={{ width: "50%", border:"2px solid black" }}  >
			              		<Button   style={{width:"100px",backgroundColor:"blue", color:"white"}}>Login</Button>
			      			</Box>	

                             <Box  pl={1}  style={{ width: "50%", border:"2px solid black" }}>
			             	   <Button style={{width:"100px", backgroundColor: "blue", color: "white" }}>Register</Button>
			            	   </Box>
			   	
				</Box>	


        </Box>
							 
				
		<Box  width={"10%"}  style={{border:"2px solid black"}}>
					<Button
							style={{ color:"yellow" }}
				           className="nav-btn"
				              onClick={showNavbar}>
				             <FaBars />
			        </Button>
		</Box>
					

							
			
			
							</Grid>       
			
			
			*/}









<Grid className="header" container item xs={12} lg={12} mx="auto"   >
                
				<Box  width={"6%"}  style={{border:"2px solid black"}}>
				
							</Box>
							
								<Box  style={{display:"flex", border:"2px solid black"}}  width={"84%"}   p={1} mt={1}  >
								   <Box    textAlign="center" style={{display:"flex", border:"2px solid pink"}}  width={"20%"} > 
									   <Box>
										<img 
										 style={{
											  marginBottom:"0px",
											 
											position: "relative",
											width: "60px",
											height:"35px"
											  }}
										 src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
									  </Box>
								
									  <Box style={{paddingLeft:"5px"}}>
									  <h5  style={{marginBottom:"0px", fontSize:"24px", color:"black", marginTop:"0px"}}  >AIRSWAP</h5>
									  </Box>
									</Box> 
								
						
								
			
								
			
			
			
			
			
								
							<Box className="nav" p={1} style={{display:"flex",width:"100%", border:"2px solid pink"}}  ref={navRef} >
						
								 
				
								   <Box  style={{width:"15%"}}>
								   </Box>
							
					
								   <Box    style={{ width:"40%"}}  >           
				
				
				
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
				Disconnect
				
									</button>
				
				
				
				
				
							</Box>
				
				
							
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%",   margin:"4px"}}   >
				<Typography  style={{paddingTop:"2px", marginBottom:"0px",marginTop:"0px", fontSize:"13px"}}> Activity  </Typography>
				
				</Box>    
				
				
				
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%", margin:"4px"}}   >
				<Typography   style={{paddingTop:"2px",marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> Explorer  </Typography>
				
				</Box>           
				
				
				
				
				
				
				
				<Box  style={{justifyContent:"center", width:"50%", margin:"4px"}}   >
				<Typography   style={{paddingTop:"2px", marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> More  </Typography>
				
				</Box>    
				
				
				
				
				
				
				
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
				
				
				
				
				
							
						
						 </Box>
				
				
							<Box className="nav" style={{ display:"flex",width:"30%", border:"2px solid pink"}}  ref={navRef} >
						
						            <Box style={{ width: "50%", border: "2px solid black" }}  >
						                <Link to={`/login`} >
											  <Button   style={{width:"100px",backgroundColor:"blue", color:"white"}}    >Login</Button>
										</Link> 
						            </Box>	
			
								    <Box  pl={1}  style={{ width: "50%", border:"2px solid black" }}>
									    <Link to={`/register`} >
							                    <Button style={{ width: "100px", backgroundColor: "blue", color: "white" }}  >Register</Button>
								        </Link>
						            </Box>
							   
							</Box>	
			
			
					</Box>
										 
							
					<Box  width={"10%"}  style={{border:"2px solid black"}}>
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
						
						

			


			








			
<div    style={{width:"100%", height:"250px" , textAlign:"center", backgroundColor:"gray"}}>
	<section className='hero'>
					{home.map((val, i) => (
			<>
			<div className='left' data-aos='fade-down-right'>
			<img src={val.cover} alt='' />
		   </div>
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
								</h1>
						<div  style={{border:"2px solid black",}}>
                             <p data-aos='fade-left'>{val.desc}</p>
		                </div>
			</div>
							</>
        ))}
      </section>
	  </div>











										<div id="mySidebar" className="sidebars">
        <a href="javascript:void(0)" className="closebtn"  style={{left:"-20px"}}    onClick={closeNav}>x</a>
         
        <hr style={{
          color: "white",
          position: "relative",
          height: "5px",
          background: "white"        
        }} />
        <div>
        <h3  style={{color:"gray",marginLeft:"10px"}} >{unitName}</h3>
        </div>

        <div>
           <h1   style={{color:"white"}}>Hello</h1>
          </div>

</div>




			

			















			



			{/* Slidr  */}


<div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>



			




			




			{/*

<Grid container item xs={12} lg={12} mx="auto" mt={10}   >
	<Container>
<Grid container item xs={12} lg={12} mx="auto" style={{ border:"2px solid black"}}  >


			
		<div class="card" style={{  height: "400px",backgroundImage: `url(${image})` }}>
            <div class="contentWrapper ">
                <div class="content">
                    <h3>Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
                  
					<NavLink to='/bankexam' >
										<a >See More...</a>
										</NavLink>
                </div>
            </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${image2})` }}>
            <div class="contentWrapper">
                <div class="content">
                    <h3>Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
                    <a href="/cat">See More-2...</a>
                </div>
            </div>
        </div>
        <div class="card"  style={{ backgroundImage: `url(${image3})` }}>
            <div class="contentWrapper">
                <div class="content">
                    <h3>Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
                    <a href="/cds">See More-3...</a>
                </div>
            </div>
        </div>
        <div class="card"  style={{ backgroundImage: `url(${image4})` }}>
            <div class="contentWrapper">
                <div class="content">
                    <h3>Card Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
                    <a href="/gate">See More-4...</a>
                </div>
            </div>
        </div>
	
					</Grid>
					





					<Grid container item xs={12} lg={12} mt={5}   mx="auto" style={{ border:"2px solid black"}}  >


			
<div class="card" style={{  height: "400px",backgroundImage: `url(${image})` }}>
	<div class="contentWrapper ">
		<div class="content">
			<h3>Card Title</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
			<a href="/iit">See More-5...</a>
		</div>
	</div>
</div>
<div class="card" style={{ backgroundImage: `url(${image2})` }}>
	<div class="contentWrapper">
		<div class="content">
			<h3>Card Title</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
			<a href="/it">See More-6...</a>
		</div>
	</div>
</div>
<div class="card"  style={{ backgroundImage: `url(${image3})` }}>
	<div class="contentWrapper">
		<div class="content">
			<h3>Card Title</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
			<a href="/jee">See More-7...</a>
		</div>
	</div>
</div>
<div class="card"  style={{ backgroundImage: `url(${image4})` }}>
	<div class="contentWrapper">
		<div class="content">
			<h3>Card Title</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolorem explicabo distinctio voluptates ab ipsum sit aut reiciendis commodi ex?</p>
			<a href="/nda#">See More-8...</a>
		</div>
	</div>
</div>

</Grid>






	</Container>
			</Grid>
			*/}

			


			




<Grid container item   style={{border:"2px solid black"}} mt={10}      pl={{ base: '2px', md: '10px', lg: '120px' }} pr={{ base: '2px', md: '10px', lg: '120px' }} >

<Grid container >
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>			
				<Grid container p={1} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Government Jobs </h1></Typography>
	</Box>   
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/upsc"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cat"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/gate"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/jee"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>



				



				
				{/* 
=============================================================================================================
				
				2nd Row Card
				
=======================================================================================================================				
				*/}

				

				<Grid container >
					
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>
				<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
    <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Private Jobs </h1></Typography>
	</Box>
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cds"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/nda"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/bankexam"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/ssb"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>




				





				


				


<Grid container >
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>	
			
				<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Novels </h1></Typography>
						    </Box>
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cds"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/nda"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/bankexam"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/ssb"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>







				

				





				



<Grid container >
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>
				<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Showcase Your Skills </h1></Typography>
					</Box>	    
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cds"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/nda"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/bankexam"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/ssb"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>




				





				


<Grid container >
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>
				<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Improve your Skills </h1></Typography>
					</Box>	    
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cds"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/nda"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/bankexam"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/ssb"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>






				



<Grid container >
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ></Typography>
				</Grid>		

				<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
                  <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>How to Earn Money from Your Skills </h1></Typography>
						    </Box>
				</Grid>			


<Grid container   style={{border:"2px solid blue"}} >

					
					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                             
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
								
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/cds"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>

							</Grid>
							

							
						</Grid>
						
					</Grid>
					




					



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image2})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
							
							
										
								  <Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/nda"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image3})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/bankexam"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
						
							</Grid>
							
						</Grid>
						
					</Grid>



					<Grid item className="card" xs={12} md={6} lg={3} style={{ border: "2px solid green" }}
					
					sx={{
                                   
						backgroundImage: `url(${image4})`,
						backgroundSize: "cover",
					 backgroundPosition: "center",
					 display: "grid",
					  placeItems: "center",
					  position:'relative',
					  zIndex:'1',
					  padding:"0px",
					  
						  minHeight:"25vh",
			   
						borderRadius: "10px",
					
			   
					  }}
					
					
					>
             
						<Grid  container className="contentWrapper" >

							<Grid container class="content" >
							      <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h2   style={{ overflow: "hidden",  textOverflow:"clip"}}>Card Title  </h2></Typography>
						    
							
                                  <Typography color="white" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><p   style={{ overflow: "hidden",  textOverflow:"clip"}}>Hellow How are you </p></Typography>
						
						
											
							<Grid container  style={{justifyContent:"center" }}  >
							<Link  to="/ssb"  style={{background:"transpa"}}  >
									<Button style={{ backgroundColor: "blue", color: "white" }}   >Click</Button>
							 </Link>	
							</Grid>
							</Grid>
							
						</Grid>
						
					</Grid>


			

</Grid>



				
















</Grid>












			











			<Grid container item md={12} sm={12} xs={12} lg={12} mx="auto"    style={{paddingTop:"50px"}}  >
				<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"         style={{  textAlign:"center" }}   >
					<h3 className="fs-5 text-center mb-0   text"   style={{color:"black"  , fontSize:"25px"}}>Contect Us</h3>
				</Grid>
				<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"      style={{  textAlign:"center" }}>
				   <h1 className='display-6 text-center mb-4  text '     style={{color:"black" }}>Have Some Question</h1>
				</Grid>
                  <hr className='w-25 mx-auto' />
		    </Grid>       

			<Container>
			<Grid   container md={12}  sm={12} xs={12} lg={12} mx="auto" >
			
				<Grid item md={6}  sm={12} xs={12} lg={6} >
				
				<div class="card2" style={{  width:"100%", backgroundImage: `url(${image3})` }}>
						</div>
				</Grid>

				<Grid  container  p={4} item md={6} sm={12} xs={12} lg={6} >

					
				   <Grid   container item md={12} sm={12} xs={12} lg={12} >
						       <Grid   item md={6} sm={12} xs={6} lg={2.2}     >
                                        <label for="name" className="form-label  text"   style={{color:"black"}}> Your Name : </label>
                                </Grid>     
							
								<Grid   item md={6} sm={12} xs={12} lg={9.8}    >
							       <input type="text" className="form-control" id="name" placeholder="Rohit Singh"

                                          style={{ width:"50%"}}
                                            name='name'
                                       //     value={msg.name}
                                      //      onChange={handleChange}

						            	/>
							    </Grid>
                            </Grid>

					


							<Grid   container item md={12} sm={12} xs={12} lg={12}>
						       <Grid   item md={6} sm={12} xs={6} lg={2.5}   >
							   <label for="exampleFormControlInput1"    style={{color:"black"}}>Email address : </label>
                                </Grid>     
							
								<Grid   item md={6} sm={12} xs={12} lg={9.5}      >
								<input  style={{width:"50%"}}  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
							   
							   name='name'
							   //     value={msg.name}
							  //      onChange={handleChange}

								/>
							 
							    </Grid>
                            </Grid>

					


							<Grid   container item md={12} sm={12} xs={12} lg={12} >
						       <Grid   item md={6} sm={12} xs={6} lg={2.6}    >
							   <label for="exampleFormControlInput1" style={{color:"black"}}>Your Message : </label>
                                </Grid>     
							
								<Grid   item md={6} sm={12} xs={12} lg={9.4}   >
								<textarea  style={{border:"2px solid black", width:"95%" , height:"160px"}}


                                       name='message'
                                         //   value={msg.message}
                                        //  onChange={handleChange}


                                      > </textarea>
							    </Grid>
                            </Grid>



				</Grid>


				{/*
				
				<Grid  container item md={6} sm={12} xs={12} lg={12} mx="auto"     style={{   border:"2px solid black", textAlign:"center" }}>

                    
					        <Grid   container item md={12} sm={12} xs={12} lg={12} mx="auto"     style={{   border:"2px solid black", textAlign:"center" }}>
						       <Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"     style={{   border:"2px solid black", textAlign:"center" }}  >
                                        <label for="name" className="form-label  text"> Your Name : </label>
                                </Grid>     
							
								<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"     style={{   border:"2px solid black", textAlign:"center" }}  >
							       <input type="text" className="form-control" id="name" placeholder="Rohit Singh"


                                            name='name'
                                       //     value={msg.name}
                                      //      onChange={handleChange}

						            	/>
							    </Grid>
                            </Grid>

					        <Grid  container item md={12} sm={12} xs={12} lg={12} mx="auto"   >
						            <Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"   >
                                        <label for="exampleFormControlInput1" className="form-label  text">Email address : </label>
									</Grid> 
							
									<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"   >
							            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"


                                            name='email'
                                      //      value={msg.email}
                                      //      onChange={handleChange}


							            />
							        </Grid>
                                </Grid>

					            <Grid container item md={12} sm={12} xs={12} lg={12} mx="auto"  >
							      	<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"   >
                                        <label for="exampleFormControlInput1" className="form-label   text">Your Message</label>
                                    </Grid>  
									<Grid   item md={6} sm={12} xs={12} lg={12} mx="auto"   >
						               <textarea  style={{border:"2px solid black", width:"90%" , height:"130px"}}


                                            name='message'
                                         //   value={msg.message}
                                          //  onChange={handleChange}


                                        ></textarea>
                                    </Grid>
								</Grid>

                                    <button type='submit' className='btn btn-outline-primary rounded-pill px-4    text'>Send Message <i className="fa fa-paper-plane ms-2 "></i></button>


				</Grid>
			*/}
       
			</Grid>

			</Container>






		

		<Grid   style={{ marginTop:"50px"}}   >
				<Box  p={4} style={{ fontSize:"20px",textAlign:"center",height:"200px", backgroundColor:"gray" }}>

                <p> All Right Resceved 2018</p>
				</Box>

	   </Grid>






</>

	);
}





export default Navbars;
