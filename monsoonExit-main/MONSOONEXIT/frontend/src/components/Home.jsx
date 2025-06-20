import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/get").then((res) => setPosts(res.data));
    return () => setPosts([]);
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this post?")) {
      try {
        const res = await axios.delete(`http://localhost:3001/delete/${id}`);
        console.log("Delete response:", res);
        setPosts(posts.filter((post) => post._id !== id));
      } catch (err) {
        console.error("Delete error:", err);
        alert("Failed to delete post.");
      }
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:3001/update/${id}`, updatedData);
      setPosts(posts.map((post) => (post._id === id ? { ...post, ...updatedData } : post)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ p: 4, background: '#fff', minHeight: '100vh' }}>
      <Grid container spacing={4} justifyContent="flex-start">
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 320, maxWidth: 350, boxShadow: 2, borderRadius: 2, background: '#fff' }}>
              <CardMedia
                component="img"
                height="160"
                image={post.img_url}
                alt={post.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle2" color="#9c27b0" sx={{ mb: 0.5 }}>
                  {post.title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: '#222' }}>
                  {post.content}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#9c27b0", mr: 1, minWidth: 80, boxShadow: 1 }}
                  onClick={() => handleDelete(post._id)}
                  title="Delete this post"
                >
                  DELETE
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#9c27b0", minWidth: 80, boxShadow: 1 }}
                  onClick={() => navigate("/add", { state: { post } })}
                  title="Update this post"
                >
                  UPDATE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;