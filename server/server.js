const express = require("express");
const app = express();
const cors = require("cors");
const {Server} = require("socket.io");
const http = require("http"); 
const server = http.createServer(app)

const corsOptions = {
  origin: "*", // Update with your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
const dotenv = require("dotenv");
dotenv.config();

// for chat ----
const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000"
  }
})
io.on("connection", (socket) => {
    socket.on("chat", (payload) => {
      console.log(payload);
      // Check if the message is not empty before processing
      if (payload.message.trim() !== "") {
        const { destination, message } = payload;
        // socket.id="dsadasbbasda"
        // Emit the received message to the destination ID
        io.to(destination).emit("receive-message", { id:socket.id, username: "Server", message });
      }
    });
  });
  
const port = process.env.PORT || 4000;
const userRoute = require("./routes/userRoute");
const moduleRoute = require("./routes/moduleRoute");
const contactRoute = require("./routes/contactRoute");
const questionRoute = require("./routes/questionRoute");
const getquestion = require("./routes/getquestion");
const getModule = require("./routes/getModule");
const examRoute = require("./routes/examRoute");
const getExam = require("./routes/getexamRoute");
const deleteExam = require("./routes/delexamRoute");
const instructorRoute = require("./routes/instructorRoute")
const adminRoute = require("./routes/adminRoute")
// const chatRoute = require("./routes/chatRoute");

// database connection
const databaseConnection = require("./connection/conn");

app.use("/api/user", userRoute);
app.use("/api/module", moduleRoute);
app.use("/api", contactRoute);
app.use("/api/setquestion", questionRoute);
app.use("/api/getquestion", getquestion);
app.use("/api/module", getModule);
app.use("/api/exam", examRoute);
app.use("/api/exam", getExam);
app.use("/api/deleteexam", deleteExam);
app.use("/api/instructor", instructorRoute);
app.use("/api/admin", adminRoute);
// app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("Hello from the server side");
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
