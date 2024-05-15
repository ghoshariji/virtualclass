import React, { useEffect } from "react";
import "../customcss/home.css";
import { useNavigate } from "react-router-dom";
const Afterloginusernav = ({ userId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const menu = document.querySelector("#menu-bar");
    const navbar = document.querySelector(".navbar");
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

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <header>
        <a onClick={() => navigate("/home")} class="logo">
          <i class="fa-solid fa-chalkboard-user"></i>e-Learning
        </a>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav className="navbar">
          <a onClick={() => navigate("/home")}>Home</a>
          <a onClick={() => navigate("/about")}>About</a>
          <a onClick={() => navigate("/contact")}>Contact</a>
          <a onClick={() => navigate("/afterlogin")}>Course</a>
          <a onClick={() => navigate("/onlineclass")}>Online class</a>
          <a onClick={() => navigate("/chat-with-admin")}>Chat us</a>
          <a onClick={() => navigate("/profile")}>Profile</a>
          <a onClick={logout}>Logout</a>
        </nav>
      </header>
    </>
  );
};

export default Afterloginusernav;
