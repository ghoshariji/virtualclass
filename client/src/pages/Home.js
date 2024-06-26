import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Foot from "../footer/Foot";
import img from "../image/online-classes-1.jpeg";
import img2 from "../image/logo-1.png";
import img3 from "../image/images 2.jpeg";
import img4 from "../image/logo-2.png";
import img5 from "../image/online-classes-3.jpeg";
import img6 from "../image/logo-3.png";
import img7 from "../image/online-classes-4.jpeg";
import img8 from "../image/logo-4.jpeg";
import img9 from "../image/online-classes-5.jpeg";
import img10 from "../image/logo-5.png";
import img11 from "../image/online-classes-6.jpeg";
import img12 from "../image/logo-6.png";
import img13 from "../image/popular-1.jpg";
import img14 from "../image/popular-2.jpeg";
import img15 from "../image/popular-3.webp";
import img16 from "../image/popular-4.jpeg";
import img17 from "../image/popular-5.jpg";
import img18 from "../image/popular-6.jpg";
import img19 from "../image/step-1.jpeg";
import img20 from "../image/step-4.jpeg";
import img21 from "../image/step-5.jpeg";
import img22 from "../image/step-6.jpeg";
import img23 from "../image/gallary-1.jpg";
import img24 from "../image/gallary-2.jpg";
import img25 from "../image/gallary-3.png";
import img26 from "../image/gallary-4.jpg";
import img27 from "../image/gallary-5.png";
import img28 from "../image/gallary-6.jpg";
import img29 from "../image/review-1";
import img30 from "../image/review-2.jpg";
import img31 from "../image/review-3.avif";
import img32 from "../image/review-4.webp";
import img33 from "../image/Homepage4-logo.png";
import img34 from "../image/bengali-language-picture.webp";
import img35 from "../image/pemium-course-picture.jpg";

import "../customcss/home.css";
import Afterloginusernav from "../navbar/Afterloginusernav";

import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [courseId1, setCourseId] = useState([]);
  const [final, setFinal] = useState([]);
  const handlePayment = async (price, courseId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user/checkout`,
      { price },
      config
    );
    const options = {
      key: `${process.env.REACT_APP_razorPay}`,
      amount: res.data.data.amout,
      name: name,
      description:
        "A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami",
      image: "https://example.com/your_logo",
      order_id: res.data.data.id,
      callback_url: `${process.env.REACT_APP_API_URL}/api/user/paymentverification/?id=${id}&courseid=${courseId}`,
      prefill: {
        name: name,
        email: email,
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/instructor/get-premium-course`
      );
      setData(res.data.data);
    } catch (error) {
      console.log("Error from the geeting premuim course home page " + error);
    }
  };
  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("id");
    const course = localStorage.getItem("course");
    if (course) {
      const courseArray = course.split(",");
      console.log(courseArray);
      setCourseId(courseArray);
    }
    setName(name);
    setEmail(email);
    setId(id);
    const menu = document.querySelector("#menu-bar");
    const navbar = document.querySelector(".navbar");
    fetchData();
    const handleMenuClick = () => {
      if (menu && navbar) {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
      }
    };

    const handleScroll = () => {
      if (menu && navbar) {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
        if (window.scrollY > 60) {
          document.querySelector("#scroll-top")?.classList.add("active");
        } else {
          document.querySelector("#scroll-top")?.classList.remove("active");
        }
      }
    };
    if (menu && navbar) {
      menu.onclick = handleMenuClick;
    }
    window.onscroll = handleScroll;
    return () => {
      if (menu && navbar) {
        menu.onclick = null;
      }
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="HEadhOMe">
      <Afterloginusernav />

      <section className="home" id="home" style={{ marginTop: "8rem" }}>
        <div className="content">
          {/* {courseId1.map((val,ind)=>{
          return (
            <div>
              <p>{val}</p>
            </div>
          )
        })} */}
          <h3>Taking failures in your stride. ...</h3>
          <p>
            You have to dream before your dreams can come true." "Excellence is
            a continuous process and not an accident." "Life is a difficult
            game. You can win it only by retaining your birthright to be a
            person."
          </p>
          <a href="#popular" className="btn">
            Get Started
          </a>
        </div>
        <div className="image">
          <img src={img33} alt="online" />
        </div>
      </section>

      {/*Speciality Section */}

      <section className="speciality" id="speciality">
        {/* Speciality section content */}

        <h1 className="heading">
          Our <span>Speciality</span>
        </h1>
        <div className="box-container">
          {/* Box 1 */}
          <div className="box">
            <img className="image" src={img} alt="online" />
            <div className="content">
              <img src={img2} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box">
            <img className="image" src={img3} alt="online" />
            <div className="content">
              <img src={img4} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          <div className="box">
            <img className="image" src={img5} alt="online" />
            <div className="content">
              <img src={img6} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          <div className="box">
            <img className="image" src={img7} alt="online" />
            <div className="content">
              <img src={img8} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          <div className="box">
            <img className="image" src={img9} alt="online" />
            <div className="content">
              <img src={img10} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          <div className="box">
            <img className="image" src={img11} alt="online" />
            <div className="content">
              <img src={img12} alt="" />
              <h3>Our Responsible Study Room</h3>
              <p>
                An online class study room is a virtual space where students can
                participate in live classes, access learning materials,
                collaborate with peers, and communicate with instructors. It
                serves as a central hub for all course-related activities,
                integrating various tools and resources to facilitate a seamless
                learning experience.
              </p>
            </div>
          </div>

          {/* Add more boxes as needed... */}
        </div>
      </section>

      {/* Popular section */}
      <section className="popular" id="popular">
        {/* Popular section content */}
        <h1 className="heading">
          Our <span>Premium</span> Couses
        </h1>

        <div className="box-container">
          {/* English Box */}

          {/* getting fetchData */}
          {data
            .filter((val) => !courseId1.includes(val._id))
            .map((val, ind) => {
              return (
                val.isPremium && (
                  <div className="box" key={ind}>
                    <span className="price">Rs. {val.price}/-</span>
                    <img src={img35} alt="English" />
                    <h3>{val.name}</h3>
                    <h4>{val.about}</h4>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <button
                      onClick={() => handlePayment(val.price, val._id)}
                      className="btn"
                    >
                      Buy Now
                    </button>
                  </div>
                )
              );
            })}

          {/* Add more boxes as needed... */}
        </div>

        <h1 className="heading">
          Our <span> Free Popular</span> Subjects
        </h1>
        <div className="box-container">
          {/* English Box */}

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img13} alt="English" />
            <h3>English</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              checkout
            </a>
          </div>

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img34} alt="English" />
            <h3>Bengali</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a
              href="https://preply.com/en/online/bengali-tutors"
              className="btn"
            >
              Checkout
            </a>
          </div>

          {/* Mathematics Box */}
          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img14} alt="Mathematics" />
            <h3>Mathematics</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              Checkout
            </a>
          </div>

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img15} alt="English" />
            <h3>History</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              Checkout
            </a>
          </div>

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img16} alt="English" />
            <h3>Geography</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              Checkout
            </a>
          </div>

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img17} alt="English" />
            <h3>Physics</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              Checkout
            </a>
          </div>

          <div className="box">
            <span className="price">$0 - $0</span>
            <img src={img18} alt="English" />
            <h3>Chemistry</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://ncert.nic.in/" className="btn">
              Checkout
            </a>
          </div>

          {/* Add more boxes as needed... */}
        </div>
      </section>

      {/* Steps section */}
      <section className="steps">
        {/* Steps section content */}

        <div className="box">
          <img className="img" src={img19} alt="A. P. J. Abdul Kalam" />
          <h3>A. P. J. Abdul Kalam</h3>
        </div>

        {/* Box 2 */}
        <div className="box">
          <img className="img" src={img20} alt="Albert Einstein" />
          <h3>Albert Einstein</h3>
        </div>

        {/* Box 3 */}
        <div className="box">
          <img className="img" src={img21} alt="Mahatma Gandhi" />
          <h3>Mahatma Gandhi</h3>
        </div>

        {/* Box 4 */}
        <div className="box">
          <img className="img" src={img22} alt="Srinivasa Ramanujan" />
          <h3>Srinivasa Ramanujan</h3>
        </div>
      </section>

      {/* Gallery section */}
      <section className="gallery" id="gallery">
        {/* Gallery section content */}

        <h1 className="heading">
          Study<span>Materials</span>
        </h1>
        <div className="box-container">
          {/* Box 1 */}
          <div className="box">
            <img src={img23} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box">
            <img src={img24} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>

          <div className="box">
            <img src={img25} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>

          <div className="box">
            <img src={img26} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>

          <div className="box">
            <img src={img27} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>

          <div className="box">
            <img src={img28} alt="NCERT" />
            <div className="content">
              <h3>NCERT</h3>
              <p>"Excellence is a continuous process and not an accident."</p>
              <a href="https://ncert.nic.in/" className="btn">
                Check Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review section */}
      <section className="review" id="review">
        <h1 className="heading">
          Our <span>Students</span> Review
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={img29} alt="" />
            <h3>John Deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              The course provided excellent opportunities for networking with
              other professionals in my field. The discussion boards and group
              projects encouraged collaboration and the exchange of ideas,
              helping me build valuable connections that I can maintain beyond
              the course.
            </p>
          </div>

          <div className="box">
            <img src={img30} alt="" />
            <h3>Jenny Metha</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              I recently completed an online eLearning class and I am incredibly
              impressed with the entire experience. Overall, my experience with
              this online eLearning class was outstanding. It provided me with
              the flexibility I needed, high-quality and engaging content,
              expert instruction, practical knowledge, and valuable networking
              opportunities.
            </p>
          </div>

          <div className="box">
            <img src={img31} alt="" />
            <h3>Anshu Sharma</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Overall, my experience with this online eLearning class was
              outstanding. It provided me with the flexibility I needed,
              high-quality and engaging content, expert instruction, practical
              knowledge, and valuable networking opportunities.
            </p>
          </div>

          <div className="box">
            <img src={img32} alt="" />
            <h3>Anshika Sharma</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Overall, my experience with this online eLearning class was
              outstanding. It provided me with the flexibility I needed,
              high-quality and engaging content, expert instruction, practical
              knowledge, and valuable networking opportunities. I would highly
              recommend this course to anyone looking to further their education
              and skills in a convenient and effective way.
            </p>
          </div>
        </div>
      </section>

      <Foot />
    </div>
  );
};

export default Home;
