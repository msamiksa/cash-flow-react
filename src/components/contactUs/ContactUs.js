import React from "react";
import "./ContactUs.css";
import contact from "../../assets/contact-us.svg";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-sub">
        <div className="tilted-bg"></div>
        <center className="contact-us-heading">Reach out to us</center>
        <div className="contact-image">
          <img src={contact} alt="contact"></img>
        </div>
        <div className="contact-us-form">
          <div style={{ padding: "30px" }}>
            <input
              type="text"
              placeholder="YOUR NAME"
              className="contact-us-input"
            ></input>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="contact-us-input"
            ></input>
            <textarea
              placeholder="YOUR MESSAGE"
              rows="4"
              cols="50"
              className="text-area"
            ></textarea>
            <button className="contact-submit">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
