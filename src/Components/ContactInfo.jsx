import { FaPhone, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-address">
      <article>
        <h3>Phones</h3>
        <p>
          <FaPhone className="fa-phone" />
          Phone: <span>+1 347 293 3674</span>{" "}
        </p>
        <p>
          <FaPhone className="fa-phone" />
          FAX: <span>+1 347 431 8860</span>
        </p>
      </article>
      <article>
        <h3>Instagram</h3>
        <p>
          <FaInstagram className="fa-instagram" />
          <span>@Millys_Cuisine</span>
        </p>
      </article>
    </div>
  );
};

export default ContactInfo;
