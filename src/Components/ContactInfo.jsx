import { FaPhone, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-address">
      <article>
        <h3>Phones</h3>
        <p>
          <FaPhone className="fa-phone" />
          <b> Phone: </b> <span> +1 347 293 3674</span>
        </p>
        <p>
          <FaPhone className="fa-phone" />
          <b> Fax:</b> <span>+1 347 431 8860</span>
        </p>
      </article>
      <article>
        <h3>Email Address</h3>
        <p>
          {/* <FaInstagram className="fa-instagram" /> */}

          <span> info@millyscuisine.com</span>
        </p>
      </article>
    </div>
  );
};

export default ContactInfo;
