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
import img3 from "../../Images/Eng.jpg"




function SpokenEnglish() {


  const [showAccordion, setShowAccordion] = useState(false);


  const handleToggleAccordion = () => {
    setShowAccordion(true);
        console.log("Click button");
    console.log(showAccordion);

  };



    return (<>
      <div  style={{textAlign:"center"}}>
      <br/>
 <h1> Spoken Englist Bootcamp </h1>
 <hr/>

 </div> 
<Container fixed   >


<Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >

       <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
          <br/>
          <h1> How to Speak English Fluently - Speaking Mastery Course 2023</h1>
            <hr/>
            <br/>
            <p>Speak English Confidently, Fix Common Grammar & Pronunciation Mistakes - English Speaking Masterclass for Professionals . </p>
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

                      <p > English</p>
                  </div>
      
               </div>

      </Grid>       		
  

   

      <Grid item  md={4}  sm={4} xs={4} lg={4}  style={{ height:"100%", border:"2px solid black",borderRadius:"10px"}} >   
       <Box  >  
    <img src={img3} alt=""   style={{border:"2px solid black",borderRadius:"10px",width:"100%", height:"auto", objectFit: "cover" }}/>
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
                    <h4>Attain English speaking mastery easily using a proven and time-tested process</h4>

               </div>
            
               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> Discover the easiest technique to start speaking English </h4>

               </div>
               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> Face everyone confidently by acquiring the nuances of spoken English and communication skills </h4>

               </div>
               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4>You will learn to speak English fluently with 100+ Speaking Practice Assignments, designed for fluency </h4>

               </div>
               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> 7 Mistakes that stop you from speaking English fluently </h4>

               </div>

               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> Understand and fix the most common English grammar mistakes in verbal and written communication </h4>

               </div>

               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> Fix common pronunciation mistakes and speak English confidently </h4>

               </div>


               <div  style={{ display:"flex" }}>
                  <div  style={{paddingRight:"8px"}}>
                     <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                    <h4> Improve vocabulary for daily English conversation </h4>

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
     <h4> Face to face english speaking.</h4>
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
<Typography> About the Course</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Who should join the cource</li>
      <li>What you will learn</li>
      <li>How to Get the Most Out of This Course</li>
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
<Typography>The Easiest Way to Speak English</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>The Best Technique to Speak Fluent Englis Easily</li>
      <li>Sample Practice</li>
      <li>If You Find Non-Stop Practice Difficult</li>
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
<Typography>Learn to Emote and Speak English Naturally</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Learn to Speak English Naturally</li>
      <li>A Simple Role-Play to Speak English Fluently</li>
      <li>Learn to Emote and Speak English Naturally</li>
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
<Typography>The Best Technique to Speak English Easily and Confidently</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>The Importance of Daily Routine Practice</li>
      <li>Sample Daily Routine Practice</li>
      <li>Talk about Your Daily Routine in English - A Sample Practice</li>
      <li>English Vocabulary to Describe Your Day</li>
      <li>English Speaking Practice Assignment</li>
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
<Typography> Fix Common English Grammar Mistakes</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
These are the important fundamental concepts for the candidates preparing for any aptitude test, placement exam, or entrance test. Although, the questions that come in the examination are quite easy still you should study ratio and proportion because it is a scoring topic.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Some Interesting English Grammar Errors</li>
      <li>English Grammar Errors in Framing Questions</li>
      <li>Common English Grammar Errors in Tenses</li>
      <li>Common English Grammar Error with Pronouns</li>
      <li>Common English Grammar Errors with Adjectives</li>
      <li>Common English Grammar Errors with Adverbs</li>
      <li>Common English Grammar Errors with Conjunctions</li>
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
<Typography>A Little Known Technique to Speak English Fluently</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Introduction to Small Scripts to Speak English Easily</li>
      <li>Small Scripts to Develop English Speaking Skills</li>
      <li>Speaking Practice Assignments </li>
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
<Typography>Simple Present Questions and Answers to Improve Fluency</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Questions in Simple Present to Improve English Fluency</li>
      <li>Simple Present Question to Learn English Speaking</li>
      <li> Practice Assignments </li>
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
<Typography>Simple Past Questions and Answers to Improve Fluency</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Introduction to Simple Past Questions</li>
      <li>Simple Present Question to Learn English Speaking</li>
      <li> Practice Assignments </li>
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
<Typography>Imagination Questions and Answers Practice to Improve Fluency</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Introduction to Imagination Questions</li>
      <li>Simple Present Question to Learn English Speaking</li>
      <li> Practice Assignments </li>
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
<Typography>Learn to Communicate Effectively-Nuances of Effective Speaking Skills</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Introduction to the Nuances of Effective Communication Skills</li>
      <li>Effective Communication skills</li>
      <li>A Small Challenge for You</li>
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
<Typography>How to Present a Topic in English</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>English Speaking Skills for a Speech-Introduction & the First Topic (My Company)</li>
      <li>English Speaking Skills for a Speech</li>
      <li>English Speaking practice Assignment</li>
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
<Typography>My Favourite Technique to Speak Fluent English</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>English Speaking Practice : Speak Small or Smallest Stories</li>
      <li>English Speaking Practice - Instructions</li>
      <li>Speaking Practice Assginments</li>
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
<Typography> Your Queries and challenges-Frequently Asked Questions</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>English Conversation Topics</li>
      <li>How to Speak on Any Topic in English</li>
      <li>How can I take my English Communication to the Next Level?</li>
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
<Typography>How to Improve Your English Speaking Skills Every Day: A Reminder </Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>If You Want to Improve English Speaking Skills Quickly</li>
      <li>Importance of Listening Skills to Develop English Commmunication</li>
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
<Typography>Fix Common English Pronunciation Mistakes</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
   <ol>
      <li>Introduction to Common Pronunciation Mistakes</li>
      <li>Why We Make Pronunciation Mistakes</li>
      <li>How to Improve English Pronunciation of Commonly Mispronounced Words</li>
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
       <h4>Name: Yogesh vermani</h4> 
     
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
                      
                       <div style={{paddingLeft:"5px"}}>  <h5>4.2 Instructor</h5> </div> 
                       
                    </div>
                     
                    <div  style={{display:"flex",  paddingTop:"7px", wordSpacing: "10px"}}  >
                        
                        <FontAwesomeIcon  icon={faStarOfLife} style={{paddingRight:"12px"}}   />
                        
                        <div style={{paddingLeft:"5px"}}> <h5>1,4512 Reviews</h5>  </div>
                    </div>

                    <div  style={{display:"flex", paddingTop:"7px", wordSpacing: "10px"}}  >
                        
                        <FontAwesomeIcon icon={faUserGroup}   style={{paddingRight:"12px"}} />
                        
                        <div style={{paddingLeft:"5px"}}><h5>21,508 Students</h5> </div>
                    </div>


                    <div  style={{display:"flex",paddingTop:"7px",wordSpacing: "10px"}}  >
                      
                      <FontAwesomeIcon icon={faCirclePlay}  style={{paddingRight:"12px"}} />
                      
                      <div style={{paddingLeft:"5px"}}> <h5>20 Courses</h5> </div>
                    </div>
                   
              </div>  
           </div>


       <br/>
        
        <div >
         <p>When I started my career as a chartered accountant, I faced rejection from multiple companies due to poor English communication skills. Despite joining three institutes that only taught me tenses and grammar, I was frustrated and disappointed.

However,  I was selected by three companies one after another, and even by one of the top Fortune 500 companies once I was able to speak English confidently.



I help professionals and jobseekers just like you speak English fluently and confidently.



I also help them develop other career skills such as job interview preparation, professional email writing, and self-confidence so that they can face people confidently, skyrocket their career growth, and increase their earning potential.With 14 years of experience helping others overcome similar struggles, I am constantly learning and evolving to better assist my clients.</p>

        </div>

       </div>
   </Grid>
</Grid>

</Container>

<br/>



<Container fixed  >

<Grid  container lg={12} md={12} sm={12} xs={12}>

   <Grid   item lg={12} md={12} sm={12} xs={12}>
       <h1>4 course rating </h1>
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
title="Susweta G"
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
i want to improve my speaking skills and want to do conversation with one of you or in a group, so that it can be improved. Hope will get all that in this course.
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
title="Rajasekran"
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
The way is explaining to learn and speaking English is very easy to understand and practice myself.
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
title="Prashant Prabhakar P."
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
I feel this course will help me to overcome the fear of speaking the wrong English in front of others. This course help me to boost my confidence and I may learn some new techniques to speak english fluently.</Typography>
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
Now I can speak in English Infront of mirror and confidence is building.</Typography>
</CardContent>
</Card>




       </div>






   </Grid>
</Grid>

</Container>




<br/>
<br/>



</>
    );
}

export default SpokenEnglish;