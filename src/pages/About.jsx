import React from "react";
import img1 from "../assets/images/b1.jpg";
import img2 from "../assets/images/b2.jpg";
import "../assets/About.css";
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();

  return (
    <section id="About" className="about">
      <h1 className="about-title">{t(`aboutH3`)}</h1>

      <div className="container about-layout">
        {/* Chapdagi rasm */}
        <div className="about-image">
          <img src={img1} alt="My Kids bolalar kiyimlari ishlab chiqarish jarayoni" />
        </div>

        {/* O‘rtadagi kartochka */}
        <div className="about-info">
          <h3 className="about-heading">
            {t(`jobInfo`)}
          </h3>
          <p className="about-text">
            {t`job`}
          </p>
          <p className="about-text">
            {t(`artistStory`)}
          </p>

          <a href="/contact"><button className="about-btn">{t(`aboutBtn`)}</button></a>
        </div>

        {/* O‘ngdagi rasm */}
        <div className="about-image">
          <img src={img2} alt="My Kids kolleksiyasidan bolalar kiyimlari" />
        </div>
      </div>
    </section>
  );
};

export default About;
