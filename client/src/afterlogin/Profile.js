import React, { useEffect, useState } from 'react';
import Afterloginusernav from '../navbar/Afterloginusernav';
import Foot from '../footer/Foot';
import axios from 'axios';
import '../customcss/profile.css'; // Import the CSS file

const Profile = () => {
  const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const image = localStorage.getItem('image');
    setProfilePic('http://localhost:7000/' + image);
  }, []);

  const editProfile = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('email', email);
        const response = await axios.post(
          'http://localhost:7000/api/user/profile-pic-upload',
          formData
        );
        setProfilePic('http://localhost:7000/' + response.data.image);
      };
      input.click();
    } catch (error) {
      console.log('Error' + error);
    }
  };

  return (
    <>
    <div className="profile-container">
      <Afterloginusernav />
      <div className="profile-content">
        <div>
          <input type="text" placeholder="Edit name" />
        </div>
        <div className="profile-picture-container">
          <img src={profilePic} alt="" className="profile-pic" />
          <button onClick={editProfile} className="edit-profile-button">
            Edit Profile Picture
          </button>
        </div>
      </div>

    </div>
    <Foot />
    </>
  );
};

export default Profile;
