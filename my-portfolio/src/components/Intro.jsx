import React from "react";

import Typewriter from "typewriter-effect";
import myimg from "../images/pictures/myimage.jpg";

export default function Intro({ handleClick, boolean }) {
  return (
    <div
      id="home"
      className="hero"
      onClick={() => {
        if (boolean === false) handleClick();
      }}
    >
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <span class="inner-circle circle">
            <img className="home-img" src={myimg} alt="personal" />
          </span>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Hi There!<span className="wave">👋</span>, I'm
        </div>
        <div id="user-detail-name" className="bio name lighter-red">
          Vanshika Agarwal.
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(" Full Stack Developer.")
                .pause(2000)
                .deleteAll()
                .typeString(" Frontend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString(" Backend Developer.")
                .pause(2000)
                .deleteAll()

                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
          I'm a MERN stack developer, crafting captivating web applications with MongoDB, Express.js, React.js, and Node.js. Seamlessly blending front-end and back-end expertise, I deliver dynamic user interfaces and efficient data management for scalable solutions.
          </div>
        </div>
        <div className="button-container">
         {/* <a className="contact-button" href="#contact">
            Contact
          </a>*/}
        </div>
      </div>
    </div>
  );
}