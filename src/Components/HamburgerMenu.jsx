import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Close, Open } from "./MobileMenuToggle";

const HamburgerMenu = ({ home, products, services, contact }) => {
  const [isOpen, setIsOPen] = useState(false);
  const openMobileMenu = () => setIsOPen(!isOpen);

  return (
    <button onClick={openMobileMenu} className="ham-menu">
      {isOpen ? <Close /> : <Open />}
      {isOpen && (
        <MobileMenu
          isOPen={isOpen}
          setIsOpen={setIsOPen}
          home={home}
          products={products}
          services={services}
          contact={contact}
        />
      )}
    </button>
  );
};

export default HamburgerMenu;
