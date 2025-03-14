import logo from "../assets/logo.png";
import NavLinks from "../Utility/NavLinks";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [underline, setUnderline] = useState("link-underline");
  const [selectedLink, setSelectedLink] = useState(null);

  const setActive = (index) => {
    if (underline) {
      setUnderline("link-underline");
      setSelectedLink(index);
    } else setUnderline("");
  };

  const links = NavLinks();

  return (
    <div>
      <nav className="nav">
        <figure>
          <img className="logo" src={logo} alt="logo" />
        </figure>
        <ul>
          {links.map(({ name, url }, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    selectedLink === index
                      ? underline
                      : index === 0 && selectedLink === null
                      ? "link-underline"
                      : ""
                  }
                  to={url}
                  onClick={() => setActive(index)}
                >
                  {name}
                </a>
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
