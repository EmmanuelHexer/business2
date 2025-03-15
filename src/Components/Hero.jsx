import plate from "../assets/plate.png";
import SocialLinks from "../Utility/SocialLinks";

const Hero = () => {
  const socials = SocialLinks();
  return (
    <div className="">
      <section className="hero">
        <div className="hero-first-half">
          <h1>
            <span>Get our</span>
            <span>best food!</span>
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
        {socials.map(({ img, url }) => (
          <li>
            <a href={url} target="_blank">
              {img}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
