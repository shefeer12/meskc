import { Box,Button,Card, CardActions, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import react, { useEffect, useState } from "react";

function Home() {
  // State to store posts data
  const [posts, setPosts] = useState ([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 12)); // Take only first 12 posts
        setLoading(false); // Data fetched, stop loading spinner
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false); // Even if error, stop spinner
      });
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        New Blog
      </Typography>

      {/* Show loading spinner while fetching */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        // Display posts in a responsive grid
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card variant="outlined" sx={{ borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent >
                <CardActions >
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Home;
