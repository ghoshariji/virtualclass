import React,{useEffect} from "react";
import '../customcss/home.css';
import { useNavigate } from "react-router-dom";
const Insnav = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const menu = document.querySelector("#menu-bar");
        const navbar = document.querySelector(".navbar");
    
        const handleMenuClick = () => {
          if (menu && navbar) {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
          }
        };
    
        const handleScroll = () => {
          if (menu && navbar) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
            if (window.scrollY > 60) {
              document.querySelector("#scroll-top")?.classList.add('active');
            } else {
              document.querySelector("#scroll-top")?.classList.remove('active');
            }
          }
        };
    
        if (menu && navbar) {
          menu.onclick = handleMenuClick;
        }
    
        window.onscroll = handleScroll;
    
        // Cleanup the event listeners on component unmount
        return () => {
          if (menu && navbar) {
            menu.onclick = null;
          }
          window.onscroll = null;
        };
      }, []);

      const logout = () =>{
        localStorage.removeItem("token");
        navigate("/")
      }
  return (
    <>
      <header>
        <a href="" class="logo" >
          <i class="fa-solid fa-chalkboard-user"></i>e-Learning
        </a>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
          <a onClick={logout}>Logout</a>         
        </nav>
      </header>
    </>
  );
};

export default Insnav;
