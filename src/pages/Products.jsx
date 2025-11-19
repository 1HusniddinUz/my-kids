// Products.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/Products.css";

import n1 from "../assets/images/n1.jpg";
import n2 from "../assets/images/n2.jpg";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import k1 from "../assets/images/k1.jpg";
import k2 from "../assets/images/k2.jpg";
import m1 from "../assets/images/m1.jpg";
import m2 from "../assets/images/m2.jpg";
import m3 from "../assets/images/m3.jpg";
import q1 from "../assets/images/q1.jpg";
import q2 from "../assets/images/q2.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";

const formatPrice = (price) =>
  price.toLocaleString("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  });

const Products = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(4);

  // Har bir product uchun 2–3 tadan rasm
  const productData = [
    {
      id: 1,
      name: t("product1.name"),
      info: t("product1.info"),
      images: [n1, n2], // n1, n2 bitta product
      price: 75000,
    },
    {
      id: 2,
      name: t("product2.name"),
      info: t("product2.info"),
      images: [b1, b2, b3], // b1, b2, b3 bitta product
      price: 20000,
    },
    {
      id: 3,
      name: t("product3.name"),
      info: t("product3.info"),
      images: [c1, c2], // c1, c2
      price: 30000,
    },
    {
      id: 4,
      name: t("product4.name"),
      info: t("product4.info"),
      images: [g1, g2, g3], // g1, g2, g3
      price: 40000,
    },
    {
      id: 5,
      name: t("product5.name"),
      info: t("product5.info"),
      images: [k1, k2], // k1, k2
      price: 40000,
    },
    {
      id: 6,
      name: t("product6.name"),
      info: t("product6.info"),
      images: [m1, m2, m3], // m1, m2, m3
      price: 75000,
    },
    {
      id: 7,
      name: t("product7.name"),
      info: t("product7.info"),
      images: [q1, q2], // q1, q2
      price: 20000,
    },
    {
      id: 8,
      name: t("product8.name"),
      info: t("product8.info"),
      images: [s1, s2, s3], // s1, s2, s3
      price: 40000,
    },
  ];

  // Har bir cardda hozir qaysi rasm turganini saqlaymiz

  // { [productId]: index }
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const handleImageChange = (id, imagesLength) => {
    setCurrentImageIndex((prev) => {
      const prevIndex = prev[id] ?? 0;
      const nextIndex = (prevIndex + 1) % imagesLength;
      return { ...prev, [id]: nextIndex };
    });
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, productData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const isAllVisible = visibleCount >= productData.length;
  const isDefault = visibleCount === 4;

  return (
    <section id="Products" className="products">
      <div className="products-header">
        <h2>{t("productH3")}</h2>
        <p>{t("productsP")}</p>
      </div>

      <div className="products-grid">
        {productData.slice(0, visibleCount).map((item) => {
          const activeIndex = currentImageIndex[item.id] ?? 0;
          const activeImage =
            item.images[activeIndex] || item.images[0];

          return (
            <article className="product-card" key={item.id}>
              <div
                className="product-image-wrapper"
                onMouseEnter={() =>
                  handleImageChange(item.id, item.images.length)
                }
                onTouchStart={() =>
                  handleImageChange(item.id, item.images.length)
                }
              >
                <img src={activeImage} alt={item.name} loading="lazy" />
              </div>

              <div className="product-body">
                <div className="product-top">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-info">{item.info}</p>
                </div>
                <div className="product-bottom">
                  <span className="product-price">
                    {formatPrice(item.price)}
                  </span>
                  <button className="product-btn" type="button">
                    Batafsil
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="products-controls">
        {!isAllVisible && (
          <button
            type="button"
            className="toggle-btn primary"
            onClick={handleShowMore}
          >
            {t("productMore")}
          </button>
        )}

        {!isDefault && (
          <button
            type="button"
            className="toggle-btn secondary"
            onClick={handleShowLess}
          >
            {t("productClose")}
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
