import React from "react";

const Foot = () => {
  return (
    <footer className="footer-container" style={{bottom: "0", width: "100%", backgroundColor: "black", padding: "10px", marginTop: "20px", zIndex: 0 }}>
      <div className="container" id="containerFoot">
        <div className="content" id="foot1">
          <p>Home</p>
          <p>Login</p>
          <p>Signup</p>
        </div>
        <div className="content" id="foot2">
          <p>Contact us</p>
          <p>Need help?</p>
          <p>Customer support</p>
        </div>
        <div className="content" id="foot3">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>+917439xxxx</p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
