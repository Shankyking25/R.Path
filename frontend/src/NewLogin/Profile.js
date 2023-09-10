import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'

const Profile = (props)=>{
    const [userdata,setUserData] = useState({
        name:"loading",
        picture: "",
        email:""
    })
    useEffect(()=>{
        if(props.user){
            setUserData({
           name:props.user.username,
                picture: props.user.picture,
                email: props.user.email,
       })
        }
       
    },[])
    if(!props.user){
        props.history.push('/home')
    }
    return (
         <div>
            <h1>here is your profile </h1>
            <div className="card" style={{margin:"10%",padding:"10px",textAlign:"center"}}>
               <h2>{userdata.name}</h2>
                <img className="circle" src={userdata.picture} alt="" />  
                <h3>{userdata.email}</h3>
            </div>
           
         </div>
    )
}

const mapStateToProps = (state)=>{
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Profile);