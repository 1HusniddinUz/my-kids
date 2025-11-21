import React from "react";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import "../assets/About.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 20,
});
const About = () => {
  const { t } = useTranslation();

  return (
    <section id="About" className="about">
      <h1 data-aos="fade-up" data-aos-duration="500" className="about-title">
        {t(`aboutH3`)}
      </h1>

      <div className="container about-layout">
        {/* Chapdagi rasm */}
        <div className="about-image" data-aos="fade-right" data-aos-duration="500" >
          <img
            src={img1}
            alt="My Kids bolalar kiyimlari ishlab chiqarish jarayoni"
          />
        </div>

        {/* O‘rtadagi kartochka */}
        <div className="about-info">
          <h3 className="about-heading" data-aos="fade-up" data-aos-duration="600">{t(`jobInfo`)}</h3>
          <p className="about-text" data-aos="fade-up" data-aos-duration="700">{t`job`}</p>
          <p className="about-text" data-aos="fade-up" data-aos-duration="800">{t(`artistStory`)}</p>

          <a href="/contact">
            <button className="about-btn" data-aos="fade-up" data-aos-duration="900" >{t(`aboutBtn`)}</button>
          </a>
        </div>

        {/* O‘ngdagi rasm */}
        <div className="about-image" data-aos="fade-left" data-aos-duration="500">
          <img src={img2} alt="My Kids kolleksiyasidan bolalar kiyimlari" />
        </div>
      </div>
    </section>
  );
};

export default About;
