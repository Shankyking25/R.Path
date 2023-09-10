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
import NovelImg5 from "../../Images/TurningPoint.jpg" 






function TurningPoint() {


  const [showAccordion, setShowAccordion] = useState(false);


  const handleToggleAccordion = () => {
    setShowAccordion(true);
        console.log("Click button");
    console.log(showAccordion);

  };



    return ( <>
      <Container fixed   >
 
 
      <Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >
      
                     <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
                        <br/>
                        <h1>  Turning Point</h1>
                          <hr/>
                          <br/>
                          <h3>Written by: APJ Abdul Kalam</h3>
                          <br/>
                            <h3>Summary: </h3>
                            <p>

This book, Turning Points: A Journey Through Challenges, takes up the story from when A.P.J Abdul Kalam became the President of India. It covers his acceptance of the post of the President of India, his term in office, his efforts to make his term meaningful, and the challenges he faced.

His term from 2002 to 2007 was an eventful one. The President of India is just a titular head with minimal powers. But, the office is one of great influence and Kalam used it to best effect. He got the government and the public to focus on issues that were relevant to the country’s all round growth.

He initiated programs like PURA to try and integrate rural areas into the general economic and technological growth of the country. He dreamt of taking the whole of India on his vision for the country in the new millennium, and he saw no reason why the villages should be left out in this vision.

Turning Points: A Journey Through Challenges is more about Kalam’s vision for his country rather than about himself. He tries to provide a blueprint for development, and for reforms in the government and judiciary.

Dr. Kalam is a strong advocate for the use of technology and a proponent of e-governance. Even the little bits of personal experience during his term that he gives, he links with these ideas. For instance, he mentions the controversial dissolution of the Bihar assembly for which he later offered to resign. But, he does not focus on the political or personal implications of this decision, instead, he chose to highlight his use of electronic communication in lending his approval to this move, for he was in Moscow at that time.

                            </p>
                           <br/>
      
                           <div style={{display:"flex" }}>
                            <h4>ISBN:</h4>
                            <p  style={{marginLeft:"8px"}}>5463194619093</p>
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
                   >1,278,705 students
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
                  <img src={NovelImg5} alt=""   style={{size:"2px",border:"2px solid black",borderRadius:"10px",width:"100%", height:"470px", objectFit: "cover" }}/>
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
     
     
                 
     
                   <Grid  item lg={12} md={12} sm={12} xs={12}  style={{ textAlign:"center", marginTop:"100px", marginBottom:"10px"}}>
                    
                   <Button variant="outlined">Buy this Book</Button>
     
                   </Grid>
     
                 </Box>
             </Grid>    
     
            </Grid>
     
        </Container>
     
     <br/>
     <br/>
     <br/>  
     
     </>   );
}

export default TurningPoint;