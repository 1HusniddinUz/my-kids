import "../../assets/Copyright.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 20,
});

const Copyright = () => {
  return (
    <footer id="Copyright" className="copyright">
      <div className="container copyright-inner">
        <div className="copy_links">
          <a
            data-aos="fade-left"
            data-aos-duration="500"
            href="https://t.me/Nabiyevnaaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="700"
            href="https://instagram.com/jumayevaazi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="900"
            href="mailto:jumayevaa09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div className="copy_text">
          <span
            className="copy_main"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            © {new Date().getFullYear()}{" "}
            <a
              href="https://t.me/buxoro_tadbirkorlar_klubi"
              target="_blank"
              rel="noopener noreferrer"
              className="copy_brand"
            >
              Buxoro tadbirkorlar biznes klubi
            </a>
          </span>
          <span className="copy_sub" data-aos="fade-right" data-aos-duration="700">Biznesingizni biz bilan barpo eting</span>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
