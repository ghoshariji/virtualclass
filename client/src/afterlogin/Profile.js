import React,{useEffect, useState} from 'react'
import Afterloginusernav from '../navbar/Afterloginusernav'
import Foot from "../footer/Foot";
import axios from "axios"
const Profile = () => {
    const [profilePic, setProfilePic] = useState('');
    const [email,setEmail] = useState("")
    const fetchImg = async() =>{
        const email = localStorage.getItem("email")
        console.log(email)
        setEmail(email)
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const res = await axios.post("http://localhost:7000/api/user/get-img",{email},config);
            console.log(res.data.data.image)
            setProfilePic("http://localhost:7000/" + res.data.data.image)
        } catch (error) {
            console.log("Error " + error)
        }
    }
    useEffect(()=>{
        fetchImg()
    },[])

    const editprofile = async() =>{
        try {
            const input = document.createElement('input');
            input.type = "file"
            input.onchange = async () => {
                const file = input.files[0];
                console.log(file)
                const formData = new FormData();
                formData.append("file", file);
                formData.append("email", email);
                const response = await axios.post("http://localhost:7000/api/user/profile-pic-upload",formData)
                console.log(response.data)
                console.log(response.data.image)
                setProfilePic("http://localhost:7000/" + response.data.image);
            }
            input.click()
        } catch (error) {
            console.log("Error" + error)
        }
    }
  return (
    <div>

        <Afterloginusernav/>
        <div style={{height:'50%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{marginTop:'10rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'50%',width:'50%'}}>
            <img src={profilePic} alt="" />
            <button onClick={editprofile}>Edit Profile Picture</button>
        </div>
        </div>
        <Foot/>
      
    </div>
  )
}

export default Profile
