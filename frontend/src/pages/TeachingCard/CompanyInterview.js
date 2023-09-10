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


function CompanyInterview(props) {


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
     <h1> Prepration for private Company Interview </h1>
     <hr/>

     </div> 
<Container fixed   >


<Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >

           <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
              <br/>
              <h1> The Complete Job Interviewing Skills Masterclass Course</h1>
                <hr/>
                <br/>
                <p>Interviewing Skills To Land Your Next Job - Never Be Nervous Again - Ace Your Interview - Prepare for Any Question. </p>
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

                          <p > English,</p>
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
                        <h4>How To communicate effectively during a job interview</h4>
                   </div>
                
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> How to prepare for job interviews </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> How to follow up after job interviews </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4>How to deal with tough questions during a job interview</h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> How to discuss salary</h4>

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
         <h4> 22.5 hours on-demand video </h4>
   </div>

  <div style={{display:"flex"}}>
       <div  style={{paddingRight:"8px"}}>
       <FontAwesomeIcon icon={faNewspaper} /> 
         </div>
         <h4>  2 articles </h4>
  </div>


  <div style={{display:"flex"}}>
       <div  style={{paddingRight:"8px"}}>
           <FontAwesomeIcon icon={faPaste} /> 
         </div>
         <h4>  8 downloadable resources </h4>
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
<Typography> You Can Ace Your Next Job Interview</Typography>
</AccordionSummary>
<AccordionDetails>
   <div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>You Can Accomplish Your Primary Goal-Getting the job Offer</li>
          <li>How You Will Stand Out</li>
          <li>Why You Are The Absolute Best Person for This Job</li>
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
<Typography>Developer Your Winning Interview Mindset</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Deliver a Career Catapulting Presentation</li>
          <li>Your Resume Has Done Its Job. Now It is Your Turn</li>
          <li>This Is The Perfect Time To Be Politically Correct</li>
          <li>Please Tell Me About Yourself</li>
           <li>You Can Convince The Interviewer You Are The Best Person for the Job</li>
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
<Typography>Maintaining a Winning Mental State for Job Interviewing</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Interviewing Skills With a Positive Mental State</li>
          <li>Create Your Winning Message</li>
          <li>The 60 Second Winning Interview</li>
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
<Typography>The Sweet Smell of Your Success</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Walking Into the Interview With Grace</li>
          <li>Have The Look</li>
          <li>Winning The Voice Competition</li>
          <li>Mirror Mirror On the Wall and In the Chair</li>
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
<Typography> You Can Eliminate Your Nerves</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Nervousness Can Melt Away</li>
          <li>The Real Reason You are Nervous About Your Interviewing Skills</li>
          <li>Horrible Practices To Avoid At All Costs</li>
          <li>Never Let them see Or Feel You Sweat</li>
          <li>Pitching Yourself On a Regular Basis Where the Stakes are Low</li>
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
<Typography>Rehearse Your Interviewing Skill Like A Pro</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>The Ultimate Success Tip for Great Job Interviewing Skills</li>
          <li>Winging It Is Always a Bad Idea</li>
          <li>The Checklist for Critiquing Your Interview Skills</li>
          <li>The Magic Practice Number is 10</li>
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
<Typography>Only Minutes to Go Before Your Interview!</Typography>
</AccordionSummary>
<AccordionDetails>

<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Last Minute Tips Before You Start the Interview</li>
          <li>Don’t Get There On time, Get There Early</li>
          <li>The Last Minute Pit Stop</li>
          <li>Your Winning Bag of Tricks</li>
          <li>Serenity Now!</li>
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
<Typography>Here Is How To Answer Questions With Skill</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>The Real Question Inside Every Question</li>
          <li>And...Why Is This Relevant To Me Hiring You</li>
          <li>No Stupid Questions But There Are Stupid Answers</li>
          <li>Here Is Why You Should Hire Me</li>
          <li>Answer Questions In a Likeable Way</li>
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
<Typography>Notes On Note Taking During Job Inerviews</Typography>
</AccordionSummary>
<AccordionDetails>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Here Is Why You Should Take Notes During a Job Interview</li>
          <li>You Don’t Need High Tech for Note Taking</li>
          <li>Good Note Taking Can Reduce Your Stress During the Interview</li>
          <li>Using Your Notes To Your Advantage</li>
          <li>Review Your Notes on Notes</li>
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
           <h4>Name: TJ Walker</h4> 
         
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
               <p> 
               TJ has created numerous Udemy best-selling courses in the fields of personal development, public speaking, presentation skills, media training and communication skills. 

Feel free to contact him on LinkedIn for more information on in-person training workshops, seminars, and keynote speeches on habits and all personal development subjects in which he teaches online courses.

Walker is the founder of Media Training Worldwide and has been conducting public speaking training workshops and seminars since 1984. Walker has trained Presidents of countries, Prime Ministers, Nobel Peace Prize winners, Super Bowl winners, US Senators, Miss Universes and Members of Parliament. He has conducted presentation and media training workshops on six continents in more than two dozen countries.

 His book, "Secret to Foolproof Presentations" was a USA Today # 1 Bestseller, as well as a Wall Street Journal, and Business Week Bestseller.

 Walker is also the author of "Media Training AZ" and "Media Training Success." 

Walker's Facebook page "TJ Walker Speak to Influence" is the #1 page for 7-day a week video tutorials on how to be a better public speaker and communicator.

In 2009, Walker set the Guinness Book of World Records for Most Talk Radio Appearances ever in a 24 hour period.

Walker has also served as a former President of the National Speakers Association, New York City.

Walker was a merit scholar at Duke University where he graduated magna cum laude.
              </p>
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
title="Christine A."
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
Well, this was a lot of work, but most definitely worth the time and effort to complete it. I have some issues to address though, but this course doesn't cover what to do when the individual has some "not so camera perfect" flaws. I pretty much like my voice, I just need to tone it down some. All in all, there is much information in this class.
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
title="Sylvia R."
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
I practiced the video recording tip, that changed so much my self-confidence. Thanks
Yes. I am about to be interviewed and I am taking in the tips and applying them to this interview.
I like how concise every video is. It really allows the instructor to get a single point across without getting lost in other details.
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
title="Kieran N."
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
Comprehensive, down to earth and full of great tips and techniques that you can put into practice immediately. This is not a dry boring course either, it has a lively style and engaging delivery. Highly recommended.
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
title="Silvia Esther S."
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
All contents have been covered successfully. Many important and useful topics have been included in this course.
</Typography>
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

export default CompanyInterview;