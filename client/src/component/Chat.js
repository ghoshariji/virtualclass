// import React, { useEffect, useState } from "react";
// import {io} from "socket.io-client";
// import Afterloginusernav from "../navbar/Afterloginusernav";


// const Chat = () => {

//     const socket = io("http://localhost:7000")

//   const [destination, setDestination] = useState("");
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//   const [socketID, setSocketId] = useState("");

//   const sendChat = (e) => {
//     e.preventDefault();
//     if (!message || !destination) {
//       return;
//     }
//     console.log(message,destination)
//     try {
//           // send the message
//           console.log("Sending chat:", { destination, message });
//     socket.emit("chat", { destination, message });
//     setMessage("");
//     setDestination("");
//     } catch (error) {
//       console.log("error"+ error)
//     }

//   };

//   useEffect(() => {
//     socket.on("connect", () => {
//       setSocketId(socket.id);
//     });
  
//     socket.on("receive-message", (payload) => {
//       setChat((prevChat) => [...prevChat, payload]);
//     });
  
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
// <Afterloginusernav/>

//       <h1>App</h1>
//       <h5>{socketID}</h5>

//       {chat.map((val, ind) => (
//         <p key={ind}>
//           <span>{val.message}</span>
//         </p>
//       ))}

//       <div
//         className="container"
//         style={{ display: "flex", flexDirection: "column", height: "100px" }}
//       ></div>
//       <form action="" onSubmit={sendChat}>
//         <input
//           type="text"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chat



import React, { useEffect } from 'react'
import Afterloginusernav from '../navbar/Afterloginusernav'
import Foot from '../footer/Foot'
import axios from 'axios'
const Chat = () => {
  const param = new URLSearchParams(document.location.search);
  const id = param.get("id")
  console.log(id)
  const fetchChat = async() =>{
    try {
      const response = await axios.get("https://virtualclass-yz7w.onrender.com/api/chat/save-chat-user")
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchChat()
  })
  return (
    <div>
      <Afterloginusernav/>

      <Foot/>
    </div>
  )
}

export default Chat
