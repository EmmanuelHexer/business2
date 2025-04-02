import NavLinks from "../Utility/NavLinks";
import { Link } from "react-scroll";

const MobileMenu = ({ setIsOpen, home, products, services, contact }) => {
  const links = NavLinks();

  const sections = [home, products, services, contact];

  const scrollToSection = (index) => {
    let section = sections[index];
    if (section) {
      window.scrollTo({
        top: section.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <nav className="nav mobile-nav">
        <ul className={"mobile-menu"}>
          {links.map(({ name, url }, index) => (
            <li key={index}>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(index);
                }}
                to={url}
              >
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
