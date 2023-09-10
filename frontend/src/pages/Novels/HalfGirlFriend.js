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
import NovelImg6 from "../../Images/halfGirlFriend.jpg" 





function HalfGirlFriend() {


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
                   <h1> Half Girlfriend</h1>
                     <hr/>
                     <br/>
                     <h3>Written by:  Chetan Bhagat </h3>
                     <br/>
                       <h3>Summary: </h3>
                       <p>

Half Girlfriend is a story of Bihari boy Madhav, a Hindi speaking Bihari who falls in love with Riya, an influential Delhi girl on the campus of prestigious St. Stephen’s College. Madhav belongs to middle class family, while Riya is from higher class and both have different lifestyles. Madhav proposes her, but Riya rejects the proposal because she thinks they are good as a friend only. A romance novel for the young adults, Half Girlfriend is a story that has been set in different locations including Bihar, Delhi and New York; it revolves around a boy who comes from Bihar in India and his deep longing to dazzle out the girl he is in love with. 
According to the author, the book is meant for the "non-English-types" and reveals the utter dissatisfaction and language problems a young man from Bihar, who speaks Bhojpuri and knows little about the ways of big cities, had to wade through as he got admitted at St. Stephen’s College in the national capital, a place that signified sophistication. 
He falls for a rich, smart and high-class girl from the city. Although the girl never fully accepts this relationship, she nevertheless gives a nod to be his "half girlfriend". Highlighting the new modern love story, as the name suggests it revolves around the unique idea of half girlfriend and how modern day relationship moves from good, bad to exciting things. Meanwhile, the novel will also bestow with some beautiful sight seen of Patna (Bihar) and New York. So, will Madhav succeed to make Riya fall in love with him? Will Riya accept him or not? All these answers are available in this 280 page long book. This love story is beyond live in relationship and love at first sight type of love story and Chetan Bhagat’s creative writing has made it a unique love story. 
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
             <img src={NovelImg6} alt=""   style={{size:"2px",border:"2px solid black",borderRadius:"10px",width:"100%", height:"470px", objectFit: "cover" }}/>
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
        </>);
}

export default HalfGirlFriend;