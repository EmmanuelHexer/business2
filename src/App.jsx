import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Services from "./Components/services";
import Contact from "./Components/Contact";
import { useRef } from "react";

const App = () => {
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
      <Products products={products} />
      <Services services={services} />
      <Contact contact={contact} />
    </div>
  );
};

export default App;
