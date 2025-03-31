import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const ProductsPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const navigateToProducts = () => {
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
          "https://cdn.statically.io/gh/KwabenaIzen/products-json/main/products%20json/products.json",
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
              onClick={navigateToProducts}
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
              <b>Fax: </b> <span>+1 347 431 8860</span>
            </p>
            <a
              href="https://wa.me/+13472933674"
              target="_blank"
              className="whatsapp-btn"
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
