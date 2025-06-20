import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editPost = location.state?.post || null;
  var [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  useEffect(() => {
    if (editPost) {
      setInputs({
        title: editPost.title,
        content: editPost.content,
        img_url: editPost.img_url,
      });
    }
  }, [editPost]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPost) {
      // Update existing post
      axios
        .put(`http://localhost:3001/update/${editPost._id}`, inputs)
        .then((res) => {
          console.log("Response from backend:", res);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log("Error from backend:", err);
        });
    } else {
      // Add new post
      axios
        .post("http://localhost:3001/add", inputs)
        .then((res) => {
          console.log("Response from backend:", res);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log("Error from backend:", err);
        });
    }
  };

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={inputHandler}
              name="title"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="content"
              onChange={inputHandler}
              name="content"
              value={inputs.content}
              multiline={4}
            />
            <TextField
              variant="outlined"
              placeholder="image url"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />
            <Button variant="contained" color="secondary" type="submit">
              {editPost ? "Update" : "Submit"}
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
