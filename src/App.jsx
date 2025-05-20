import React from 'react'
import Navbar  from './Components/Navbar'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddBlog from './Pages/AddBlog'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const App = () => {
  return (
    <>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Blog App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Blog
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </Box>
    </>
  );
};

export default App
      



   
