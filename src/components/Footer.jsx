import "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer" id="contact-footer">
      <div className="footer-content">
        <h2>Find My Pet</h2>
        <p>
          &copy; {new Date().getFullYear()} Find My Pet. Todos os direitos
          reservados.
        </p>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
        <div className="contact-info">
          <p>Email: contato@findmypet.com</p>
          <p>Telefone: (99) 9999-9999</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
