import { useTranslation } from "react-i18next";
import "../../assets/HeroSection.css";
import AOS from "aos";  
import "aos/dist/aos.css";
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 20,
});
const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="HeroSection">
      <div className="hero_text">
        <h1 data-aos="fade-up" data-aos-delay="400">
          {t(`heroSlogan`)}
        </h1>
      </div>
      <div className="hero_content" data-aos="fade-up" data-aos-delay="400"></div>
    </div>
  );
};

export default HeroSection;
