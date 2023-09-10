import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';

const Logout = (props) => {
   
   
    const handleLogout = async () => {
        try {
          // Send a POST request to the logout endpoint on the server
          const res =   await axios.post('http://localhost:3000/logout');
    
             // Clear any client-side authentication token or session
            // For example, remove the token from local storage or cookies
              localStorage.removeItem('token');
    
            
            if (res.status === 401 || !res) {
                window.alert("Please Logout Later");
            } else {
            
                // Perform any additional actions after successful logout
                // For example, redirect the user to the login page
                window.location.href = '/login';
               }
            
            } catch (error) {
              console.error(error);
              // Handle logout error
            }


        


      };
        return (
        <div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Logout