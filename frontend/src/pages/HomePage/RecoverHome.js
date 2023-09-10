import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./homePage.css";

import img1 from "../../Images/Apti.jpg"


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataDigitalBestSeller } from '../../data';
import imgGirl from '../../assets/images/defaultImage.jpg';



import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"


import image from "./img/img1.jpg"; 
import image2 from "./img/img2.jpg"; 
import image3 from "./img/img3.jpg"; 
import image4 from "./img/img4.jpg"; 
import Container from "@mui/material/Container";


import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Scrollbar } from 'react-scrollbars-custom';
import { Card, CardContent } from '@material-ui/core';

import HorizontalScroll from 'react-scroll-horizontal';




function HomePage() {







	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};




	const click = () => {
	console.log("Click")
}


	
	

const [unitName, setUnitName] = useState();

    
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







	const cards = [
		{ id: 1, title: 'Card 1' },
		{ id: 2, title: 'Card 2' },
		{ id: 3, title: 'Card 3' },
		{ id: 4, title: 'Card 4' },
		// Add more card objects as needed
	  ];
	







	
	  const child   = { width: `500px`, height: `100%`, border:"2px solid black"}
    const parent  = { width: `60em`, height: `100%`}
	
	



	return (
<>



			
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


<Grid className="App">
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
    </Grid>



			













			




			<br />
			<br/>



	<Grid container p={1} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Government Jobs </h1></Typography>
	</Box>   
				</Grid>		
	<Grid className="App">
      <Slider {...settings}>
					{/*  {dataDigitalBestSeller.map((item) => (
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
			  
			  <div style={{ textAlign:"center"}}>
				  <Link to={`/testimonial/${item.id}`}>
					  <Button  style={{marginTop:"20px"}}> View More </Button></Link>
			 </div>

          </div>
        ))}
			*/}

					





				{/*
				
				

		  <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 <h2>hello</h2>
              </CardContent>
          </Card>

					



		  <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 <h2>hello</h2>
              </CardContent>
          </Card>



					
		  <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 <h2>hello</h2>
              </CardContent>
          </Card>



		  <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 <h2>hello</h2>
              </CardContent>
          </Card>
	

				*/}	

              	<div className="card">
				  <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}

                                            <img src={img1} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"white"}}>Aptitude Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"white"}} > This Page will help you to give proper plan or tips how to prepare for Aptitude for any exam in easy way. Aptitude is very important to clear any exam </p>
											</div>
											

										</div>
										
									
                                    </div>
                                </div>
                            </a>
                        </div>
						
							<div style={{ textAlign: "center" }}>
								<Link  to='/card1Gov'>
									<Button style={{ marginTop: "20px", border:"2px solid white" }}> View More </Button></Link>
							</div>

						</div>

					





                         <div className="card">
						 <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}

                                            <img src={img1} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"white"}}>Aptitude Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"white"}} > This Page will help you to give proper plan or tips how to prepare for Aptitude for any exam in easy way. Aptitude is very important to clear any exam </p>
											</div>
											

										</div>
										
									
                                    </div>
                                </div>
                            </a>
                        </div>
						
							<div style={{ textAlign: "center" }}>
								<Link  to='/card1Gov'>
									<Button style={{ marginTop: "20px", border:"2px solid white" }}> View More </Button></Link>
							</div>

						</div>


					




						<div className="card">
						<div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}

                                            <img src={img1} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"white"}}>Aptitude Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"white"}} > This Page will help you to give proper plan or tips how to prepare for Aptitude for any exam in easy way. Aptitude is very important to clear any exam </p>
											</div>
											

										</div>
										
									
                                    </div>
                                </div>
                            </a>
                        </div>
						
							<div style={{ textAlign: "center" }}>
								<Link  to='/card1Gov'>
									<Button style={{ marginTop: "20px", border:"2px solid white" }}> View More </Button></Link>
							</div>
						</div>





					


						<div className="card">
							  <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4   box1">
                            <a href="">
                                <div className="card-flyer  ">
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                            {/*       <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />    */}

                                            <img src={img1} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"white"}}>Aptitude Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"white"}} > This Page will help you to give proper plan or tips how to prepare for Aptitude for any exam in easy way. Aptitude is very important to clear any exam </p>
											</div>
											

										</div>
										
									
                                    </div>
                                </div>
                            </a>
                        </div>
						
							<div style={{ textAlign: "center" }}>
								<Link  to='/card1Gov'>
									<Button style={{ marginTop: "20px", border:"2px solid white" }}> View More </Button></Link>
							</div>
						</div>







	   </Slider>
	</Grid>			






			{/*
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


					*/}				



				
				{/* 
=============================================================================================================
				
				2nd Row Card
				
=======================================================================================================================				
				*/}

				

			{/*	<Grid container >
					
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


					*/}

				
			



<Grid container p={1} pt={5} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
					
    <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Private Jobs </h1></Typography>
	</Box>
				</Grid>		


	<Grid className="App">
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
	</Grid>			





			


				
			



			
	<br />
			<br />





<Grid container p={1} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Novels  </h1></Typography>
	</Box>   
				</Grid>		
	<Grid className="App">
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
	</Grid>			





			<br />
			<br />



	

	<Grid container p={1} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Improve your Skills 
 </h1></Typography>
	</Box>   
			</Grid>		
			
	<Grid className="App">
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
	</Grid>			







	<br />
			<br />


		

	<Grid container p={1} style={{justifyContent:"center", border:"2px solid blue"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>
	Showcase Your Skills

 </h1></Typography>
	</Box>   
			</Grid>		
			
	<Grid className="App">
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
	</Grid>	


	<br />
			<br />





{/*
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
*/}


				















			{/*
</Grid>
					*/}











			











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





export default HomePage;
