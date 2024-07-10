import React, { useEffect, useRef } from "react";
import "../assets/styles/Hero.css"; // Assuming this imports necessary CSS styles
import Typed from "typed.js";
import profile from "../assets/images/self_full.jpg";
import leisure from "../assets/images/leisure.png";
import react from "../assets/Logo/react.png";
import bootstrap from "../assets/Logo/bootstrap.png";
import cpp from "../assets/Logo/cpp.png";
import css from "../assets/Logo/css.png";
import express from "../assets/Logo/express.png";
import html from "../assets/Logo/html.png";
import mongo from "../assets/Logo/mongo.png";
import node from "../assets/Logo/node.png";
import redis from "../assets/Logo/redis.png";
import socket from "../assets/Logo/socket.png";
import mysql from "../assets/Logo/my-sql.png";
import vsc from "../assets/Logo/vsc.png";
import git from "../assets/Logo/git.png";
import github from "../assets/Logo/github.png";
import space from "../assets/header-img.svg";
import cn from "../assets/Logo/cn.jpeg";
import oops from "../assets/Logo/oops.png";
import dbms from "../assets/Logo/dbms.png";
import os from "../assets/Logo/os.png";
import redux from "../assets/Logo/redux.png";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    console.log("Component mounted.");

    // Typed.js initialization
    document.body.classList.add("fade-in");

    const options = {
      strings: [
        "<i>I</i> am Prashant Kumar Aryan.",
        "A Full stack Web Developer.",
      ],
      typeSpeed: 50,
      backDelay: 700,
      loop: true,
      loopCount: Infinity,
    };

    // Initialize Typed instance
    typedRef.current = new Typed(".typed-element", options);

    // Dynamically load spline-viewer.js script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up: remove script and destroy Typed instance
    return () => {
      console.log("Component unmounted.");

      // Remove spline-viewer.js script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

      // Destroy Typed instance
      if (typedRef.current) {
        typedRef.current.destroy();
      }
      document.body.classList.remove("fade-in");
    };
  }, []);

  return (
    <>
      <section>
        <div className="hero-container">
          <div className="left-container">
            <div className="typed-container">
              <h1>
                <span>Welcome </span>To my Portfolio
              </h1>
              <h1 className="hi">
                <span className="typed-element" />
              </h1>
            </div>
            <div className="spline-viewer-container">
              <spline-viewer
                url="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode"
                className="spline-viewer"
              />
            </div>
          </div>

          <div className="right-container">
            <div className="upper-left">
              <img src={profile} alt="self" />
            </div>
            <div className="lower-left">
              <h2>Prashant Kumar Aryan</h2>
              <h3>
                B.Tech in Computer Science and Engineering, Kalinga Institute of
                Industrial Technology
              </h3>
              <p>
                I am Prashant Kumar Aryan, a dedicated B.Tech student in
                Computer Science and Engineering at Kalinga Institute of
                Industrial Technology. I am passionate about full stack
                development and have experience with the MERN stack, including
                MongoDB, Express.js, React, and Node.js. Notable strengths
                include time management, a positive mindset, and exceptional
                communication skills, with a proven ability to work as part of a
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section2">
          <div className="left-section2">
            <h2>My skills 👉</h2>
            <h3>Technical skills</h3>
            <div className="logo-container">
              <div className="icon-container">
                <img className="icon Logo" src={react} alt="React" />
                <p>React</p>
              </div>
              <div className="icon-container">
                <img className="icon Logo" src={redux} alt="Redux" />
                <p>Redux</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={bootstrap} alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={cpp} alt="C++" />
                <p>C++</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={node} alt="Node.js" />
                <p>Node.js</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={mongo} alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={express} alt="Express.js" />
                <p>Express.js</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={html} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={css} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={redis} alt="Redis" />
                <p>Redis</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={socket} alt="Socket.io" />
                <p>Socket.io</p>
              </div>
              <div className="icon-container">
                <img className="icon Logo" src={mysql} alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={git} alt="Git" />
                <p>Git</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={github} alt="GitHub" />
                <p>GitHub</p>
              </div>
              <div className="icon-container">
                <img className="icon" src={vsc} alt="Visual Studio Code" />
                <p>Visual Studio Code</p>
              </div>
            </div>

            <h3>Core Subjects</h3>
            <div className="logo-container">
              <div>
                <img className="icon " src={cn} alt="cn" />
                <p>CN</p>
              </div>
              <div>
                <img className="icon " src={oops} alt="opps" />
                <p>OOPS</p>
              </div>
              <div>
                <img className="icon " src={dbms} alt="dbms" />
                <p>DBMS</p>
              </div>
              <div>
                <img className="icon " src={os} alt="os" />
                <p>OS</p>
              </div>
            </div>
          </div>
          <div className="right-section2">
            <img src={space} alt="space-img" className="space" />
          </div>
        </div>
      </section>
      <section className="liesure">
        <div className="left-section3">
          <img src={leisure} alt="leisure" className="leisure" />
        </div>
        <div className="right-section3">
          <div>
            <h1>In my Freetime 🚀</h1>
          </div>
          <div>
            <h2>🚀I love to travel.</h2>
            <h2>🚀I love makeking small projects.</h2>
            <h2>🚀Eating.</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
