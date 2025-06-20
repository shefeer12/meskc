const express = require("express");
const cors = require("cors");
require("./connection");
const BlogModel = require("./model");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

// Add POST API to add a new blog post
app.post("/add", async (req, res) => {
  try {
    const newPost = new BlogModel(req.body);
    await newPost.save();
    res.json({ message: "Blog post added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add post", error });
  }
});

// Add DELETE API to delete a blog post by id
app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog post deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
});

// Add PUT API to update a blog post by id
app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Blog post updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
