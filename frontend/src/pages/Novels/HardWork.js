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
import NovelImg1 from "../../Images/hardwork.jpg" 
import NovelImg2 from "../../Images/working-hard-hardly-working.jpg" 




function HardWork() {


  const [showAccordion, setShowAccordion] = useState(false);


  const handleToggleAccordion = () => {
    setShowAccordion(true);
        console.log("Click button");
    console.log(showAccordion);

  };



    return (
        <>

        <Container fixed   >
 
 
       <Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >
       
                      <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
                         <br/>
                         <h1>  Hard Work is the key to Success</h1>
                           <hr/>
                           <br/>
                           <h3>Written by: Hema Rawat</h3>
                           <br/>
                             <h3>Summary: </h3>
                             <p>We are very pleased to engage students from Stratford to participate in 1001 Stories, a global citizenship education program of Seeds of Empowerment. 1001 Stories is a program designed to help empower young global citizens with stories of real children living in developing regions around the world.</p>
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
                   <img src={NovelImg1} alt=""   style={{size:"2px",border:"2px solid black",borderRadius:"10px",width:"100%", height:"450px", objectFit: "cover" }}/>
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
 
 
                  
 
                    <Grid  item lg={12} md={12} sm={12} xs={12}  style={{ textAlign:"center", marginTop:"150px", marginBottom:"10px"}}>
                     
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

export default HardWork;