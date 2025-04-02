import React from "react";
import { FaInstagram, FaSquareThreads, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <div className="footer-header">
          <div className="about">
            <h2>About Us</h2>
            <p>
              Welcome to <b>Milly’s Cuisine</b>, where passion meets flavor! At
              Milly’s Cuisine, we believe that every meal should be an
              experience—one that brings people together over delicious,
              homemade dishes prepared with love and the freshest ingredients.
            </p>
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/millys_cuisine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FaInstagram color="orange" size={28} className="socials-link" />
            </a>
            <a href="https://www.threads.net/@millys_cuisine">
              <FaSquareThreads
                color="white"
                size={28}
                className="socials-link"
              />
            </a>
            <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank">
              <FaFacebook
                color="lightBlue"
                size={28}
                className="socials-link"
              />
            </a>
          </div>
        </div>
        <div className="footer-content">
          <h2>"Are you hungry? Get yourself a bit of us!"</h2>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; 2025 All rights reserved | <span>Hexer-Ize</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
