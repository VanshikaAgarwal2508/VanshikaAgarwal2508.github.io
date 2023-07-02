import React, { useEffect } from "react";
import resume from "../resume/Vanshika-Agarwal-Resume.pdf";
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1wqkLmztiz_d9PblT5yU6odc8lV3PWOvs/view?usp=sharing", '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
          Welcome to my coding sanctuary, where imagination intertwines with lines of code! <p style={{ display: 'inline-block' }} className="sauce">I'm Vanshika Agarwal</p>
          , a proficient full stack web developer. 
          I excel in HTML, CSS, JavaScript, ReactJs, NodeJs, Express, and MongoDB. Crafting visually stunning websites is my true passion. I thrive on challenging coding tasks and pay meticulous attention to detail. When not coding, I explore the latest tech trends and digital possibilities.
            <br />
          </p>
          <br />
        </div>
        <button onClick={handleDownload} rel="noreferrer" href={resume} download={"Vanshika-Agarwal-Resume"} id="resume-button-2" className="contact-button resume-button second-btn">
          Resume</button>
      </div>
    </section>
  );
}