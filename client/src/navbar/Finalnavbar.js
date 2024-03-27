import React,{useEffect} from "react";
import '../customcss/home.css';
const Finalnavbar = () => {
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
  return (
    <>
      <header>
        <a href="" class="logo" >
          <i class="fa-solid fa-chalkboard-user"></i>e-Learning
        </a>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/signup">Singup</a>
          <a href="/login">Login</a>
          <a href="/instructorhome">Become a Instructor</a>
              
        </nav>
      </header>
    </>
  );
};

export default Finalnavbar;
