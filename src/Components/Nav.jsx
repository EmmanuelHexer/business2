import logo from "../assets/logo.png";
import NavLinks from "../Utility/NavLinks";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = ({ home, products, services, contact, hide }) => {
  const [underline, setUnderline] = useState("link-underline");
  const [selectedLink, setSelectedLink] = useState(null);

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

  const setActive = (index) => {
    if (underline) {
      setUnderline("link-underline");
      setSelectedLink(index);
    } else setUnderline("");
  };

  const links = NavLinks();

  return (
    <div ref={home}>
      <nav className="nav">
        <figure>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </figure>
        <ul className={hide ? "none" : "block"}>
          {links.map(({ name, url }, index) => {
            return (
              <li key={index} className="none">
                <Link
                  className={
                    selectedLink === index
                      ? underline
                      : index === 0 && selectedLink === null
                      ? "link-underline"
                      : ""
                  }
                  to={url}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActive(index);
                    scrollToSection(index);
                  }}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="search-box">
          <button className="btn-search">
            <FaSearch className="search fas fa-search" />
          </button>
          <input
            className="input-search"
            type="text"
            placeholder="Search for foods"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
