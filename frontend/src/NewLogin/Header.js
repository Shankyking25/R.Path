import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import MKButton from "components/MKButton";


const Header = (props)=>{
   const rederContect = ()=>{
       switch(props.user){
           case null:
               return <li><a href="/home">loading</a></li>
           case false:  
               return  <li><a href="/auth/google">signup</a></li> 
           default:
                return(
                    <React.Fragment>
                        <div  style={{display:"flex",justifyContent: 'flex-end' }}>  
                            <div  style={{paddingRight:"15px"}}>
                                  <li><MKButton><Link to="/profile">profile</Link></MKButton></li>
                            </div>
                              
                            <div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <li> <MKButton> <a href="/api/logout" >logout</a>  </MKButton>  </li>
                            </div>
                        </div> 
                      
                    </React.Fragment>
                )    
       }
   }

    return (
         <nav style={{border:"2px solid white", width:"100%", }}>
            <div  style={{display:"flex"}} >
                <div>
                    <Link to={props.user ? '/profile' : '/'} className="brand-logo">CNQ</Link>
                </div>
           
                <div >
                    <ul id="nav-mobile" className="right"  style={{ justifyContent: 'flex-end' }} >
                         {rederContect()}
                    </ul>
                </div>   

            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return {
        user:state.auth
    }
}


export default connect(mapStateToProps)(Header);