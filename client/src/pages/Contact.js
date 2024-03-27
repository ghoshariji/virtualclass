import React, { useState } from "react";
import "../customcss/contact.css";
import img from "./online.png";
import Foot from "../footer/Foot";
import axios from "axios";
import Finalnavbar from "../navbar/Finalnavbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/api/contact",
        formData,
        config
      );
    } catch (error) {
      console.log("error from the contact page" + error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Finalnavbar />

      <div className="container" style={{marginTop:"10rem"}}>
        <div className="row py-5 g-3">
          <div className="col-md-6 order-md-2">
            <img src={img} alt="Online Class" className="img-fluid" />
          </div>

          <div className="col-md-6 order-md-1">
            <h1 className="text-center mt-3">Contact Us</h1>
            <form
              action="submit_form.php"
              method="post"
              className="p-4 mt-5"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Enter your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="phone"
                  placeholder="name@example.com"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">
                  Enter your message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="messageInput"
                  name="address"
                  rows="3"
                  placeholder="Your Message"
                  required
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*  ADDRESS  HERE  */}

      <div className="last_row">
        <div className="row row-cols-1 row-cols-md-3 p-3 text-white">
          <div className="col mb-3">
            <h4>
              <i class="fa-solid fa-location-dot"></i> ADDRESS
            </h4>
            <p>
              {" "}
              <a href="https://www.google.co.in/maps/place/CHITKARA+UNIVERSITY,+BADDI/@30.873125,76.8589281,15z/data=!4m6!3m5!1s0x390ff55d9e0ed113:0x34a6cadf9a13d341!8m2!3d30.8773385!4d76.8723344!16s%2Fg%2F11f32916m1?entry=ttu">
                Kalujhanda, Baddi, Solan, 174103, Himachal Pradesh
              </a>
            </p>
          </div>

          <div className="col mb-3">
            <h4>
              <i class="fa-solid fa-phone-volume"></i> CALL US
            </h4>
            <p>
              {" "}
              <a href="">+91-9073587432 /+91-9073345862 /+91-9073099301</a>
            </p>
          </div>

          <div className="col mb-3">
            <h4>
              <i class="fa-solid fa-envelope"></i> Email
            </h4>
            <p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                niladri1249.be22@chitkarauniversity.edu.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/*GOOGLE MAP HERE */}

      <div className="map-container" id="'map'">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: "0" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.726547647258!2d76.32397991460334!3d30.833805381608487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f9d8c505989b%3A0x6998cd5299b4e8fc!2sChitkara%20University%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1676327465915!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/*FOOTER HERE */}
      <Foot />
    </div>
  );
};

export default ContactPage;
