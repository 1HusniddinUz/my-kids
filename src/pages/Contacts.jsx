
import "../assets/Contacts.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 20,
});
const Contacts = () => {

    const { t } = useTranslation();

  return (
    <section id="Contacts" className="contacts">
      <div className="container contacts-inner">
        <div className="contact_text">
          <h2 data-aos="fade-up" data-aos-duration="500">{t(`contactH2Title`)}</h2>
          {/* <p>
            Ready to bring your vision to life? Let&apos;s connect and create
            something extraordinary together!
          </p> */}
        </div>

        <form className="contact_form">
          {/* Name */}
          <div className="form_group" data-aos="fade-up" data-aos-duration="500">
            <label htmlFor="firstName">{t(`nameInput`)}</label>
            <div className="name_row" >
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t(`firstNamePlaceholder`)}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={t(`lastNamePlaceholder`)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="form_group" data-aos="fade-up" data-aos-duration="700">
            <label htmlFor="email">{t(`emailInput`)}</label>
            <input type="email" id="email" name="email" placeholder="" />
          </div>

          {/* Message */}
          <div className="form_group" data-aos="fade-up" data-aos-duration="900">
            <label htmlFor="message">{t(`messageInput`)}</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder=""
            ></textarea>
          </div>

          <div className="form_actions">
            <button type="submit" className="contact_btn" data-aos="fade-up" data-aos-duration="900">
              {t(`submitBtn`)}
            </button>
          </div>
        </form>
      </div>

      <div className="location_box">
        <h3 data-aos="fade-up" data-aos-duration="900">{t(`contactH2`)}</h3>
        <p data-aos="fade-up" data-aos-duration="900">{t(`contactAddress`)}</p>

        <div className="map_wrapper" data-aos="fade-up" data-aos-duration="1200">
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
