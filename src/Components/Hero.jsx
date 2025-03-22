import plate from "../assets/plate.png";
import SocialLinks from "../Utility/SocialLinks";
import { useState } from "react";
import { Close, Open } from "./MobileMenuToggle";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  const [isOpen, setIsOPen] = useState(false);
  const openMobileMenu = () => setIsOPen(!isOpen);

  const socials = SocialLinks();

  return (
    <div className="">
      <section className="hero">
        <div className="hero-first-half">
          <h1>
            <span className="slide-In-left">Get our</span>
            <span className="slide-In-left">best food!</span>
          </h1>
          <p>let's start do your order now!</p>
          <div className="checkout-affordable">
            <button className="hover-white">Check out</button>
          </div>
        </div>
        <div className="hero-second-half">
          <div className="great-prices">
            Great
            <br />
            Prices
          </div>
          <img className="plate" src={plate} alt="plate" />
        </div>
      </section>
      <ul className="social-links">
        {socials.map(({ img, url }, index) => (
          <li key={index}>
            <a href={url} target="_blank">
              {img}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={openMobileMenu} className="ham-menu">
        {isOpen ? <Close /> : <Open />}
        {isOpen && <MobileMenu isOPen={isOpen} setIsOpen={setIsOPen} />}
      </button>
    </div>
  );
};

export default Hero;
