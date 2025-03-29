import { useRef } from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import HamburgerMenu from "../Components/HamburgerMenu";
import Products from "../Components/Products";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/footer";

const Home = () => {
  const home = useRef(null);
  const products = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);
  return (
    <div>
      <Nav
        home={home}
        products={products}
        services={services}
        contact={contact}
      />
      <Hero />
      <HamburgerMenu
        home={home}
        products={products}
        services={services}
        contact={contact}
      />
      <Products products={products} />
      <Services services={services} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
};

export default Home;
