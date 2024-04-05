// for the chat application ------------------------------------

// const express = require("express");
// const app = express();

// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//     cors: {
//       origin: "*",
//     },
//   });

// io.on("connection", (socket) => {
//   // for getting the message
//   socket.on("chat", async (payload) => {
//     console.log(payload);

//     // message storing a file

//     const dataVal = await fs.readFile("./mesgjson/mesg.json", "utf-8");
//     const data = dataVal ? JSON.parse(dataVal) : [];
//     data.push(payload);
//     await fs.writeFile("./mesgjson,mesg.json", JSON.stringify(data));

//     // sending the message to the destination
//     if (payload.message.trim() !== "") {
//       const { destination, message } = payload;
//       //emit the message to the destination ID
//       io.to(destination).emit("receive-message", {
//         id: socket.id,
//         username: "sever",
//         message,
//       });
//     }
//   });
// });

// // end of chat application -------------------------------------

// module.exports = server

const chatModel = require("../model/chatModel");
const router = require("express").Router();
const fs = require("fs").promises;

router.post("/save-chat-user", async (req, res) => {
  try {
    const id = req.body.id1;
    const existingChat = await chatModel.findOne({ id: id });
    if (!existingChat) {
      const newData = new chatModel({
        id: id,
        name: req.body.name,
        chat: [{ mesguser: req.body.mesg }]
      });
      await newData.save();
      return res.status(200).send({
        message: "Data saved when user is absent",
        success: true
      });
    }
    // If chat data already exists, update it by pushing the new message
    existingChat.chat.push({ mesguser: req.body.mesg });
    await existingChat.save();
    return res.status(200).send({
      message: "Data updated when user is present",
      success: true
    });
  } catch (error) {
    console.error("Error saving chat:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
router.post("/save-chat-admin", async (req, res) => {
  try {
    const id = req.body.id;
    const existingChat = await chatModel.findOne({ id: id });
    existingChat.chat.push({ mesgadmin: req.body.message });
    await existingChat.save();
    return res.status(200).send({
      message: "Data updated when user is present",
      success: true
    });
  } catch (error) {
    console.error("Error saving chat:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
router.get("/get-chat-admin", async (req, res) => {
  try {
    const data = await chatModel.find();
    return res.status(200).send({
      message: "Message fetch succesfully",
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Error fetching chat:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});
router.get("/get-chat-id-admin", async (req, res) => {
  try {
    const id = req.query.id;
    const data = await chatModel.findOne({id:id});
    if(!data)
    {
      return;
    }
    return res.status(200).send({
      message: "Data send succesfully",
      success: true,
      data: data.chat,
    });
  } catch (error) {
    res.status(500).json({ success: false, error:error.message });
  }
});
router.post("/get-chat-user", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    const data = await chatModel.findOne({ id: id });
    if (!data) {
      return;
    }
    res.status(200).send({
      message: "Data send succesfully",
      success: true,
      data: data.chat,
    });
  } catch (error) {
    console.error("Error fetching chat:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
