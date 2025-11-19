// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import i18n from "i18next"; 
import { initReactI18next } from "react-i18next";
import translationsUz from "../locales/translationsUz";
import translationsTr from "../locales/translationsTr";
import translationsRu from "../locales/translationsRu";
import translationsFr from "../locales/translationsFr";
import translationsEn from "../locales/translationsEn";

import About from "../pages/About"
import Contacts from "../pages/Contacts";
import Footer from "../components/layout/Footer";
function App() {
  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
  });

  return (
    <BrowserRouter>
      <Header />
      {/* Asosiy kontent shu yerda chiqadi */}
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/products" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
