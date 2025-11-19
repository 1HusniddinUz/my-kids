import React from "react";
import img1 from "../assets/images/b1.jpg";
import img2 from "../assets/images/b2.jpg";
import "../assets/About.css";

const About = () => {
  return (
    <section id="About" className="about">
      <h1 className="about-title">Craftsmanship Meets Passion</h1>

      <div className="container about-layout">
        {/* Chapdagi rasm */}
        <div className="about-image">
          <img src={img1} alt="My Kids bolalar kiyimlari ishlab chiqarish jarayoni" />
        </div>

        {/* O‘rtadagi kartochka */}
        <div className="about-info">
          <h3 className="about-heading">
            Biz «MY KIDS». Bolalar uchun sifatli va qulay kiyim-kechaklar ishlab
            chiqaruvchi mahalliy brendmiz.
          </h3>
          <p className="about-text">
            «MY KIDS» brendi o‘z faoliyatini 2014 yildan boshlab, bolalar uchun
            zamonaviy va qulay kiyim-kechaklar ishlab chiqarishga ixtisoslashgan.
            Asosiy yo‘nalishimiz sport uslubidagi kostyumlar (sportivka),
            pijamalar, shortiklar va futbolkalar kabi har kuni kiyishga mos,
            puxta va ishonchli mahsulotlardan iborat.
          </p>
          <p className="about-text">
            Bizning maqsadimiz bolalarga ham shahar uslubiga mos, ham uy
            sharoitida o‘zini erkin his qiladigan, sifatli va xavfsiz kiyimlarni
            taklif etishdir. Har bir model bolalar yoshi, faolligi va kundalik
            ehtiyojlarini inobatga olgan holda, zamonaviy dizayn va amaliylik
            uyg‘unligida ishlab chiqiladi.
          </p>

          <a href="/contact"><button className="about-btn">Biz bilan bog'lanish</button></a>
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
