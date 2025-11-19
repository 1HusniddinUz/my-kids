import React from "react";
import "../assets/Contacts.css";

const Contacts = () => {
  return (
    <section id="Contacts" className="contacts">
      <div className="container contacts-inner">
        <div className="contact_text">
          <h2>Let&apos;s Work Together</h2>
          <p>
            Ready to bring your vision to life? Let&apos;s connect and create
            something extraordinary together!
          </p>
        </div>

        <form className="contact_form">
          {/* Name */}
          <div className="form_group">
            <label htmlFor="firstName">Name *</label>
            <div className="name_row">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form_group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" placeholder="" />
          </div>

          {/* Message */}
          <div className="form_group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder=""
            ></textarea>
          </div>

          <div className="form_actions">
            <button type="submit" className="contact_btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="location_box">
        <h3>Our Location</h3>
        <p>Buxoro shahar Ko‘kaldosh MFY, Xo‘ja Tabband ko‘chasi 11a-uy</p>

        <div className="map_wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12265.880661923235!2d64.42503959259032!3d39.77400290225746!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzI3LjUiTiA2NMKwMjUnMzEuMiJF!5e0!3m2!1sru!2s!4v1763551108997!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
