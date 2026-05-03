import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <form action="https://formspree.io/f/xojrjkjg" method="post">
        <input type="text" placeholder="Enter your name" name="username" required />
        <input type="text" placeholder="Enter your email" name="email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
