import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Stack } from "@mui/system";
import { Fragment, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';



export function SubHeader() {
  const mobile = useMediaQuery('(min-width:600px)');

  

  let activeStyle = {
    lineHeight: "1em",
   
    display: "inline-block",
    color: "#26F8FF",
    textDecoration: "none",
    borderBottom:'2px solid #26F8FF',

    padding: 0,
      };

      let initialStyle = {
        lineHeight: "1em",
         display: "inline-block",
        color: "#26F8FF",
        textDecoration: "none",
       
        
        padding: 0,
          };
  
    return (
       

 
  <>

  {mobile == true?(

<MKBox
       
pl={{ base: '2px', md: '10px', lg: '135px' }}
pr={{ base: '2px', md: '10px', lg: '135px' }} 
bgColor="black"
width={"100%"}

left={0}
zIndex={3}

>
<MKBox display="flex" justifyContent="space-between" alignItems="center">

  <Stack direction={"row"} spacing={7}>

<NavLink  to={`/summary/`}   style={({ isActive }) =>
        isActive ? activeStyle : initialStyle
      }>
          
<MKTypography variant="button"  color="white" sx={{ textAlign:'center',marginLeft:'5px',marginRight:'5px' }}>
   Summary
  </MKTypography>
  
            </NavLink>





<NavLink to={`/inventory/`}   style={({ isActive }) =>
        isActive ? activeStyle : initialStyle
      }>
     
<MKTypography  variant="button"  color="white" sx={{ textAlign:'center',marginLeft:'5px',marginRight:'5px' }}>
     Inventory
  </MKTypography>
 
            </NavLink>
      

            



<NavLink to={`/account/`}   style={({ isActive }) =>
        isActive ? activeStyle : initialStyle
      }>
       
<MKTypography  variant="button"  color="white" sx={{ textAlign:'center',marginLeft:'5px',marginRight:'5px' }}> Account Setting </MKTypography>
 
            </NavLink>


            <NavLink to={`/uploadFile/`}   style={({ isActive }) =>
        isActive ? activeStyle : initialStyle
      }>
       
<MKTypography  variant="button"  color="white" sx={{ textAlign:'center',marginLeft:'5px',marginRight:'5px' }}> Upload/Mint 3D File </MKTypography>
 
            </NavLink>

            

                





        

  </Stack>
   


</MKBox>

</MKBox>

  ):(

    <>
    
    </>
  )}
    


</>
    );
}
