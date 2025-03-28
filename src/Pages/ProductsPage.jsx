import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import MobileMenu from "../Components/MobileMenu";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import HamburgerMenu from "../Components/HamburgerMenu";
import { FaPhone } from "react-icons/fa";

const ProductsPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("products");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    try {
      async function getData() {
        const response = await fetch(
          "https://gist.githubusercontent.com/KwabenaIzen/80ce0e87052e50c902f6d8e6224de8dc/raw/4c3bc9e17a93e103be3347904de6fa6dc0cea422/products.json",
        );
        const data = await response.json();
        const foundProduct = data.find((item) => item.name === name);
        setProduct(foundProduct);
      }
      getData();
    } catch (err) {
      console.err(err);
    }
  });

  const { name: foodName, imageUrl, description, category } = product;

  return (
    <div className="product-page">
      <nav className="nav product-details-nav">
        <figure>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </figure>
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={navigateToContact}
              className="back-to-products-link"
            >
              <span className="back-arrow">←</span>Back To Products
            </Link>
          </li>
        </ul>
      </nav>
      <section className="product-details">
        <img src={imageUrl} alt="" />
        <div className="details-text">
          <h1 className="details-foodName">{foodName}</h1>
          <div className="details-category">{category}</div>
          <div className="details-description">{description}</div>
          <div className="details-contact">
            <p>
              <FaPhone className="fa-phone" />
              FAX: <span>+1 347 431 8860</span>
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              class="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
