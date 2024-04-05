import React, { useState,useEffect } from 'react'
import Afterloginusernav from '../navbar/Afterloginusernav'
import axios from "axios"

const Chatuser = () => {
    const [data, setData] = useState([]);
    const [mesg, setMesg] = useState("");
    const [id1,setId] = useState(0)
    const [name,setName] = useState("")
    const sendMesg = async (event) => {
        event.preventDefault()
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const response = await axios.post(
            "http://localhost:7000/api/chat/save-chat-user",
            { mesg, id1,name },
            config
          );
          getChat(id1);
          setMesg("");
        } catch (error) {
          console.log("Error from the save chat admin" + error);
        }
      };
      const getChat = async (id) => {
        try {
          const response = await axios.post(
            "http://localhost:7000/api/chat/get-chat-user",{id}
          );
          setData(response.data.data)
          console.log(response.data)
        } catch (error) {
          console.log("Error from the admin get chat data " + error);
        }
      };
      useEffect(() => {
        const id =localStorage.getItem("id");
        const name = localStorage.getItem("name")
        setName(name)
        setId(id)
        getChat(id);
      }, []);
      
  return (
    <div>
        <Afterloginusernav/>
        <div style={{marginTop:"10rem"}}>
        <div style={{ marginTop: "11rem", maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            marginTop: "10rem", 
            maxHeight: "70vh",
            overflowY: "scroll",
            padding: "1rem",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          }}
        >
          {data &&
            data.map((val, ind) => {
              return (
                <div
                  key={ind}
                  style={{
                    textAlign: val.mesgadmin ? "left" : "right",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      padding: "0.5rem",
                      borderRadius: "8px",
                      backgroundColor: val.mesgadmin ? "#ff9800" : "#2196f3",
                      color: "white",
                      display: "inline-block",
                      maxWidth: "70%",
                      fontSize: "12px",
                    }}
                  >
                    {val.mesguser ?  `Me: ${val.mesguser}` : `Admin: ${val.mesgadmin}`}
                  </span>
                </div>
              );
            })}
        </div>
        <div style={{ marginTop: "1rem" }}>
          <form
            onSubmit={sendMesg}
            style={{ display: "flex", padding: "2rem" }}
          >
            <div style={{ display: "flex" }}>
              <input
                type="text"
                onChange={(e) => setMesg(e.target.value)}
                value={mesg}
                style={{
                  flex: "1",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  marginRight: "0.5rem",
                  width: "75%",
                }}
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem",
                  borderRadius: "8px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  width: "25%",
                  fontSize: "2rem",
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

        </div>
      
    </div>
  )
}

export default Chatuser
