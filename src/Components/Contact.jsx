import React from "react";
import { FaPhone, FaInstagram } from "react-icons/fa";

const Contact = ({ contact }) => {
  return (
    <>
      <section className="contact-container" name="contact" ref={contact}>
        <div className="grid-wrapper">
          <form action="" id="form">
            <h1 className="contact-heading">Contact Us</h1>
            <input type="text" placeholder="Your name*..." required />
            <input type="email" placeholder="Your Email*" required />
            <input type="tel" placeholder="Your Phone" required />
            <input type="text" placeholder="Location" required />
            <textarea placeholder="Message*" rows={6} required></textarea>
            <button type="submit" className="submit">
              Send Message
            </button>
          </form>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166543.67285919748!2d-73.95605718719267!3d40.69131575922799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sgh!4v1742672619523!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-address">
          <article>
            <h3>Phones</h3>
            <p>
              <FaPhone className="fa-phone" />
              Phone: <span>+1 347 293 3674</span>{" "}
            </p>
            <p>
              <FaPhone className="fa-phone" />
              FAX: <span>+1 347 431 8860</span>
            </p>
          </article>
          <article>
            <h3>Instagram</h3>
            <p>
              <FaInstagram className="fa-instagram" />
              <span>@Millys_Cuisine</span>
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
