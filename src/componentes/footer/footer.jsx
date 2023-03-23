import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
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
                    <div className="sb_footer-links-div">
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
                </div>
            </div>
            <p>© 2021 - Todos los derechos reservados</p>
        </div>
    )
}

export default Footer