import {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAccount, useConnect, useDisconnect,useProvider, useEnsName, useSigner } from 'wagmi';
import { Alchemy, Network, Utils} from "alchemy-sdk";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Image from 'mui-image'
import { Stack } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';
// import logoImage from "../assets/images/logoicon.webp"
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch , useSelector} from 'react-redux'
import TYPES from "../redux/types"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import {
  BlockchainTypes,
  CrossmintEnvironment,
  CrossmintEVMWalletAdapter,
} from "@crossmint/connect";

import { NavLink } from "react-router-dom";

const socketUrl = 'wss://websocket.infinityvoid.io/';
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

export function Header() {


  
  const mobile = useMediaQuery('(min-width:600px)');

    const { address, isConnected } = useAccount();
    const { data: signer, isError } = useSigner()
    

    const { data: ensName } = useEnsName({ address });
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();
    const [finityBalance, setFinityBalance] = useState();
    const [ethBalance, setEthBalance] = useState();
    const [showWalletModal, setShowWalletModal] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const inventorydata = useSelector(state => state.masterInventory);
    const currUser = useSelector(state => state.user);
    const [mobileOpen, setMobileOpen] = useState(false);
  
   

    async function connectToCrossmint() {
      // Initialize the Crossmint connect.
      const _crossmintConnect = new CrossmintEVMWalletAdapter({
        apiKey: "wIzJj4UJarYkJl2-3z5124HzoMHoRQtT",
        chain: BlockchainTypes.ETHEREUM, // BlockchainTypes.ETHEREUM || BlockchainTypes.POLYGON. For solana use BlockchainTypes.SOLANA
      });
  
      // Ask the user to sign in and give access to their publicKey
      const address = await _crossmintConnect.connect();

    }


    useEffect(()=>{
     
      setMobileOpen(false);
    },[window.location.href]);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };


       const {
      sendMessage,
      sendJsonMessage,
      lastMessage,
      lastJsonMessage,
      readyState,
      getWebSocket,
    } = useWebSocket(socketUrl, {
      onOpen: () => console.log('opened'),
      //Will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: (closeEvent) => true,
    });
  
    const connectionStatus = {
      [ReadyState.CONNECTING]: 'Connecting',
      [ReadyState.OPEN]: 'Open',
      [ReadyState.CLOSING]: 'Closing',
      [ReadyState.CLOSED]: 'Closed',
      [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    

  useEffect(()=>{

  
     var a = window.location.search;
     var b = a.split("?");
     if(b.length>1){
      if(isConnected){
        var addressNew = address.toString().toLowerCase();
      var message = {event:"suscription", message:"wallet Connected Done", walletAddress:addressNew, type:"walletConnect", user:b[1]};
var newMessage = JSON.stringify(message);
  console.log(newMessage);
        sendMessage(newMessage);
        

        console.log("--------------------");
        console.log(address);

      }
     }

},[address, isConnected, sendMessage]);



  



console.log("|||||||||||||||||")
console.log(address)



  
    //function to be called when the connection button is pressed, input data is the connector chosen
    function connection(connector){
        connect({connector});
        setShowWalletModal(false);
        redirectLink();
    }


    const redirectLink = async()=>{
        
    }

    useEffect(()=>{
      if(isConnected){
    
        getETHbalance();
        getFinitybalance();
           
       dispatch({ type: TYPES.GET_USER_BY_WALLET_ADDRESS, walletAddress:address.toLowerCase() })
       dispatch({ type: TYPES.GET_INVENTORY,walletAddress:address.toLowerCase() })
       dispatch({ type: TYPES.GET_BUILDER_SCENES,walletAddress:address.toLowerCase() })
       dispatch({ type: TYPES.GET_ENS,walletAddress:address.toLowerCase() })

       }else{
        //navigate("/");
       }
    },[address, dispatch, isConnected])





    const signOut = () =>{
     
    disconnect();
    window.location.reload(false);
   
    
    }

    const getETHbalance = async() =>{
    const config = {
          apiKey: process.env.REACT_APP_ALCHEMY_APP_API_KEY, network: Network.ETH_MAINNET,
        };
        const alchemy = new Alchemy(config);
      
      let Ethbalance = await alchemy.core.getBalance(address, 'latest');
      
      Ethbalance = Utils.formatEther(Ethbalance);
      
      Ethbalance = (+Ethbalance).toFixed(2);
      console.log(Ethbalance);
      
      setEthBalance(Ethbalance+ ' ETH');
      
      }
      
      
      const getFinitybalance = async() =>{
        
        const config = {
          apiKey: process.env.REACT_APP_ALCHEMY_APP_API_KEY, network: Network.MATIC_MAINNET,
        };
        const alchemy = new Alchemy(config);
      
      
         const contractAddress = "0x469D2bfAE347bD15FFa580F6a6E3aE623d38da41";
         const numDecimals = 18;
      
         // Get latest Finity balance
         let Finitybalance = await alchemy.core.getTokenBalances(address, [contractAddress])
         Finitybalance = Finitybalance['tokenBalances'][0]['tokenBalance'];

console.log(Finitybalance );

         Finitybalance = (parseInt(Finitybalance) / 10 ** numDecimals).toFixed(2);

console.log(Finitybalance );

         setFinityBalance(Finitybalance+' FIN');
      
      }


const connectWallet=()=>{
setShowWalletModal(true);
}



const closeWalletModal =()=>{
setShowWalletModal(false);
}
    
    return (
       

 
  <>

  {mobile == true?(

<>
<MKBox
 
pl={{ base: '2px', md: '10px', lg: '135px' }}
 pr={{ base: '2px', md: '10px', lg: '135px' }} 
bgColor="black"
width={"100%"}

left={0}
zIndex={3}

>
<MKBox display="flex" justifyContent="space-between" alignItems="center">
  <MKBox
    component={Link}
    to="/"
    lineHeight={1}
  
  > 
  <Stack direction={"row"} spacing={1}>
                    <Image
                    //  src={logoImage}
                      alt='Infinity Void' width="40px" />
  <MKTypography variant="logoFont">
     InfinityVoid
    </MKTypography>
  </Stack>
   
  </MKBox>
  <MKBox
    color="inherit"
    display={{ xs: "none", lg: "flex" }}
    ml="auto"
  >

  </MKBox>
  <MKBox ml={{ xs: "auto", lg: 0 }}>
  {!isConnected ? (
      <MKBox p={4}>
      {/*<MKButton size ="small" color="primary" onClick={connectWallet} >
        Connect Wallet
        </MKButton>*/}
      </MKBox>
   
  ) : (
     <Stack direction="row" spacing={2} > 
     <MKBox pt={2}> <MKTypography variant="body2">{finityBalance}</MKTypography></MKBox>
     <MKBox pt={2}> <MKTypography variant="body2">{ethBalance}</MKTypography></MKBox>
     <MKBox>  
      <IconButton size ="large" color="primary" onClick={signOut} >
        <ExitToAppIcon/>
     </IconButton>
     </MKBox>
    </Stack>
   )}

      
      
  </MKBox>

</MKBox>

</MKBox>
{!isConnected ? (

<div style={{zIndex:'2',position:'absolute', left:'50%', top:'25%', transform: 'translateX(-50%)'}}>
<MKBox >

<MKBox sx={{backgroundColor: "#0A0519"}}
p={3.5}
position="relative"
width="360px"
display="flex"
flexDirection="column"
borderRadius="xl"
shadow="xl"

border="1px solid #1AADB2"
>
     <MKBox >

    
      <Stack >
      <MKTypography color="primary" style={{textAlign:'center'}}>Sign In</MKTypography>

      <MKTypography color="white" variant="body2" style={{textAlign:'center',fontSize:'14px'}}>Choose how you want to connect with network.</MKTypography>

      </Stack>
    </MKBox>


   
   
    {connectors.map((connector) => (
          <>


<MKBox  
mt={2}
mb={2}
p={2}
width="300px"
borderRadius="xl"
shadow="xl"
bgColor="walletBox"
sx={{ display: 'flex-row', backgroundColor:'#343a40',     
'&:hover': {
backgroundColor: "#0A0519",
opacity: [1.9,1.9, 1.9],
border:"1px solid #1AADB2",
transform: "scale(1.05)"


}, }} 
key={connector.id}
onClick={() => connection(connector)}>
<Stack direction={'row'} spacing={2}>
<MKBox width='40px'>
<Image src={connector.options.imageIcon} />
</MKBox>
<MKBox >
<Stack >
                   <MKTypography color="white" variant="footerTextCopy" style={{textAlign:'left'}}>{connector.options.appName}</MKTypography> 
                   <MKTypography color="white" variant="caption" style={{textAlign:'left'}}> {connector.options.appSub}</MKTypography>
                   </Stack>
  </MKBox>
  </Stack>
</MKBox>
       </>
      ))}

      {error &&   <MKTypography color="white" variant="body2" style={{textAlign:'center'}}>{error.message}</MKTypography>}




</MKBox>
</MKBox>
</div>
):(<></>)}
</>
    
  ):(

<>
<MKBox
 
pl={{ base: '2px', md: '10px', lg: '135px' }}
 pr={{ base: '2px', md: '10px', lg: '135px' }} 
bgColor="black"
width={"100%"}

left={0}
zIndex={3}

>
<MKBox display="flex" justifyContent="space-between" alignItems="center">
  <MKBox
    component={Link}
    to="/"
    lineHeight={1}
  
  > 
  <Stack direction={"row"} spacing={1}>
                      <Image
                        //src={logoImage}
                        alt='Infinity Void' width="40px" />
  <MKTypography variant="logoFont">
     InfinityVoid
    </MKTypography>
  </Stack>
   
  </MKBox>

  {!isConnected ? (
      <MKBox p={4}>
    
    <div style={{zIndex:'2',position:'absolute', left:'50%', top:'15%', transform: 'translateX(-50%)'}}>
<MKBox >

<MKBox sx={{backgroundColor: "#0A0519"}}
p={3.5}
position="relative"
width="360px"
display="flex"
flexDirection="column"
borderRadius="xl"
shadow="xl"

border="1px solid #1AADB2"
>
     <MKBox >

    
      <Stack >
      <MKTypography color="primary" style={{textAlign:'center'}}>Sign In</MKTypography>

      <MKTypography color="white" variant="body2" style={{textAlign:'center',fontSize:'14px'}}>Choose how you want to connect with network.</MKTypography>

      </Stack>
    </MKBox>


   
   
      {connectors.map((connector) => (
          <>


<MKBox  
mt={2}
mb={2}
p={2}
width="300px"
borderRadius="xl"
shadow="xl"
bgColor="walletBox"
sx={{ display: 'flex-row', backgroundColor:'#343a40',     
'&:hover': {
backgroundColor: "#0A0519",
opacity: [1.9,1.9, 1.9],
border:"1px solid #1AADB2",
transform: "scale(1.05)"


}, }} 
key={connector.id}
onClick={() => connection(connector)}>
<Stack direction={'row'} spacing={2}>
<MKBox width='40px'>
<Image src={connector.options.imageIcon} />
</MKBox>
<MKBox >
<Stack >
                   <MKTypography color="white" variant="footerTextCopy" style={{textAlign:'left'}}>{connector.options.appName}</MKTypography> 
                   <MKTypography color="white" variant="caption" style={{textAlign:'left'}}> {connector.options.appSub}</MKTypography>
                   </Stack>
  </MKBox>
  </Stack>
</MKBox>
       </>
      ))}

      {error &&   <MKTypography color="white" variant="body2" style={{textAlign:'center'}}>{error.message}</MKTypography>}


</MKBox>
</MKBox>
</div>

      </MKBox>
   
  ) : (
    <>
    <MKBox>
  <MKBox
    color="inherit"
    display={{ xs: "none", lg: "flex" }}
    ml="auto"
  >

  </MKBox>
 
  <IconButton size ="large" color="primary" onClick={()=>handleDrawerToggle()} >
        <MenuIcon/>
     </IconButton>
     </MKBox>
  <Drawer  
            anchor={"top"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
           
            
           
          >
            <MKBox style={{backgroundColor:"#0A0519", height:'100vh'}} >
        
        <MKBox display="flex" justifyContent="space-between" alignItems="center" >
  <MKBox
    component={Link}
    to="/"
    lineHeight={1}
  
  > 
  <Stack direction={"row"} spacing={1}>
                                  <Image
                                    //  src={logoImage} 
                                    alt='Infinity Void' width="40px" />
  <MKTypography variant="logoFont">
     InfinityVoid
    </MKTypography>
  </Stack>
   
  </MKBox>
  <MKBox
    color="inherit"
    display={{ xs: "none", lg: "flex" }}
    ml="auto"
  >

  </MKBox>
 
  <IconButton size ="large" color="primary" onClick={()=>handleDrawerToggle()} >
        <MenuIcon/>
     </IconButton>
     </MKBox>


     <MKBox mt="25%" mb="25%">

<Stack spacing={5} style={{textAlign:'center'}}>

<NavLink  to={`/summary/`}>
        
<MKTypography variant="button"  color="white" sx={{ fontSize:'24px' }}>
 Summary
</MKTypography>

          </NavLink>





<NavLink to={`/inventory/`}>
   
<MKTypography  variant="button"  color="white" sx={{ fontSize:'24px' }}>
   Inventory
</MKTypography>

          </NavLink>
    

          



<NavLink to={`/account/`} >
     
<MKTypography  variant="button"  color="white" sx={{ fontSize:'24px' }}> Account Setting </MKTypography>

          </NavLink>


          <NavLink to={`/uploadFile/`} >
     
<MKTypography  variant="button"  color="white" sx={{ fontSize:'24px' }}> Upload/Mint 3D File </MKTypography>

          </NavLink>

          
         
</Stack>
 


</MKBox>
<MKBox display="flex" justifyContent="space-between" alignItems="center" pl={2} >


   


     <MKBox pt={2}> <MKTypography variant="body2" sx={{ fontSize:'24px' }}>{finityBalance}</MKTypography></MKBox>
     <MKBox pt={2}> <MKTypography variant="body2" sx={{ fontSize:'24px' }}>{ethBalance}</MKTypography></MKBox>
     <MKBox>  
      <IconButton size ="large" color="primary" onClick={signOut} sx={{ fontSize:'36px' }}>
        <ExitToAppIcon/>
     </IconButton>
     </MKBox>
   
    </MKBox>

     </MKBox>
          </Drawer>
          </>)}
  </MKBox>
  </MKBox>
  </>

  )}

</>
    );
}
