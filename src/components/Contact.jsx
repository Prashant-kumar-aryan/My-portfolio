import React, { useEffect } from "react";
import contact from "../assets/images/contact.png";
import ContactForm from "./ContactForm";
import "../assets/styles/contact.css"; // Assuming this contains specific styles for the Contact component
import "../assets/styles/ContactForm.css"; // Assuming this contains global styles

const Contact = () => {
  useEffect(() => {
    // Add global-styles class to body on mount
    document.body.classList.add("global-styles");

    // Clean up: remove global-styles class on unmount
    return () => {
      document.body.classList.remove("global-styles");
    };
  }, []);

  return (
    <>
      <section className="contact-header">
        <div className="contact-image">
          <img src={contact} alt="contact" />
        </div>
        <div className="contact-title">
          <h1>Contact Me</h1>

          <h2 style={{ color: "white" }}>
            I am always up for a good conversation.
          </h2>
          <h2 style={{ color: "white" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantkr2698@gmail.com"
              target="_blank"
              className="fa fa-google"
              style={{
                marginTop: "20px",
                color: "white",
                borderRadius: "50%",
                border: "1px solid white",
                padding: "5px",
              }}
            ></a>
            <span style={{ marginLeft: "10px" }}>prashantkr2698@gmail.com</span>
          </h2>
          <h2 style={{ color: "white" }}>
            <a
              href="https://api.whatsapp.com/send/?phone=7250412245&text&type=phone_number&app_absent=0"
              target="_blank"
              className="fa fa-whatsapp"
              style={{
                marginTop: "20px",
                color: "white",
                borderRadius: "50%",
                border: "1px solid white",
                padding: "5px",
              }}
            ></a>
            <span style={{ marginLeft: "10px" }}>7250412245</span>
          </h2>
        </div>
      </section>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="fun-section">
        <h1 style={{ color: "white" }}>
          You may have some fun with Whack Mr. Sahay
        </h1>
        <iframe
          src="https://prashant-kumar-aryan.github.io/WhackMr.-sahay/"
          title="Whack Mr. Sahay Game"
          className="iframe"
          aria-label="Whack Mr. Sahay Game"
          frameBorder="0"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
