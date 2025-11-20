import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png"
const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(false); // dropdown holati (faqat mobile/tablet)
  const { t , i18n } = useTranslation(); // t ishlatmayapsan, faqat i18n kerak

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const scrollPercent = scrollTop / (docHeight - winHeight);
      setIsBlurred(scrollPercent >= 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Burger yopilganda dropdown ham yopilsin
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMarketOpen(false);
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMarketOpen(false);
  };

  // Dropdownni faqat mobile / tablet (<=900px) da click bilan ochamiz
  const toggleMarketplaces = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 900) {
      setIsMarketOpen((prev) => !prev);
    }
  };

  // NavLink uchun umumiy className helper (active underline va hokazo)
  const navLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav
      className={`${isBlurred ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="container">
        <div className="logo_box">
          <NavLink to="/" className={navLinkClass} onClick={handleLinkClick}>
            <img src={logo} alt="MY KIDS LOGOTIP" loading="lazy" />
          </NavLink>
        </div>

        <div className="nav_links">
          {/* Burger faqat responsive uchun ishlaydi */}
          <button
            type="button"
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={isMenuOpen ? "open" : ""}>
            {/* HOME */}
            <li>
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                {t(`home`)}
              </NavLink>
            </li>

            {/* PRODUCTS / GALLERY sahifasi */}
            {/* <li>
              <NavLink
                to="/products"
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                products
              </NavLink>
            </li> */}

            {/* MARKETPLACES DROPDOWN (external links qoladi <a>) */}
            <li
              className={`has-dropdown ${isMarketOpen ? "open-dropdown" : ""}`}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={toggleMarketplaces}
                aria-haspopup="true"
                aria-expanded={isMarketOpen}
              >
                Marketplaces
                <span className="dropdown-arrow" />
              </button>

              <ul className={`dropdown-menu ${isMarketOpen ? "show" : ""}`}>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Ozon
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Uzum Market
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Wildberries
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Yandex Market
                  </a>
                </li>
              </ul>
            </li>

            {/* ABOUT */}
            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                {t(`about`)}
              </NavLink>
            </li>

            {/* CONTACT */}
            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={handleLinkClick}
              >
                {t(`contact`)}
              </NavLink>
            </li>

            {/* MOBILE / TABLET LANG SELECT (navbar ichida) */}
            <li className="lang_provider_mobile">
              <select
                id="select"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue="uz"
              >
                <option value="uz">🇺🇿 O'zbek</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="en">🇬🇧 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </li>
          </ul>
        </div>

        {/* DESKTOP LANG PROVIDER */}
        <div className="lang_provider">
          <select
            id="select"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue="uz"
          >
            <option value="uz">🇺🇿 O'zbek</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
