import React from "react";
import hat from "../assets/images/hat.png";
import "../assets/styles/Education.css";
import c1 from "../assets/Logo/hacker.png";
import c2 from "../assets/Logo/udemy.png";
import c3 from "../assets/Logo/kiit.png";

const Education = () => {
  return (
    <>
      <section>
        <div className="education">
          <div className="left-education">
            <div className="edu-heading">
              <h1>Education</h1>
              <h2>Basic Qualification and Certifications</h2>
            </div>
            <div className="schoool-college">
              <div className="edu-card">
                <h2>B.Tech 2021-25</h2>
                <h3>
                  Computer Science and Engineering,
                  <br></br>Kalinga Institute of Industrial Technology
                </h3>
                <p></p>
              </div>
              <div className="edu-card">
                <h2>High School 2018-20</h2>
                <h3>DAV Kapildev Public School</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="right-education">
            <img src={hat} alt="hat" />
          </div>
        </div>
      </section>
      <section className="Certificate">
        <div className="cer-heading">
          <h1>Certificates</h1>
        </div>
        <div>
          <div className="Certificate-card">
            <a
              href="https://drive.google.com/file/d/1alqYEeL4ZISGbllIcl3opZm8rxwicyyT/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={c1}
                alt="HackerRank Basic Problem Solving Certificate"
              />
              <h2>HackerRank Basic Problem Solving Certificate🔗</h2>
            </a>
          </div>
          <div className="Certificate-card">
            <a
              href="https://drive.google.com/file/d/1alqYEeL4ZISGbllIcl3opZm8rxwicyyT/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={c1}
                alt="HackerRank Intermediate Problem Solving Certificate"
              />
              <h2>HackerRank Intermediate Problem Solving Certificate🔗</h2>
            </a>
          </div>
          <div className="Certificate-card">
            <a
              href="https://www.udemy.com/certificate/UC-8850b75f-7680-45e5-91fc-912b8f7fcb81/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={c2} alt="Certificate" />
              <h2>The complete Web Development Bootcamp🔗</h2>
            </a>
          </div>
          <div className="Certificate-card">
            <a
              href="https://drive.google.com/file/d/1sTay5qVHz4yj16dezlqFpLbSFgHunZbK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={c3} alt="Certificate" />
              <h2>Kodesphere v1.0 KIIT 🔗</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
