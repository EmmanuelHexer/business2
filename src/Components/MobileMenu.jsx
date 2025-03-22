import NavLinks from "../Utility/NavLinks";
import { Link } from "react-scroll";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const links = NavLinks();
  return (
    <div>
      <nav className="nav mobile-nav">
        <ul className={"mobile-menu"}>
          {links.map(({ name, url }, index) => (
            <li key={index}>
              <Link onClick={() => setIsOpen(false)} to={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
