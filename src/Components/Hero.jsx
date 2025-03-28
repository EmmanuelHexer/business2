import plate from "../assets/plate.png";
import SocialLinks from "../Utility/SocialLinks";
import ScrollToTop from "./ScrollToTop";
import HamburgerMenu from "./HamburgerMenu";

const Hero = () => {
  const socials = SocialLinks();

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <ScrollToTop />
      <section className="hero">
        <div className="hero-first-half">
          <h1>
            <span className="slide-In-left">Get our</span>
            <span className="slide-In-left">best food!</span>
          </h1>
          <p>Call us for your food now!</p>
          <div className="checkout-affordable">
            <button onClick={scrollToProducts} className="hover-white">
              Explore
            </button>
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
      <HamburgerMenu />
    </div>
  );
};

export default Hero;
