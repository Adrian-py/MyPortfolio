import React from "react";
import emailjs from "emailjs-com";

import sendIcon from "../assets/sendIcon.svg";

export default function Contact() {
  function sendMessage(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a5xgnrh",
        "template_yan8bee",
        e.target,
        "kD28ADdPWs5YTEO85"
      )
      .then(
        (result) => {
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <div className="desc">
        <h3 className="desc__interested">
          Interested in collaborating with me?
        </h3>
        <p className="desc__text">
          You can contact me through my email adrianhartanto0312@gmail.com or
          you can also write to me here!
        </p>
      </div>

      <form method="POST" className="form" onSubmit={sendMessage}>
        <div className="form__top">
          <input
            type="text"
            name="name"
            id="name"
            className="form__name"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="form__email"
            placeholder="Email"
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="form__message"
          placeholder="Your message..."
        ></textarea>
        <button className="form__button">
          <img src={sendIcon} alt="" />
          <p>SEND</p>
        </button>
      </form>
    </section>
  );
}
