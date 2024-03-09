const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: "*", // Update with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
  app.use(express.json());
app.use(cors(corsOptions));
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4000;
const userRoute = require("./routes/userRoute");
const moduleRoute = require("./routes/moduleRoute");
const contactRoute = require("./routes/contactRoute")
const questionRoute = require("./routes/questionRoute")
const getquestion = require("./routes/getquestion")
const getModule = require("./routes/getModule")

// database connection
const databaseConnection = require("./connection/conn");



app.use("/api/user",userRoute);
app.use("/api/module",moduleRoute);
app.use("/api",contactRoute);
app.use("/api/setquestion",questionRoute)
app.use("/api/getquestion",getquestion)
app.use("/api/module",getModule)

app.get("/",(req,res)=>{
    res.send("Hello from the server side")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})