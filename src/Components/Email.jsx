import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_rurnbjx",
        "template_ep5ngsv",
        form.current,
        "Is7PGPEcFInRVPBLr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        borderRadius: "10px",

        padding: "15px",
        boxShadow: "5px",
      }}
    >
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label className="label">Name</label>
        <input className="input" type="text" name="user_name" />
        <label className="label">Email</label>
        <input className="input" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="textarea" name="message" />
        <input className="input" type="submit" value="Send" />
      </form>
    </div>
  );
};
