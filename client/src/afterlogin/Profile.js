import React, { useEffect, useState } from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import axios from "axios";
import "../customcss/profile.css";
import "../customcss/modal.css";
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();
  const fetchImg = async () => {
    const email = localStorage.getItem("email");
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
      setName(res.data.data.name)
      setProfilePic(`${process.env.REACT_APP_API_URL}/` + res.data.data.image);
    } catch (error) {}
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
        const formData = new FormData();
        formData.append("file", file);
        formData.append("email", email);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/user/profile-pic-upload`,
          formData
        );
        setProfilePic(
          `${process.env.REACT_APP_API_URL}/` + response.data.image
        );
      };
      input.click();
    } catch (error) {}
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleUsernameEdit = async () => {
    try {
      if (!name) {
        toast.info("Please Enter name ");
        toggleEditModal();
        return;
      }
      const email = localStorage.getItem("email");
      const data = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/user/edit-name?name=${email}`,
        { name }
      );
      toast.success("Updated successfully");
      fetchImg();
      toggleEditModal();
    } catch (error) {}
  };

  return (
    <div className="profile">
      <Afterloginusernav />
      <ToastContainer/>
      <div className="afterprofile">
        <div>
          <img src={profilePic} alt="" className="imageProfile" />
          <div className="profileButton" style={{display:"flex",flexDirection:'column'}}>
            <div>
            <h2>Name : {name}</h2>
            <h2>Email : {localStorage.getItem("email")}</h2>
            </div>
          <div>
            <button onClick={editprofile}>Edit Profile Picture</button>
            <button onClick={toggleEditModal}>Edit Username</button>
            <button onClick={() => navigate("/enteremail")}>
              Edit Password
            </button>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <div className={`modal ${isEditModalOpen ? "show" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={toggleEditModal}>
              &times;
            </span>
            <h2>Edit Username</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new username"
            />
            <button onClick={handleUsernameEdit}>Save</button>
          </div>
        </div>
      )}
      <Foot />
    </div>
  );
};

export default Profile;
