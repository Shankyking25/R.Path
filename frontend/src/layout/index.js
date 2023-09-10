import { Fragment, useState, useEffect } from "react";
import MKBox from "components/MKBox";
import { Header } from "./header";
import HeaderBanner from "./headerBanner";
import { useNavigate , useLocation } from 'react-router-dom';
import { SubHeader } from "./subHeader";
import { useAccount} from 'wagmi';


let crossAdd = localStorage.getItem("crossmintAddress");



  
export function Layout() {
    const {isConnected } = useAccount();
 
useEffect(()=>{
 
  if(crossAdd !== null){
   console.log(crossAdd);
  }
},[crossAdd])

  




/*
  //////////////////////////////////////////////////////////

  // hide header from dashbord  only
  const location = useLocation();
  const hideHeaderRoutes = ['/dashboard/'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);
*/
  
    
    return (

  <MKBox> 
        <Header />

  {isConnected || crossAdd !== null ?(
    <>
  
             <SubHeader />
            {/*   {!shouldHideHeader && <HeaderBanner/> }  */}
            <HeaderBanner/>
    </>
  ):(
<></>
  )}

  

 </MKBox>
    );
}