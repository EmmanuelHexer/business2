import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Services from "./Components/services";
import Contact from "./Components/Contact";
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
      <Products />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
