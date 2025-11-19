import "../../assets/Copyright.css"


const Copyright = () => {
  return (
    <footer id="Copyright" className="copyright">
      <div className="container copyright-inner">
        <div className="copy_links">
          <a
            href="https://t.me/Nabiyevnaaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://instagram.com/jumayevaazi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="mailto:jumayevaa09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div className="copy_text">
          <span className="copy_main">
            © {new Date().getFullYear()}{" "}
            <a href="https://t.me/buxoro_tadbirkorlar_klubi" target="_blank" rel="noopener noreferrer" className="copy_brand">Buxoro tadbirkorlar biznes klubi</a>
          </span>
          <span className="copy_sub">
            Biznesingizni biz bilan barpo eting
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
