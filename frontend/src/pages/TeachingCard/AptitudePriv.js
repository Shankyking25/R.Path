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
import img1 from "../../Images/Apti.jpg"


function AptitudePriv(props) {


  const [showAccordion, setShowAccordion] = useState(false);


  const handleToggleAccordion = () => {
    setShowAccordion(true);
        console.log("Click button");
    console.log(showAccordion);

  };


    return ( <>
      <div  style={{textAlign:"center"}}>
          <br/>
     <h1> Aptitude Prepration for private Job </h1>
     <hr/>

     </div> 
<Container fixed   >


<Grid   container md={12}  sm={12} xs={12} lg={12} style={{ height:"auto", marginTop:"10px"}} >

           <Grid item  md={8}  sm={8} xs={8} lg={8}  >   
              <br/>
              <h1> The Complete Aptitude Prepration for Private Job Bootcamp From Zero to Hero in Hindi, English</h1>
                <hr/>
                <br/>
                <p>Learn Aptitude like a Professional Start from the basics and go all the way to crack or clear any exam. </p>
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
        <img src={img1} alt=""   style={{border:"2px solid black",borderRadius:"10px",width:"100%", height:"auto", objectFit: "cover" }}/>
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
                        <h4>Shortcut Trick to solve questions in less time </h4>

                   </div>
                
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Cover all topics with proper notes </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Every day Query session </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Mock Test every week </h4>

                   </div>
                   <div  style={{ display:"flex" }}>
                      <div  style={{paddingRight:"8px"}}>
                         <FontAwesomeIcon icon={faCheckSquare} />
                      </div>
                        <h4> Short Notes + Previous year solved paper  </h4>

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
         <h4>  20 Aptitude exercises </h4>
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
<Typography> Numbers</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
  Natural numbers, prime numbers, composite numbers, and integers all are part of the number system which is part of any placement test and is included in essential topics. 
</Typography>
    <div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Percentage</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Many people tend to struggle with percentages as there are many things included in them such as the calculation of complex concepts of profit and loss, compound interest, discounts, etc. But it is a very important topic in the list of aptitude tests required for placement so you must understand it properly and practice thoroughly
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Profit and Loss</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Another crucial topic in the quantitative aptitude section is Profit and loss and the candidate who wants to successfully clear the aptitude exam must have a better understanding of this particular topic. Also, many different types of questions are asked regarding this topic, therefore have your concepts cleared beforehand. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Average</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
We never liked taking out the average of numbers while in school and sometimes skip the topic for studying the tough ones. But you cannot do the same while preparing for the aptitude or placement test. Here you will have to give equal importance to this section too to score good marks. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography> Ratio and Proportion</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
These are the important fundamental concepts for the candidates preparing for any aptitude test, placement exam, or entrance test. Although, the questions that come in the examination are quite easy still you should study ratio and proportion because it is a scoring topic.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Mixture and Alligation</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Mixture and Alligation are useful topics of quantitative aptitude that are used for determining the ratio and cost of two materials mixed together. In most of the competitive exams question from this category is given to test the capabilities of the candidate. Thus, you should go through this topic thoroughly.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Time and Work</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Time and work are one of the most important sections of quantitative aptitude and its questions are included in every type of exam be it for placement in any private company or any government job. The concept of these questions is known by most of the students and can be solved easily if you are aware of the concept. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Time Speed Distance</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
For candidates preparing for aptitude tests or placement exams time, speed and distance is a crucial topic and helps in calculating average speed in order to solve complex distance and time problem. So if you want to stay ahead in the competition then you should prepare this topic properly.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Pipes and Cisterns</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Another common and vital topic for quantitative aptitude is pipes and cisterns which the candidates must study as they are included in almost every aptitude test or placement examination. The questions are not very tough but the candidates must be aware of the concepts so that they can solve the questions in less time.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Algebra</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Questions related to Algebra are quite evident in aptitude test and is divided into sub-branches such as elementary algebra, linear algebra, advanced algebra, commutative algebra, and abstract algebra. So, it is important that you definitely study the questions properly and practice daily.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Geometry</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
This list cannot be completed without Geometry. It is essential that you deeply study this particular topic as it plays a vital role in aptitude tests or any other government examination. Geometry also creates a base for numerous mathematics chapters and if learned well many things can become easy. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Trigonometry, Height, and Distance</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Having a strong knowledge of Trigonometric principles is essential for solving basic height and distance questions. These types of problems are common in aptitude tests and are an integral part of quantitative aptitude.
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography> Probability</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
If you preparing for any placement exam then Probability is a must as it helps in improving your quantitative skills. Having a good understanding of probability and how it works can be very helpful as it plays a crucial role in many fields such as engineering, finance, economics, science, etc. Therefore, you must study the topic before appearing for any aptitude test to score well. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Permutation and Combination(PnC)</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
This topic of permutation and combination is included in every aptitude test therefore it is essential to revise it appropriately because they are the two most important concepts present in Mathematics. Also, understanding the difference between them can be tricky which can only be attained if you practice it religiously. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
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
<Typography>Age</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
Problems with age are an important topic in many placement exams. These questions seem a bit confusing at first but with continuous practice, one can solve the questions easily. 
</Typography>
<div  style={{ paddingLeft:"30px"}}>
       <ol>
          <li>Level of Difficulty – Easy to Medium</li>
          <li>Learn - 2 days</li>
          <li>Practice Question - 20</li>
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
             <p>Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, SalesForce, Starbucks, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings.</p>

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

  

</>
        
        );
}

export default AptitudePriv;