import logo from "../assets/plate.png";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <figure>
          <img className="logo" src={logo} alt="logo" />
        </figure>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          <FaSearch className="search" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
