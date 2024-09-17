import React from "react";
import TuasLogo from "../img/turunamk_logo.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-me-text-container">
        <h1 className="contact-header"> Contact Me</h1>
        <p className="contact-text"> E-mail: henryovag@hotmail.com</p>
      </div>
      <img className="contact-img" alt="TUAS-Logo" src={TuasLogo}></img>
    </div>
  );
};

export default Contact;
