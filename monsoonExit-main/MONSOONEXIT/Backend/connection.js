const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mdsfrkk786:Ufg8jIdPWmZ1blml@cluster0.3ep4yzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
