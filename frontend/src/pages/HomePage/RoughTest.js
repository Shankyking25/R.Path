import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


//Dark and Light Mode
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Container, Typography, Paper } from '@material-ui/core';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import { Card, CardContent, Slider } from '@mui/material';





const RoughTest = () => {
    /*
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  

///Dark and Light Mode
const [darkMode, setDarkMode] = useState(false);

const theme = createMuiTheme({
  palette: {
    type: darkMode ? 'dark' : 'light',
  },
});

const handleThemeChange = () => {
  setDarkMode(!darkMode);
};
*/
  
  
    return (
      <>
        
        {/*
<div  >
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            

        
        <br />
        <br/>



        <div>

<ThemeProvider theme={theme}>
      <Container maxWidth="sm"  style={{ border:"2px solid red" }}>
        <Paper style={{ padding: '2rem', marginTop: '2rem' , border:"2px solid yellow" }}>
                
                   <Switch checked={darkMode} onChange={handleThemeChange} />
        
              <Typography variant="h5" component="h1">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Typography variant="body1">
            This is an example page with Material-UI dark and light mode.
          </Typography>
         
        </Paper>
      </Container>
    </ThemeProvider>
        </div>
        
        */}




<div style={{ overflowX: 'auto' ,width:"100%", border:"2px solid black" }}>
      <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
        <CardContent>
          {/* Content of the card */}
        </CardContent>
      </Card>
     
          <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 {/* Content of the card */}
              </CardContent>
          </Card>
          
          <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 {/* Content of the card */}
              </CardContent>
          </Card>

          <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 {/* Content of the card */}
              </CardContent>
          </Card>

          <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 {/* Content of the card */}
              </CardContent>
          </Card>


          <Card style={{ display: 'inline-block', minWidth: 300, margin: 10 }}>
              <CardContent>
                 {/* Content of the card */}
              </CardContent>
          </Card>

      {/* Add more cards as needed */}
    </div>

        </>
 )
    
}

export default RoughTest



