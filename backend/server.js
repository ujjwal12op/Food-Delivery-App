const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());


// Basic route
app.use("/",(req,res)=>{
  res.send("Food deleviery API is running!");
});


// Starting the server
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});