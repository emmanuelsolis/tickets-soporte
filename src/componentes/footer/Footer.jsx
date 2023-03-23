import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_heading">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Para empresas</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/resources">
              <p>Resources</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Socios</h4>
            <a href="/partners">
              <p>Partners</p>
            </a>
            <a href="/affiliate">
              <p>Affiliate</p>
            </a>
            <a href="/affiliate">
              <p>Developers</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Legal</h4>
            <a href="/terms">
              <p>Terms of Service</p>
            </a>
            <a href="/privacy">
              <p>Privacy Policy</p>
            </a>
            <a href="/cookie">
              <p>Cookie Policy</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Proximamente</h4>
            <div className="socialmedia">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>© @{new Date().getFullYear()} MAPPS S.A. de C.V. Todos los derechos reservados</p>
        </div>
        <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terminos y condiciones</p></div></a>
            <a href="/privacidad"><div><p>Privacidad</p></div></a>
            <a href="/seguridad"><div><p>Seguridad</p></div></a>
            <a href="/cookie"><div><p>Politica de Cookies</p></div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
