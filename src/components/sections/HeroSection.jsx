import { useTranslation } from "react-i18next";
import "../../assets/HeroSection.css";

const HeroSection = () => {

    const { t } = useTranslation();

  return (
    <div id="HeroSection">
      <div className="hero_text">
        <h1>{t(`heroSlogan`)}</h1>
      </div>
      <div className="hero_content"></div>
    </div>
  );
};

export default HeroSection;
