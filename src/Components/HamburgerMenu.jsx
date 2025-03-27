import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Close, Open } from "./MobileMenuToggle";

const HamburgerMenu = () => {
  const [isOpen, setIsOPen] = useState(false);
  const openMobileMenu = () => setIsOPen(!isOpen);

  return (
    <button onClick={openMobileMenu} className="ham-menu">
      {isOpen ? <Close /> : <Open />}
      {isOpen && <MobileMenu isOPen={isOpen} setIsOpen={setIsOPen} />}
    </button>
  );
};

export default HamburgerMenu;
