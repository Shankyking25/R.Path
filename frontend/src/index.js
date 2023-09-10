import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import App from "./App";

import { GoogleOAuthProvider } from '@react-oauth/google';







ReactDOM.render(
  <BrowserRouter>

      

      {/*  <Auth0Provider
    domain="dev-lineelvmwbfu42tn.us.auth0.com"
    clientId="TYYEaFbN6YVG6W2OcFJO9eMjvameO150"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
      >
        
  */}
      
      <GoogleOAuthProvider clientId="68400351761-4lisal0qmm035rij1snuads8uui78br8.apps.googleusercontent.com">
       
        
      <App />
     
        
      </GoogleOAuthProvider>

      {/* </Auth0Provider>  */}
    
    
 
       

  </BrowserRouter>,
  document.getElementById("root")
);