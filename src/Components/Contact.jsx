import ContactInfo from "./ContactInfo";

const Contact = ({ contact }) => {
  const handleSubmit = (e) => {
    const url =
      "https://script.google.com/macros/s/AKfycbyaZzKXoVKEqCRdsl99u3dh1p4YslnG8zNzNLWI_JigcSCrnl9Bwg-ISX1xXu5GXybU/exec";
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.Name.value}&Email=${e.target.Email.value}&Contact=${e.target.Contact.value}&Location=${e.target.Location.value}&Message=${e.target.Message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section className="contact-container" name="contact" ref={contact}>
        <div className="grid-wrapper">
          <form action="" id="form" onSubmit={handleSubmit}>
            <h3 className="contact-heading">Contact Us</h3>
            <input type="text" placeholder="Your name*" name="Name" required />
            <input
              type="email"
              placeholder="Your Email*"
              name="Email"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              name="Contact"
              required
            />
            <input
              type="text"
              placeholder="Location"
              name="Location"
              required
            />
            <textarea
              placeholder="Message*"
              name="Message"
              rows={6}
              required
            ></textarea>
            <button type="submit" className="submit">
              Send Message
            </button>
          </form>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166543.67285919748!2d-73.95605718719267!3d40.69131575922799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sgh!4v1742672619523!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ContactInfo />
      </section>
    </>
  );
};

export default Contact;
