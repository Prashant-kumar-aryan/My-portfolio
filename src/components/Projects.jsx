import React, { Fragment } from "react";
import project from "../assets/images/project.png";
import coding from "../assets/images/coding.png";
import "../assets/styles/Projects.css";
import GeeksforGeeks from "./GfgProfile";
import Leetcode from "./Dashboard";
import CodingNinja from "./CodingNinja";
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
import link from "../assets/Logo/link.png";
import redux from "../assets/Logo/redux.png";

const Projects = () => {
  return (
    <>
      <section className="project-section">
        <div className="left-project-section">
          <img src={project} alt="project" />
        </div>
        <div className="right-project-section">
          <h1>Projects</h1>
          <h2>
            My projects makes use of vast variety of latest technology tools. My
            best experience is web applications using MERN STACK and deploy them
            on github for open source use.
          </h2>
        </div>
      </section>
      <fragment className="project-card-container">
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/Prashant-kumar-aryan/CryptoXpert"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
              </a>
              <a href="https://cryptoxpert-1.onrender.com/" target="_blank">
                <img src={link} alt="GitHub Logo" />
              </a>
            </div>
            <div className="project-info">
              <h2>CryptoXpert</h2>
              <ul>
                <li>
                  Spearheaded a team of 5 developers in developing a MERN stack
                  project, ensuring timely delivery of high-quality application
                  using best practices for Software development.
                </li>
                <li>Implemented server-side logic</li>
                <li>Integrated Socket.io and Gemini AI</li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={mongo} alt="MongoDB" />
              <img src={express} alt="Express.js" />
              <img src={react} alt="React" />
              <img src={node} alt="Node.js" />
              <img src={socket} alt="Socket.io" />
              <img src={redux} alt="Socket.io" />
            </div>
          </div>
        </section>
        {/* break */}
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
                <a href="https://arogyaindia.in" target="_blank">
                  <img src={link} alt="GitHub Logo" />
                </a>
              </a>
            </div>
            <div className="project-info">
              <h2>ArogyaIndia</h2>
              <ul>
                <li>
                  Developed Arogya India, a React web application showcasing
                  advanced frontend skills, responsiveness, interactivity and
                  user-friendly experience using HTML ,CSS ,REACT JS
                </li>
                <li>A Medical Store</li>
                <li>Deployed on Hostinger</li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={html} alt="MongoDB" />
              <img src={react} alt="React" />
              <img src={css} alt="Node.js" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
                <a href="https://www.toletglobe.in/" target="_blank">
                  <img src={link} alt="GitHub Logo" />
                </a>
              </a>
            </div>
            <div className="project-info">
              <h2>To Let Globe</h2>
              <ul>
                <li>
                  Spearheaded a team of 3 developers in designing the frontend
                  and implemented the server side logic for this application
                  using MERN stack using best practices for Software
                  development.
                </li>
                <li>Implemented the Admin Console for ease of use</li>
                <li>Automated the e-Mailing System using nodemailer</li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={mongo} alt="MongoDB" />
              <img src={express} alt="React" />
              <img src={react} alt="Node.js" />
              <img src={node} alt="Node.js" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/Prashant-kumar-aryan/PEER_CHAT_WEB_RTC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
              </a>
              <a
                href="https://prashant-kumar-aryan.github.io/PEER_CHAT_WEB_RTC/lobby.html"
                target="_blank"
              >
                <img src={link} alt="GitHub Logo" />
              </a>
            </div>
            <div className="project-info">
              <h2>Pear Chat Application</h2>
              <ul>
                <li>
                  Using JavaScript, HTML, and CSS, implemented and understood
                  the workings of WebRTC for video calling within the
                  application.
                </li>
                <li>
                  Designed and implemented a responsive frontend for seamless
                  user interaction and experience.
                </li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={node} alt="React" />
              <img src={html} alt="Node.js" />
              <img src={css} alt="Node.js" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/Prashant-kumar-aryan/WhackMr.-sahay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
              </a>
              <a
                href="https://prashant-kumar-aryan.github.io/WhackMr.-sahay/"
                target="_blank"
              >
                <img src={link} alt="GitHub Logo" />
              </a>
            </div>
            <div className="project-info">
              <h2>whack Mr sahay</h2>
              <ul>
                <li>Developed a fun Game using javascript html and css</li>
                <li>Hit Mr sahay to increse score.</li>
                <li>You lose if u hit the plant</li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={node} alt="React" />
              <img src={html} alt="Node.js" />
              <img src={css} alt="Node.js" />
            </div>
          </div>
        </section>
        <section className="project-card">
          <div className="project-details">
            <div className="github-logo">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" />
                <img src={link} alt="GitHub Logo" />
              </a>
            </div>
            <div className="project-info">
              <h2>Redux Cart</h2>
              <ul>
                <li>Implemented the concept of Redux State Management</li>
              </ul>
            </div>
            <div className="tech-stack">
              <img src={react} alt="React" />
              <img src={redux} alt="Node.js" />
              <img src={css} alt="Node.js" />
            </div>
          </div>
        </section>
      </fragment>

      <fragment>
        <section className="project-section">
          <div className="left-project-section">
            <img src={coding} alt="project" style={{ marginLeft: "10%" }} />
          </div>
          <div className="right-project-section">
            <h1 style={{ fontFamily: "cursive" }}>Coding Profiles</h1>
          </div>
        </section>
      </fragment>
      <div className="coding-card">
        <Leetcode />
        <GeeksforGeeks />
        <CodingNinja />
      </div>
      <a
        href="https://github.com/Prashant-kumar-aryan"
        target="_blank"
        style={{
          verticalAlign: "middle",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          class="button"
          style={{
            verticalAlign: "middle",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>View More </span>
        </button>
      </a>
    </>
  );
};

export default Projects;
