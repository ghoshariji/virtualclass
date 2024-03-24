// // for the chat application ------------------------------------
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