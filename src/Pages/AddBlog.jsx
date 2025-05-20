import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function AddBlog ()  {
    const [blog, setBlog] = useState ({
        name: '',
        description: '',
        author: '',
      });
    
      const handleChange = (e) => {
        setBlog({
          ...blog,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Blog Submitted (not saved): ' + JSON.stringify(blog));
      };


    return ( 


        <Box sx={{ minWidth: 400, maxWidth: 600, mx: 'auto', mt: 6 }}>
      <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Add New Blog
          </Typography >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField
              name="name"
              label="Blog Title"
              variant="outlined"
              value={blog.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={blog.description}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="author"
              label="Author Name"
              variant="outlined"
              value={blog.author}
              onChange={handleChange}
              required
              fullWidth
            />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button >
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>

  )
}

export default AddBlog