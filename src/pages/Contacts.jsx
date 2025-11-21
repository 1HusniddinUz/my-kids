import { useState } from "react";
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

  // Forma uchun state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // input / textarea change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit bosilganda
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = form;

    // oddiy tekshiruv
    if (!firstName || !lastName || !email || !message) {
      alert("Iltimos, barcha maydonlarni toʻldiring!");
      return;
    }

    const to = "jumayevaa09@gmail.com"; // xabar boradigan pochta
    const subject = "Sayt orqali xabar yuborildi";
    const fullName = `${firstName} ${lastName}`;

    const body =
      `Assalomu alaykum!\n\n` +
      `Ism-familya: ${fullName}\n` +
      `Email: ${email}\n\n` +
      `Xabar:\n${message}`;

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Gmail compose ni yangi tabda ochish
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // formani tozalash
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="Contacts" className="contacts">
      <div className="container contacts-inner">
        <div className="contact_text">
          <h2 data-aos="fade-up" data-aos-duration="500">
            {t(`contactH2Title`)}
          </h2>
        </div>

        {/* FORM */}
        <form className="contact_form" onSubmit={handleSubmit}>
          {/* Name */}
          <div
            className="form_group"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <label htmlFor="firstName">{t(`nameInput`)}</label>
            <div className="name_row">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={t(`firstNamePlaceholder`)}
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={t(`lastNamePlaceholder`)}
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div
            className="form_group"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <label htmlFor="email">{t(`emailInput`)}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div
            className="form_group"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <label htmlFor="message">{t(`messageInput`)}</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder=""
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form_actions">
            <button
              type="submit"
              className="contact_btn"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              {t(`submitBtn`)}
            </button>
          </div>
        </form>
      </div>

      <div className="location_box">
        <h3 data-aos="fade-up" data-aos-duration="900">
          {t(`contactH2`)}
        </h3>
        <p data-aos="fade-up" data-aos-duration="900">
          {t(`contactAddress`)}
        </p>

        <div
          className="map_wrapper"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
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
