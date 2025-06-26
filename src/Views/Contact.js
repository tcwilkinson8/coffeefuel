// src/Views/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Have questions, feedback, or just want to say hi? Drop us a note below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
