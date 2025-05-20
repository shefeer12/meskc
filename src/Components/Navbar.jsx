import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
 
     const Navbar = () => {
            return (
              
                <Toolbar>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Blog App
                  </Typography>
                  <Button color="inherit" component={Link } to="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link } to="/add">
                    Add Blog
                  </Button>
                </Toolbar>
              
            );
          };
          
          export default Navbar
