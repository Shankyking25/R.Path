
//import Back from "../assets/images/loginBg.jpg";
import MKBox from "components/MKBox";
import Image from "mui-image";
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import {  useState, useEffect } from "react";
import { useDispatch , useSelector} from 'react-redux'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

function Home() {

  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  const currUser = useSelector(state => state.user);


  
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  useEffect(()=>{
    if(isConnected){
    getLink();
     
    }
  },[address])


   const getLink = async()=>{
    const response = await axios.get(`https://mint.infinityvoid.io/gameApi/gameUser/byWallet/${address.toLowerCase()}`);
    
    if(response.data.walletAddress == address.toLowerCase()){
      navigate("/summary/");
    }else{
      navigate("/account/");
    }

    
}


  return (
    <>       
    
    {!isConnected ?(
  <MKBox sx={{

   // backgroundImage: `url(${Back})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
    display: "grid",
    placedItems:"center",
    padding:"0px"
    
    }} >
    
    
          <Image
          //  src={Back}
            height="92vh"></Image>
    
    
      
      </MKBox>
    ):(
<></>
    )
    
  }

   
    </>
  );
}

export default Home;
