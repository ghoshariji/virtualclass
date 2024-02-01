const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;
const userRoute = require("./routes/userRoute");

// database connection
const databaseConnection = require("./connection/conn");
databaseConnection();


app.use("/api/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello from the server side")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})