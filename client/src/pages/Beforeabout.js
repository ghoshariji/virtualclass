import React, { useEffect } from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import AOS from "aos";
import "aos/dist/aos.css";
import "../customcss/about.css";
import img from "../image/bg.jpg";
import img1 from "../image/icon1.png";
import img2 from "../image/icon2.png";
import img3 from "../image/icon3.png";
import img4 from "../image/tech.png";
import img5 from "../image/Arijit-image.jpg";
import img6 from "../image/Niladri-image.jpg";
import img7 from "../image/Palsh-image.jpg";
import img8 from "../image/Snehasish-image.jpg";

const Beforeabout = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);
  return (
    <div className="HEADAbout">
      <Afterloginusernav />
      {/* Banner */}
      <div className="banner" style={{ marginTop: "8rem" }}>
        <img src={img} alt="" />
        <div className="contentMama" data-aos="fade-left" style={{ paddingRight: "0" }}>
          <h2>Success By Learning</h2>
          <p >
          
          A virtual classroom is an online teaching and learning environment where teachers and students can present course materials, engage and interact with other members of the virtual class, and work in groups together.

          </p>
        </div>
      </div>

      {/* About Us */}
      <section className="aboutMama">
        <div className="contentMamaBx">
          <h2 className="headingMama" data-aos="fade-left">
            About Us
          </h2>
          <p className="textMama" data-aos="fade-right">
            An online virtual class, or virtual classroom, is an online learning environment where students and professionals can learn using a computer, laptop, or mobile device and an internet connection. Participants communicate through voice or video conferences and online chats.
            An online virtual class, or virtual classroom, is an online learning environment where students and professionals can learn using a computer, laptop, or mobile device and an internet connection. Participants communicate through voice or video conferences and online chats.

            <br />
            <br />
            Virtual learning can be self-paced (asynchronous) or real-time (synchronous). Some virtual learning options have classes at scheduled times, while others allow students to learn at their own pace. Virtual learning can be a good choice for people who prefer to learn on their own, without restrictions on space and time.
            Virtual learning can be self-paced (asynchronous) or real-time (synchronous). Some virtual learning options have classes at scheduled times, while others allow students to learn at their own pace. Virtual learning can be a good choice for people who prefer to learn on their own, without restrictions on space and time.
          </p>
        </div>
        <div className="imgMamaBx" data-aos="fade-left"></div>
      </section>

      {/* Services */}
      <section className="serviceMama">
        <h2 className="headingMama" data-aos="fade-right">
          Our Services
        </h2>
        <p data-aos="fade-left" style={{ fontSize: "20px" }}>
        Offer real-time, interactive classes where students can engage directly with instructors, ask questions, and participate in discussions. This promotes a dynamic learning environment similar to traditional classrooms.
        Offer reliable technical support to help students with any issues they may encounter. This ensures a smooth and uninterrupted learning experience.
        </p>
        <div className="containerMama">
          <div className="serviceMamaBx" data-aos="slide-right">
            <div>
              <img src={img1} alt="" />
              <h2>Learning</h2>
            </div>
          </div>
          <div className="serviceMamaBx" data-aos="slide-down">
            <div>
              <img src={img2} alt="" />
              <h2>Focus On your Goal</h2>
            </div>
          </div>
          <div className="serviceMamaBx" data-aos="slide-left">
            <div>
              <img src={img3} alt="" />
              <h2>Breading</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technologyMama">
        <div className="contentMamaBx">
          <h2 className="headingMama" data-aos="fade-left">
            We have special Teachnology Subject
          </h2>
          <p data-aos="fade-right" style={{ fontSize: "15px" }}>
          Online virtual classes for technical subjects encompass a broad range of fields, including computer science, engineering, data science, information technology, and more. These subjects often require a combination of theoretical knowledge and practical skills, which can be effectively delivered through various online platforms. Below, we discuss the key components and strategies for effectively teaching technical subjects online.
          </p>
        </div>
        <div className="imgMamaBx" data-aos="fade-left">
          <img src={img4} alt="" />
        </div>
      </section>

      {/* Client */}
      <section className="clientMama">
        <h2 className="headingMama" data-aos="fade-right">
          We are heart-to-heart connected
        </h2>
        <p className="textMama" data-aos="fade-left">
        Connecting "heart to heart" with members, whether in a community, team, or any group setting, involves building deep, meaningful relationships based on trust, empathy, and genuine communication. This concept goes beyond mere surface-level interactions and seeks to foster a sense of belonging and mutual understanding. Here's a discussion on how to achieve heart-to-heart connections with members:
       <br></br> <span style={{color:"yellow"}}> 1.Arijit Ghosh <br></br> 2.Niladri Sekhar Rout   <br></br>3. Palash Manna  <br></br>  4. Snehasish Bera</span>
        </p>
        <div className="imgMamaBx">
          <img src={img5} alt="" />
          <img  src={img6} alt=""  className="Niladri"/>
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="headingMama">About resources says ?</h2>
        <div className="containerMama">
          <div className="contentMamaBx" data-aos="fade-right">
            <div>
              <p style={{ fontSize: "16px" }}>
             Flexibility and Convenience

              Resource: The flexibility of online classes allows learners to access course materials and complete assignments at their own pace and schedule.
              Feedback: Many students appreciate being able to balance their studies with work, family, and other commitments.
              Accessibility
              
              Resource: Online education makes learning accessible to people in remote or underserved areas who might not have access to traditional educational institutions.
              Feedback: Students from diverse geographical locations can enroll in courses offered by prestigious institutions without the need to relocate.
              Wide Range of Courses
              
            
              </p>
              <br />
              <h3>Some Famous</h3>
            </div>
          </div>
          <div className="contentMamaBx" data-aos="fade-left">
            <div>
              <p style={{ fontSize: "16px" }}>
              Flexibility and Convenience

              Resource: The flexibility of online classes allows learners to access course materials and complete assignments at their own pace and schedule.
              Feedback: Many students appreciate being able to balance their studies with work, family, and other commitments.
              Accessibility
              
              Resource: Online education makes learning accessible to people in remote or underserved areas who might not have access to traditional educational institutions.
              Feedback: Students from diverse geographical locations can enroll in courses offered by prestigious institutions without the need to relocate.
              Wide Range of Courses
              
              
              </p>
              <br />
              <h3>Some Famous</h3>
            </div>
          </div>
        </div>
      </section>

      <Foot></Foot>
    </div>
  );
};

export default Beforeabout;
