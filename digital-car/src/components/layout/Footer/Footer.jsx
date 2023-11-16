import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img
            src="/images/logoFooter.png"
            alt="logo"
            className="logo-footer"
          />
          <span>Copyright © 2023</span>
        </div>
        <div className="social-icon">
          <img
            src="/images/ico-facebook.png"
            alt="facebook"
            className="icon-media"
          />
          <img
            src="/images/ico-instagram.png"
            alt="instagram"
            className="icon-media"
          />
          <img
            src="/images/ico-tiktok.png"
            alt="tiktok"
            className="icon-media"
          />
          <img
            src="/images/ico-whatsapp.png"
            alt="whatsapp"
            className="icon-media"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
