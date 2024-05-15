import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Foot = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuth(token);
  }, []);
  return (
    <footer>
      <div class="footerContainer">
        <div class="socialIcons">
          <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://wa.me/9832394272">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>

        {auth !== null ? (
          <div class="footerNav">
            <ul>
              <li>
                <a href="/" onClick={() => navigate("/home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => navigate("/about")}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.ndtv.com/topic/virtual-classes"
                  onClick={() =>
                    navigate("https://www.ndtv.com/topic/virtual-classes")
                  }
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9832394273"
                  onClick={() => navigate("https://wa.me/9832394272")}
                >
                  Support team
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div class="footerBottom">
        <p>
          CopyRight &copy;2024; Designed by{" "}
          <span class="designer">
            <a href="https://wa.me/7439120030"> Our Virtual team</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Foot;
