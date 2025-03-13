import plate from "../assets/plate.png";

const Hero = () => {
  return (
    <div className="">
      <section className="hero">
        <div className="hero-first-half">
          <h1>
            <span>Get our</span>
            <span>best food!</span>
          </h1>
          <p>let's start do your order now!</p>
          <button>Check out</button>
        </div>
        <div className="hero-second-half">
          <img className="plate" src={plate} alt="plate" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
