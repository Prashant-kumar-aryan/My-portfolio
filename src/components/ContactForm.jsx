import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/ContactForm.css"; // Import your CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    var templateParams = {
      from_name: formData.name,
      to_name: "Prashant",
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send("service_9fsl0h8", "template_j575jx5", templateParams, {
        publicKey: "5z0lNZnJfdFvWsX6C",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <h2>CONTACT</h2>
      </div>
      <div className="half">
        <div className="item">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="full">
        <label htmlFor="message">MESSAGE</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="action">
        <input type="submit" value="SEND MESSAGE" />
        <input type="button" value="RESET" onClick={handleReset} />
      </div>
      <div className="icons">
        <a href="https://x.com/_prashant_aryan" className="fa fa-twitter"></a>
        <a
          href="https://www.linkedin.com/in/prashant-kumar-aryan-517b4a25a/"
          className="fa fa-linkedin"
        ></a>
        <a
          href="https://github.com/Prashant-kumar-aryan"
          className="fa fa-github"
        ></a>
      </div>
    </form>
  );
};

export default ContactForm;
