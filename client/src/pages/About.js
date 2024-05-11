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

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Afterloginusernav />
      {/* Banner */}
      <div className="banner" style={{ marginTop: "8rem" }}>
        <img src={img} alt="" />
        <div className="contentMama" data-aos="fade-left">
          <h2>Success By Learning</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, ducimus perspiciatis vitae mollitia rem omnis illum
            necessitatibus animi expedita, tempore fugit possimus quae corporis
            doloremque earum placeat eos? Nesciunt, quasi?
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            quaerat nesciunt itaque eum? Laudantium, autem. Saepe provident
            earum, illo nemo nostrum hic vel dolore sapiente cum consectetur.
            Architecto, aperiam nulla. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Rem architecto ipsa commodi hic corrupti
            exercitationem maxime animi veniam! Nobis dicta magnam eum possimus
            earum, accusantium laudantium. Animi pariatur cumque nesciunt?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            tempore cum molestias explicabo, ipsa, quaerat totam expedita
            quibusdam necessitatibus sapiente eaque quae at quia reprehenderit
            modi, earum quisquam? Similique, illo? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Est cum iure fugit! Dicta officiis
            repellendus, perspiciatis neque dolorum quam cupiditate velit,
            expedita vero eius atque aliquid, odit alias obcaecati veritatis.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          mollitia recusandae odit facilis iusto iste magnam accusamus quos
          distinctio fuga, ipsa consectetur quae nam nesciunt totam tempora non
          provident incidunt.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            suscipit veritatis, quae sunt est sapiente molestias labore
            similique dolore nisi neque vel, tempore nulla esse facilis ipsam
            eveniet velit iure! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi, id perferendis nesciunt nulla vero facilis
            facere similique earum voluptate, cumque dolorum eaque ipsam
            maiores. Molestiae ut saepe aliquid cupiditate voluptate.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur
          quidem sapiente suscipit similique animi, odio vitae nulla rerum
          cupiditate minus dolorum repellendus aspernatur ab deserunt, illo
          facere corporis vel! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eaque autem vel exercitationem neque, perspiciatis
          dolorem eos adipisci corrupti? Dolorum debitis ratione quos qui
          aliquid. Blanditiis sit harum excepturi aut tenetur.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique sapiente adipisci aspernatur autem exercitationem
                temporibus ipsa doloremque molestiae accusantium eos, nobis,
                modi neque labore laudantium facilis quibusdam ratione eaque
                perspiciatis.
              </p>
              <br />
              <h3>Some Famous</h3>
            </div>
          </div>
          <div className="contentMamaBx" data-aos="fade-left">
            <div>
              <p style={{ fontSize: "16px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique sapiente adipisci aspernatur autem exercitationem
                temporibus ipsa doloremque molestiae accusantium eos, nobis,
                modi neque labore laudantium facilis quibusdam ratione eaque
                perspiciatis.
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

export default About;
