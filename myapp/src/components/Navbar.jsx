import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h4>newpage</h4> &nbsp;
                <Link to="/login">
            <Button variant="contained" color='secondary'>Login
            </Button> &nbsp;
            </Link>
            <Link to="/Signup">
            <Button variant="contained" color='secondary'>
                Signup
            </Button> </Link>&nbsp;
            <Link to="/Name">
            <Button variant="contained" color='secondary'>
                Name </Button>
            </Link>&nbsp;
            <Link to="/counter">
            <Button variant="contained" color='secondary'>Counter
            </Button> &nbsp;
            </Link>
         </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar