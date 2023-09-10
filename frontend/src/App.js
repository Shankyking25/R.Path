
import { Provider } from 'react-redux';
import { Routes, Route, useLocation} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/home";
import theme from "assets/theme"


import { Layout } from "layout";

import store from './store'

import React, { useEffect, useState } from 'react';

import UserForm from "./NewLogin/userForm"
import Register from "./pages/RegisterPage/Register"
import Login from "./pages/LoginPage/Login"
import Logout from "./pages/LoginPage/Logout"
import Header from './pages/Header';

import HomePage from "./pages/HomePage/HomePage"

import Navbar from "./pages/MyNavbar/Navbars"

import Rough from "./pages/HomePage/RoughTest"
import  CardPage1Gov from "./pages/CardPages/GovermentPage1"
import LogicalReasoning from "./pages/CardPages/LogicalReasoning"
import TeachingGovJob from "./pages/TeachingCard/AptitudeGov"
import TeachingPrivJob from "./pages/TeachingCard/AptitudePriv"
import TeachingSpokenEng from "./pages/TeachingCard/SpokenEnglish"
import TeachingCodingLang from "./pages/TeachingCard/CodingLanguage"
import TeachingCompanyInterview from "./pages/TeachingCard/CompanyInterview"


import HalfGirlFriend from "./pages/Novels/HalfGirlFriend"
import NeverGiveUp from "./pages/Novels/NeverGiveUp"
import TimeImportance from "./pages/Novels/TimeImportance"
import TurningPoint from "./pages/Novels/TurningPoint"
import WingsOfFire from "./pages/Novels/WingsOfFire"
import HardWork from "./pages/Novels/HardWork"

function App() {




  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);




  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });


 console.log(res.status)

      
      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }

      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }

      if (res.status === 404) {
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);







  return (  

   


    <Provider store={store}>
      
    
     
  
    
      {/*  <ThemeProvider theme={theme}>
 */}
        <CssBaseline />
 
      


        <Navbar   auth={auth1}/>


        <Routes>
     
        
        <Route path="/" element={<HomePage/>} />
     
        <Route path="/register" element={<Register />}   auth={auth1}   />
        
        <Route path="/login" element={<Login/>}  auth={auth1} />
            
        <Route path="/logout" element={<Logout/>}  auth={auth} />
            
        
      
        <Route path="/rough" element={<Rough />} />    
        <Route path="/card1Gov" element={<CardPage1Gov/>} />   
        <Route path="/logicalReasoning"   element={<LogicalReasoning/>}  />       
        <Route path="/teachingGovJob" element={<TeachingGovJob/>} />
        <Route path="/teachingPrivJob" element={<TeachingPrivJob/>} />
        <Route path="/teachingSpokenEng" element={<TeachingSpokenEng/>} />
        <Route path="/teachingCodingLang" element={<TeachingCodingLang/>} />
        <Route path="/teachingCompanyInterview" element={<TeachingCompanyInterview/>} />
        


        <Route path="/halfGirlFriend" element={<HalfGirlFriend/>} />
        <Route path="/neverGiveUp" element={<NeverGiveUp/>} />
        <Route path="/timeImportance" element={<TimeImportance/>} />
        <Route path="/turningPoint" element={<TurningPoint/>} />
        <Route path="/wingsOfFire" element={<WingsOfFire/>} />
        <Route path="/hardWork" element={<HardWork/>} />
       


      </Routes>
     
      {/*   </ThemeProvider>
   */}
    </Provider>
 
  )
}





export default App;