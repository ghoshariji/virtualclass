const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: "*", // Update with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 4000;
const userRoute = require("./routes/userRoute");
const moduleRoute = require("./routes/moduleRoute");

// database connection
const databaseConnection = require("./connection/conn");



app.use("/api/user",userRoute);
app.use("/api/module",moduleRoute);

app.get("/",(req,res)=>{
    res.send("Hello from the server side")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})