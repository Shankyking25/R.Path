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
import img8 from "../../Images/Coding-Interview.png"

function CodingLanguage(props) {


  const [showAccordion, setShowAccordion] = useState(false);


  const handleToggleAccordion = () => {
    setShowAccordion(true);
        console.log("Click button");
    console.log(showAccordion);

  };



    return (
        <>
 <div  style={{textAlign:"center"}}>
          <br/>
     <h1>Coding Language Prepration for private Job </h1>
     <hr/>

     </div> 
<Container fixed   >


<Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >

           <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
              <br/>
              <h1> The Complete Coding Language(Java, Python, javascript, etc) Prepration for Private Job Bootcamp From Zero to Hero in Hindi, English</h1>
                <hr/>
                <br/>
                <p>Learn Coding Language like a Professional Start from the basics and go all the way to creating your own applications and games. </p>
                <br/>
                  
                  <div >

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

                   <div >
                      <p>Created by Shanky</p>
                   </div>
          
                   <br/>

                   <div style={{display:"flex"}} >
                    
                      <div style={{display:"flex" }}>
                          <div  style={{paddingRight:"8px"}}>
                               <FontAwesomeIcon icon={faCheckSquare} />
                           </div>

                          <p > Last updated 7/2023</p>
                      </div>
                  
                      <div style={{display:"flex" ,paddingLeft:"10px"}}>
                          <div  style={{paddingRight:"8px"}}>
                          <FontAwesomeIcon icon={faGlobe} />
                          </div>

                          <p > English, Hindi</p>
                      </div>
          
                   </div>

          </Grid>       		
      

       

          <Grid item  md={4}  sm={4} xs={4} lg={4}  style={{ height:"100%", border:"2px solid black",borderRadius:"10px"}} >   
           <Box  >  
        <img src={img8} alt=""   style={{border:"2px solid black",borderRadius:"10px",width:"100%", height:"auto", objectFit: "cover" }}/>
        </Box> 

           <Box style={{paddingLeft:"5px"}} >

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



         <br/>
         <br/>

         <Grid  item lg={12} md={12} sm={12} xs={12}  style={{paddingBottom:"10px", textAlign:"center"}}>
          
         <Button variant="outlined">Buy this course</Button>

         </Grid>

           </Box>
          </Grid>    

  </Grid>

</Container>

<br/>

<Container fixed   >

      <Grid  container lg={12} md={12} sm={12} xs={12}>

               <Grid   item lg={12} md={12} sm={12} xs={12}>
                   <h1>What you'll learn</h1>
                   <hr/>

                   <div  style={{ display:"flex", marginTop:"8px" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4>You will learn how to leverage the power of Coding Language to solve tasks. </h4>

                   </div>
                
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Become job-ready by understanding how Coding Language really works behind the scenes </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Build 6 beautiful real-world projects for your portfolio (not boring toy apps) </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> How to think and work like a developer: problem-solving, researching, workflows</h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Get fast and friendly support in the Q&A area  </h4>

                   </div>


               </Grid>
      </Grid>

</Container>

      <br/>


      <Grid  container lg={12} md={12} sm={12} xs={12}  style={{height:"auto"}} >
      <Container fixed  >

<Grid   item lg={12} md={12} sm={12} xs={12}>
<div  style={{width:"100%",  }}>
<h1> This course includes:  </h1>
  <hr/>
  </div>
  <div style={{display:"flex",marginTop:"8px"}}>
       <div  style={{paddingRight:"8px"}}>
            <FontAwesomeIcon icon={faVideo} />
         </div>
         <h4> 22 hours on-demand video </h4>
   </div>

  <div style={{display:"flex"}}>
       <div  style={{paddingRight:"8px"}}>
       <FontAwesomeIcon icon={faNewspaper} /> 
         </div>
         <h4>  20 Coding exercises </h4>
  </div>


  <div style={{display:"flex"}}>
       <div  style={{paddingRight:"8px"}}>
           <FontAwesomeIcon icon={faPaste} /> 
         </div>
         <h4>  20 Mock Test </h4>
  </div>


  <div  style={{ display:"flex" }}>
        <div  style={{paddingRight:"8px"}}>
            <FontAwesomeIcon icon={faMobileScreenButton} />
         </div>
      <h4> Access on mobile and TV   </h4>

   </div>

</Grid>

</Container>


      </Grid>
             
 <br/>

 <Grid  container lg={12} md={12} sm={12} xs={12}  style={{height:"auto"}} >
      <Container fixed   >

<Grid   item lg={12} md={12} sm={12} xs={12}>
<div  >
<h1> Course content:  </h1>
  <hr/>
  </div>
<br/>

<div >
  
<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1a-content"
id="panel1a-header"
>
<Typography> How to Navigate This Course</Typography>
</AccordionSummary>
<AccordionDetails>
   <div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Pathways and Section Roadmaps</li>
          <li>Course Pathways</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>Developer Skills & Editor Setup</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Section Roadmap</li>
          <li>Setting up Prettier and VS Code</li>
          <li>Learning How to Code</li>
          <li>How to Think Like a Developer: Become a Problem Solver!</li>
           <li>Debugging (Fixing Errors)</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>

<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>Data Structures, Modern Operators and Strings</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Section Roadmap</li>
          <li>Destructuring Arrays</li>
          <li>Destructuring Objects</li>
          <li>Coding Challenge</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>A Close Look at Functions</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Default Parameters</li>
          <li>First-Class and Higher-Order Functions</li>
          <li>Coding Challeng</li>
          <li>Practice Question - 20</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography> Working With Arrays</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Simple Array Methods</li>
          <li>Looping Arrays</li>
          <li>Coding Challenge</li>
          <li>Practice Question - 20</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


{showAccordion  ? (  <>                
<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>Object-Oriented Programming(OOP)</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>What is Object-Oriented Programming?</li>
          <li>Coding Challenge</li>
          <li>Practice Question - 20</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>Building a Modern Application</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Project Overview and Planning</li>
          <li>Latest Code Updates</li>
          <li>The MVC Architecture</li>
          <li>Implementing Error and Success Messages</li>
          <li>Wrapping Up: Final Considerations</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel2a-content"
id="panel2a-header"
>
<Typography>Setting Up Git and Deployment</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Simple Deployment with Netlify</li>
          <li>Setting Up Git and GitHub</li>
          <li>Git Fundamentals</li>
          <li>Pushing to GitHub</li>
          <li>Setting Up Continuous Integration With Netlify</li>
       </ol>
    </div>
</AccordionDetails>
</Accordion>


</>) :  (<>
<Grid   container lg={12} md={12} sm={12} xs={12}  style={{justifyContent:"center", paddingTop:"10px"}}>
<Button variant="contained" onClick={handleToggleAccordion}>
Show All
</Button>
</Grid>
</>)  }

 </div> 

</Grid>

</Container>


      </Grid>



   <br/>




   <Container fixed  >

<Grid  container lg={12} md={12} sm={12} xs={12}>

       <Grid   item lg={12} md={12} sm={12} xs={12}>
           <h1>Instructor</h1>
           <hr/>

           <br/>
     
           <div >
           <h4>Name: Jose Marcial</h4> 
         
               <div  style={{display:"flex",}}>
                  <div>
                      <Avatar
                           alt="Jose Marcial"
                           src="/static/images/avatar/1.jpg"
                           sx={{ width: 110, height: 110 }}
                       />
                   </div>

                  <div  style={{paddingLeft:"15px"}}>
                        <div  style={{display:"flex",paddingTop:"7px", wordSpacing: "10px" }}  >
                             
                              <FontAwesomeIcon icon={faStar} style={{paddingRight:"12px"}}  />
                          
                           <div style={{paddingLeft:"5px"}}>  <h5>4.6 Instructor</h5> </div> 
                           
                        </div>
                         
                        <div  style={{display:"flex",  paddingTop:"7px", wordSpacing: "10px"}}  >
                            
                            <FontAwesomeIcon  icon={faStarOfLife} style={{paddingRight:"12px"}}   />
                            
                            <div style={{paddingLeft:"5px"}}> <h5>1,082,283 Reviews</h5>  </div>
                        </div>

                        <div  style={{display:"flex", paddingTop:"7px", wordSpacing: "10px"}}  >
                            
                            <FontAwesomeIcon icon={faUserGroup}   style={{paddingRight:"12px"}} />
                            
                            <div style={{paddingLeft:"5px"}}><h5>3,508,628 Students</h5> </div>
                        </div>


                        <div  style={{display:"flex",paddingTop:"7px",wordSpacing: "10px"}}  >
                          
                          <FontAwesomeIcon icon={faCirclePlay}  style={{paddingRight:"12px"}} />
                          
                          <div style={{paddingLeft:"5px"}}> <h5>71 Courses</h5> </div>
                        </div>
                       
                  </div>  
               </div>


           <br/>
            
            <div >
             <p>I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.

I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privilege of training 1,500,000+ learners in the field of web development.

What learners love the most about all my courses is the fact that I take the time to explain every single concept in a way that everyone can easily understand.</p>
            </div>

           </div>
       </Grid>
</Grid>

</Container>

<br/>



<Container fixed  >

<Grid  container lg={12} md={12} sm={12} xs={12}>

       <Grid   item lg={12} md={12} sm={12} xs={12}>
           <h1>4.6 course rating </h1>
           <hr/>

           <br/>
     
           <div style={{display:"flex",justifyContent: "space-between",}}>
           
           <Card sx={{ maxWidth: 345 , border:"2px solid black"}}>
<CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2023"
/>

<CardContent  style={{paddingTop:"0px", paddingBottom:"0px", }}>

<Box
       sx={{
       width: "100%",
        display: 'flex',
       alignItems: 'center',
   
      }}
>

    <Box //sx={{ ml: 6 }} 
        style={{paddingRight:"8px"}}>4
     </Box>

     <Rating name="half-rating" defaultValue={2.5} precision={4} />

      <Box //sx={{ ml: 6 }} 
         style={{paddingLeft:"8px"}}
         >2 weeks ago
      </Box>
                         
</Box>  
</CardContent>  


<CardContent>

<Typography variant="body2" color="text.secondary">
This impressive paella is a perfect party dish and a fun meal to cook
together with your guests. Add 1 cup of frozen peas along with the mussels,
if you like.
</Typography>
</CardContent>
</Card>





<Card sx={{ maxWidth: 345 , border:"2px solid black", }}>
<CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Nevil Chrispin N."
subheader="August 2, 2023"
/>

<CardContent  style={{paddingTop:"0px", paddingBottom:"0px", }}>

<Box
       sx={{
       width: "100%",
        display: 'flex',
       alignItems: 'center',
   
      }}
>

    <Box //sx={{ ml: 6 }} 
        style={{paddingRight:"8px"}}>5
     </Box>

     <Rating name="half-rating" defaultValue={2.5} precision={5} />

      <Box //sx={{ ml: 6 }} 
         style={{paddingLeft:"8px"}}
         >3 weeks ago
      </Box>
                         
</Box>  
</CardContent>  


<CardContent>

<Typography variant="body2" color="text.secondary">
This impressive paella is a perfect party dish and a fun meal to cook
together with your guests. Add 1 cup of frozen peas along with the mussels,
if you like.
</Typography>
</CardContent>
</Card>




           </div>



         <br/>




         <div style={{display:"flex",justifyContent: "space-between",}}>
           
           <Card sx={{ maxWidth: 345 , border:"2px solid black"}}>
<CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Nagendra Prasad N."
subheader="May 14, 2023"
/>

<CardContent  style={{paddingTop:"0px", paddingBottom:"0px", }}>

<Box
       sx={{
       width: "100%",
        display: 'flex',
       alignItems: 'center',
   
      }}
>

    <Box //sx={{ ml: 6 }} 
        style={{paddingRight:"8px"}}>4
     </Box>

     <Rating name="half-rating" defaultValue={2.5} precision={4} />

      <Box //sx={{ ml: 6 }} 
         style={{paddingLeft:"8px"}}
         >2 weeks ago
      </Box>
                         
</Box>  
</CardContent>  


<CardContent>

<Typography variant="body2" color="text.secondary">
This impressive paella is a perfect party dish and a fun meal to cook
together with your guests. Add 1 cup of frozen peas along with the mussels,
if you like.
</Typography>
</CardContent>
</Card>





<Card sx={{ maxWidth: 345 , border:"2px solid black", }}>
<CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Darshani P."
subheader="March 14, 2023"
/>

<CardContent  style={{paddingTop:"0px", paddingBottom:"0px", }}>

<Box
       sx={{
       width: "100%",
        display: 'flex',
       alignItems: 'center',
   
      }}
>

    <Box //sx={{ ml: 6 }} 
        style={{paddingRight:"8px"}}>3
     </Box>

     <Rating name="half-rating" defaultValue={2.5} precision={3} />

      <Box //sx={{ ml: 6 }} 
         style={{paddingLeft:"8px"}}
         >2 weeks ago
      </Box>
                         
</Box>  
</CardContent>  


<CardContent>

<Typography variant="body2" color="text.secondary">
This impressive paella is a perfect party dish and a fun meal to cook
together with your guests. Add 1 cup of frozen peas along with the mussels,
if you like.
</Typography>
</CardContent>
</Card>




           </div>






       </Grid>
</Grid>

</Container>




<br/>
<br/>

  

</>    );
}

export default CodingLanguage;