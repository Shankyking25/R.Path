import React,{ useState } from 'react';
import { Grid, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare,faGlobe,faClock,faWallet,faMoneyBill1Wave,faMobileScreenButton,faStarOfLife,faUserGroup,faCirclePlay,faNewspaper, faVideo,faPaste,faStar} from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NovelImg1 from "../../Images/wings_of_fire.jpg" 





function WingsOfFire() {


    return (
        <>
        
       <Container fixed   >


			<Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >
			
                   	<Grid item  md={8}  sm={8} xs={8} lg={8}  >   
                        <br/>
                        <h1> WINGS OF FIRE </h1>
                          <hr/>
                          <br/>
                          <h3>Written by: APJ Abdul Kalam</h3>
                          <br/>
                            <h3>Summary: </h3>
                            <p>Summary of the Book One of the most inspiring and popular autobiographies to read is Late Abdul Kalam’s Wings of Fire. In this book, the former president shares his personal experiences and minutest details of his life. It narrates his life, right from the former late president’s rise from humble beginnings to his vision for the country in the year 2020. It has been divided into four parts equally. The first part narrates his early life that includes his parents, teachers and other influential role models. The second part deals with Kalam’s further education, work experience and his involvement with the military projects. The third and the fourth parts are about his ISRO career and the last phase of his life, where he was bestowed upon with several awards and honours. Buy Wings of Fire: An Autobiography online to read more about this great personality who played a pivotal role in shaping our country’s future. About the Author Wings of Fire - An Autobiography was written by Dr Kalam and Arun Tiwari. Kalam examines. Kalam talks about his early life, effort, hardship, luck and chance that led him to become the frontman of Indian space research, nuclear and missile programs. Kalam began his career after graduating from MIT in Chennai, India. He worked with Hindustan Aeronautics Limited and later moved to ISRO and helped establish Vikram Sarabhai Space Centre and pioneered the first space launch-vehicle program. Kalam later moved to DRDO to lead the Indian nuclear weapons program. </p>
                           
                           <br/>
                           <div style={{display:"flex" }}>
                            <h4>ISBN:</h4>
                            <p  style={{marginLeft:"8px"}}>9788194619093</p>
                            </div>
                            <br/>
                            <div style={{display:"flex"}}>
                            <h4>BINDING:</h4>
                            <p style={{marginLeft:"8px"}}>PAPERBACK</p>
                            </div>
                            <div >
        <br/>
         <Box
                 sx={{
                 width: "100%",
                  display: 'flex',
                 alignItems: 'center',
                }}
         >

              <Box //sx={{ ml: 6 }} 
                  style={{paddingRight:"8px"}}>4.5
               </Box>

               <Rating name="half-rating" defaultValue={2.5} precision={4.5} />

                <Box //sx={{ ml: 6 }} 
                   style={{paddingLeft:"8px"}}
                   >1,778,705 students
                </Box>
                                   
        </Box>       
             
                            </div>
                    

                        
                             <br/>

                             <div style={{display:"flex"}} >
                              
                                <div style={{display:"flex" }}>
                                    <div  style={{paddingRight:"8px"}}>
                                         <FontAwesomeIcon icon={faCheckSquare} />
                                     </div>

                                    <p > Last updated 7/2023</p>
                                </div>
                            
                                <div style={{display:"flex" ,paddingLeft:"30px"}}>
                                    <div  style={{paddingRight:"8px"}}>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    </div>

                                    <p > English</p>
                                </div>
                    
                             </div>

  
                    </Grid>       		
                

                 

             <Grid  item  md={4}  sm={4} xs={4} lg={4}  style={{ height:"auto", border:"2px solid black",borderRadius:"10px"}} >   
                     <Box  >  
                  <img src={NovelImg1} alt=""   style={{border:"2px solid black",borderRadius:"10px",width:"100%", height:"350px", objectFit: "cover" }}/>
                  </Box> 

                      <br/>

                     <Box style={{paddingLeft:"5px",}} >

                     <Grid   item lg={12} md={12} sm={12} xs={12}  style={{display:"flex"}}>
                       <div><h3>₹500</h3></div>
                       <div style={{paddingLeft:"15px",  marginTop:"3px",isplay: "flex", alignItems: "center", height: "100%"}}> <h4 style={{textDecoration: "line-through", color: "red"}}>₹3,199</h4></div>
                       <div style={{ paddingLeft: "15px",  marginTop:"5px", wordSpacing: "10px", display: "flex", alignItems: "center", height: "100%" }}>
                            <h5 >Discount 84% off</h5>
                       </div>
                     
                   </Grid>
                   <hr/>
<br/>

<Grid  item lg={12} md={12} sm={12} xs={12}  style={{display:"flex"}}>
<div  >
<FontAwesomeIcon icon={faClock}  />
</div>

<div  style={{paddingTop:"2px"}}>
  <h5 style={{marginLeft:"10px", 
  }}> 1 day left at this price! </h5>
</div>
</Grid>



<Grid  item lg={12} md={12} sm={12} xs={12}  style={{display:"flex"}}>
<div  >
<FontAwesomeIcon icon={faMoneyBill1Wave}  />
</div>

<div  style={{paddingTop:"2px"}}>
  <h5 style={{marginLeft:"10px", 
  }}> 30-Day Money-Back Guarantee </h5>
</div>



</Grid>


<Grid  item lg={12} md={12} sm={12} xs={12}  style={{display:"flex"}}>
<div  >
<FontAwesomeIcon icon={faWallet }  />
</div>

<div  style={{paddingTop:"2px"}}>
<h5 style={{marginLeft:"10px", 
  }}> Full Lifetime Accesse </h5>
</div>



</Grid>


                 

                   <Grid  item lg={12} md={12} sm={12} xs={12}  style={{ textAlign:"center", marginTop:"250px", marginBottom:"10px"}}>
                    
                   <Button variant="outlined">Buy this Book</Button>

                   </Grid>

                 </Box>
             </Grid>    
   
            </Grid>

        </Container>

<br/>
<br/>
<br/>
       

        </>);
}

export default WingsOfFire;