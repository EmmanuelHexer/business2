import React from "react";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
} from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";

const Services = ({ services }) => {
  return (
    <>
      <section className="services-container" name="servcie" ref={services}>
        <h1 className="services-heading"> our Services</h1>
        <article className="container">
          <div className="services-content">
            <div className="service">
              <img
                title="Welcome to Milly's Cuisine - Where Flavor Meets Elegance!."
                className="service-img"
                src="https://african.land/oc-content/plugins/blog/img/blog/1332.jpg"
              />
              <h3>
                <TbHexagonNumber1 color="pink" size={58} />
                Catering
              </h3>

              <p>
                At Milly's Cusine, we bring delicious, high-quality cuisine to
                your special events. Whether it's a wedding, corporate
                gathering, birthday, or private party, our team is dedicated to
                creating an unforgettable dining experience tailored to your
                needs.
              </p>
            </div>
            <div className="service">
              <img
                className="service-img"
                title="Made Just for You!."
                src="https://chefamenta.com/wp-content/uploads/2024/10/food-orders-295x300.jpg"
              />
              <h3>
                <TbHexagonNumber2 color="blue" size={58} />
                Personal Orders
              </h3>
              <p>
                Craving something special? At Milly's Cuisine, we prepare
                delicious meals tailored to your taste! Whether you’re ordering
                for yourself or treating a loved one, we ensure every dish is
                made fresh, flavorful, and just the way you like it.
              </p>
            </div>
            <div className="service">
              <img
                className="service-img"
                title="Perfectly Planned, Flawlessly Executed!."
                src="https://aldhafrauae.ae/wp-content/uploads/2021/11/event-and-catering-agency-organization-modern-wedd-L56YUGX-min_480x480.webp"
              />
              <h3>
                <TbHexagonNumber3 color="purple" size={58} />
                Event (Indoor & Outdoor) Management
              </h3>
              <p>
                At Milly's Cuisine, we specialize in creating unforgettable
                events, whether indoor or outdoor. From intimate gatherings to
                grand celebrations, our team ensures every detail is handled
                with perfection.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Services;
