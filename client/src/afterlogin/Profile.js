import React, { useEffect, useState } from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import axios from "axios";
import "../customcss/profile.css";


const Profile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const fetchImg = async () => {
    const email = localStorage.getItem("email");
    //  console.log(email);
    setEmail(email);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/get-img`,
        { email },
        config
      );
      // console.log(res.data.data.image)
      setProfilePic(`${process.env.REACT_APP_API_URL}/uploads/` + res.data.data.image);
    } catch (error) {
      //console.log("Error " + error)
    }
  };
  useEffect(() => {
    fetchImg();
  }, []);

  const editprofile = async () => {
    try {
      const input = document.createElement("input");
      input.type = "file";
      input.onchange = async () => {
        const file = input.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("email", email);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/user/profile-pic-upload`,
          formData
        );
        // console.log(response.data)
        // console.log(response.data.image)
        setProfilePic(`${process.env.REACT_APP_API_URL}/` + response.data.image);
      };
      input.click();
    } catch (error) {
      console.log("Error" + error);
    }
  };
  const editUsername = () => {
    try {
    } catch (error) {}
  };

  const editPassword = () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="profile">
      <Afterloginusernav />
      {/* <div className='afterprofile' style={{height:'50%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{marginTop:'10rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'50%',width:'50%'}}>
            <img src={profilePic} alt="" style={{borderRadius:'50%', height:'200px', width:'200px',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'600px'}}/>
            <button onClick={editprofile} style={{marginLeft:'600px' , width:'100px',display:'flex',flexDirection:"row"}}>Edit Profile Picture</button>
            <button onClick={editprofile} style={{marginLeft:'600px', width:'100px',display:'flex',flexDirection:'row'}}>Edit Username</button>
            <button onClick={editprofile} style={{marginLeft:'600px',width:'100px',display:'flex',flexDirection:'row'}}>Edit Password</button>
        </div>
       </div>*/}

      <div className="afterprofile">
        <div>
          <img src={profilePic} alt="" className="imageProfile" />
          <div className="profileButton">
            <button onClick={editprofile}>Edit Profile Picture</button>
            <button onClick={editUsername}>Edit Username</button>
            <button onClick={editPassword}>Edit Password</button>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Profile;
