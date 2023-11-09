import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./homePage.css";

import img1 from "../../Images/Apti.jpg"
import img2 from "../../Images/LogicalReasonong2.jpg"
import img3 from "../../Images/Eng.jpg"
import img4 from "../../Images/Current-Affairs.jpg"
import img5 from "../../Images/General Awareness.jpg"
import img6 from "../../Images/DataInterPretation.jpg"
import img7 from "../../Images/Resume.jpg"
import img8 from "../../Images/Coding-Interview.png"

import ias from "../../Images/IAS.jpg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataDigitalBestSeller } from '../../data';
import imgGirl from '../../assets/images/defaultImage.jpg';



import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

import image3 from "./img/img3.jpg"; 
import Container from "@mui/material/Container";
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';


import NovelImg1 from "../../Images/Novel_WingsofFire.jpg" 
import NovelImg2 from "../../Images/hardwork.jpg" 
import NovelImg3 from "../../Images/nevergiveup.png" 
import NovelImg4 from "../../Images/TimeImportance.jpg" 
import NovelImg5 from "../../Images/TurningPoint.jpg" 
import NovelImg6 from "../../Images/halfGirlFriend.jpg" 


//import {faSquareTwitter} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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


			
<div    style={{width:"100%", height:"100px" , textAlign:"center", 
backgroundColor:"gray", 
}}>
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
						<div  >
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




			

			






<Grid lg={12} sm={12} md={12} xs={12}  style={{overflowX:"hidden"}}>


			{/* Slidr  */}


	 

<Grid lg={12} sm={12} md={12} xs={12}>
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



{/********************************************************************************** */}




			<br />
			<br/>



	<Grid container p={1} style={{justifyContent:"center", 
//	border:"2px solid blue"
	}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Government Jobs </h1></Typography>
	</Box>   
				</Grid>		
	<Grid   // style={{border:"2px solid black"}}
	>
      <Slider {...settings}>
            
					<CardContent   >
					
			  <div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                           
                                            <img src={img1} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"red"}}>Aptitude Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"gray"}} > This section tests your numerical ability and mathematical skills. It often includes topics such as number systems, simplification, percentage, algebra, geometry, ratio and proportion, averages, time and work, time and distance, profit and loss, etc. </p>
											</div>
											

										</div>
										
									
							</div>
							


							<div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
								<Link  to='/card1Gov'>
									<Button style={{ border:"2px solid black" }}> View More </Button></Link>
							</div>

						</div>
						

              </CardContent>
			





                    
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img2} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Reasoning Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} >This section evaluates your logical and analytical reasoning skills. It typically covers topics like coding-decoding, blood relations, seating arrangement, syllogism, analogies, number series, statement and argument, visual reasoning, etc. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/logicalReasoning'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>


					




					<CardContent   >
					
			  <div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
                                    <div className="text-box img1">
                                        <div className="image-box ">
                                           
                                            <img src={img3} alt="" />

                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <h2 style={{color:"red"}}>English Grammer Prepration</h2>
											
											<div style={{paddingTop:"10px"}}>
											<p style={{color:"gray"}} > This section assesses your understanding of English grammar, vocabulary, and comprehension. Topics may include grammar rules, reading comprehension, sentence correction, antonyms and synonyms, fill in the blanks, idioms and phrases, etc. </p>
											</div>
											

										</div>
										
									
							</div>
							


							<div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
								<Link  to='/englishGrammer'>
									<Button style={{ border:"2px solid black" }}> View More </Button></Link>
							</div>

						</div>
						

              </CardContent>


	   </Slider>
	</Grid>			






{/************************************************************* */}

			

<br />
			<br/>



<Grid container p={1} style={{justifyContent:"center"}} >
					<Box >
					
    <Typography color="black" variant="footerTextCopy"    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Private Jobs </h1></Typography>
	</Box>
				</Grid>		


	<Grid   >
      <Slider {...settings}>
	 
					
					
	  <CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px",}}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img1} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}> Aptitude Prepration </h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > This section tests your numerical ability and mathematical skills. It often includes topics such as number systems, simplification, percentage, algebra, geometry, ratio and proportion, averages, time and work, time and distance, profit and loss, etc.</p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img2} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Reasoning Ability Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > This section evaluates your logical and analytical reasoning skills. It typically covers topics like coding-decoding, blood relations, seating arrangement, syllogism, analogies, number series, statement and argument, visual reasoning, etc.  </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>









					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img3} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>English Language Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > This section assesses your understanding of English grammar, vocabulary, and comprehension. Topics may include grammar rules, reading comprehension, sentence correction, antonyms and synonyms, fill in the blanks, idioms and phrases, etc. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img6} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Data Interpretation Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > This area assesses your ability to interpret and analyze data presented in the form of tables, graphs, and charts. Practice calculations, data analysis, data comparison, data sufficiency, and drawing conclusions based on the given information. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>






					
	
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img5} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>General Awareness Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > This section tests your knowledge of current affairs, general knowledge, and business-related information. Stay updated with national and international news, business trends, industry-specific developments, major mergers and acquisitions, corporate leaders, etc. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>




					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img7} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Resume Preparation </h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > Private job exams may also include a stage of personal interviews. Prepare for interviews by refining your resume, practicing mock interviews, and enhancing your communication and interpersonal skills.To crack interview. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>

					



					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img8} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Coding Knowledge Prepration</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > For exams that include a social science section, study topics like history, geography, economics, and civics. Focus on important events, dates, geographical features, Indian economy, government policies, etc and some more topics. </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/card1Gov'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>

	  
	   </Slider>
	</Grid>			





			


				
{/*//////////////////////////////////////////////////////////////////// */}


<br />
			<br/>




<Grid container p={1} style={{justifyContent:"center"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Novels  </h1></Typography>
	</Box>   
				</Grid>		
	
				<Grid >
      <Slider {...settings}>
	 
					
					
	  <CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg1} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Wings Of Fire</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/wingsOfFire'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg2} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Hard Work</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} >  </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/hardWork'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>









					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg3} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Never GiveUp</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} >  </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/neverGiveUp'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg4} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Time Importance </h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} >  </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/timeImportance'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>






					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg5} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Turning Point</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/turningPoint'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>






					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={NovelImg6} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Half Girlfriend</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/halfGirlFriend'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>


	   </Slider>
	</Grid>			






			<br />
			<br />








			<Grid container p={1} style={{justifyContent:"center"}} >
					<Box >
    <Typography color="black" variant="footerTextCopy" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}  ><h1   style={{ overflow: "hidden",  textOverflow:"clip"}}>Online Teaching Assistent  </h1></Typography>
	</Box>   
				</Grid>		
	
				<Grid >
      <Slider {...settings}>
	 
					
					
	  <CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img1} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Quantitative Aptitude Prepration for Goverment Job</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > 500 Rs/month</p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/teachingGovJob'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img1} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Quantitative Aptitude Prepration for Private Job</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > 500 Rs/month</p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link   to='/teachingPrivJob'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>









					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img3} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Learn English Speaking Course: English speaking secrets </h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > 500 Rs/month</p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/teachingSpokenEng'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>





					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img8} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Coding Language Prepration(java, javascript,python,react etc)</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} >800 Rs/month</p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/teachingCodingLang'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>






					
					<CardContent   >
					
					<div className="card-flyer  " style={{ border: "2px solid black", padding:"10px" }}>
										  <div className="text-box img1">
											  <div className="image-box ">
												 
												  <img src={img8} alt="" />
	  
											  </div>
											  <div style={{textAlign:"center"}}>
												  <h2 style={{color:"red"}}>Interview Prepration(B.tech /CS  Students only)</h2>
												  
												  <div style={{paddingTop:"10px"}}>
												  <p style={{color:"gray"}} > 700 Rs/month </p>
												  </div>
												  
	  
											  </div>
											  
										  
								  </div>
								  
	  
	  
								  <div style={{ textAlign: "center" ,marginTop:"10px", marginBottom:"10px"}}>
									  <Link  to='/teachingCompanyInterview'>
										  <Button style={{ border:"2px solid black" }}> View More </Button></Link>
								  </div>
	  
							  </div>
							  
	  
					</CardContent>
	

	   </Slider>
	</Grid>			



<br/>
<br/>






<br/>






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
							
								<Grid   item md={6} sm={12} xs={12} lg={9.8}  style={{ paddingLeft:"20px"}}  >
							       <input type="text" className="form-control" id="name" placeholder="Rohit Singh"

                                          style={{ width:"50%",border:"2px solid black",borderRadius:"15px",paddingLeft:"10px"}}
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
							
								<Grid   item md={6} sm={12} xs={12} lg={9.5}    style={{ paddingLeft:"10px"}}     >
								<input  style={{width:"50%",border:"2px solid black",borderRadius:"15px", paddingLeft:"10px"}}  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
							   
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
							
								<Grid   item md={6} sm={12} xs={12} lg={9.4} style={{paddingLeft:"10px"}}  >
								<textarea  style={{padding:"10px", border:"2px solid black",borderRadius:"15px", width:"95%" , height:"160px"}}

                                       placeholder="Your Message"  
                                       name='message'
                                         //   value={msg.message}
                                        //  onChange={handleChange}


                                      > </textarea>
							    </Grid>
                            </Grid>



				</Grid>


				
			</Grid>

			</Container>






		

		<Grid   style={{marginTop:"50px"}}   >
				<Box  p={4} style={{ fontSize:"20px",textAlign:"center",height:"auto", backgroundColor:"#29335c" }}>

                <p> All Right Resceved 2022</p>

                 <div style={{marginTop:"8px", display:"flex", width:"100%", height:"auto"}}>
                      <div style={{ textAlign:"center",width:"100%",}} >
                             <h2 >Services</h2>
							 <p style={{fontSize:"18px"}}>Web design</p>
							 <p style={{fontSize:"18px"}}>Development</p>
							 <p style={{fontSize:"18px"}}>Hosting</p>
					  </div>

                      <div   style={{textAlign:"center",width:"100%",}}>
                             <h2>About</h2>
							 <p style={{fontSize:"18px"}}>Company</p>
							 <p style={{fontSize:"18px"}}>Team</p>
							 <p  style={{fontSize:"18px"}}>Careers</p>
					  </div>

				 </div>


                <div style={{width:"100%", marginTop:"10px"}}>
                <div style={{textAlign:"center", width:"100%"}}>
				 <h2>R. Path</h2>
				 <hr/>
				</div>
			

				</div>

				</Box>

	   </Grid>




</Grid>


</>

	);
}





export default HomePage;
