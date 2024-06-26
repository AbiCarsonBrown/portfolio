import "./Contact.scss";
import { Link } from "react-router-dom";
import Email from "../../assets/icons/Email.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import GitHub from "../../assets/icons/GitHub-footer.svg";

export default function Contact() {
  return (
    <footer className="contact">
      <div className="contact__container">
        <Link
          to="mailto:abigailbrown.25@gmail.com"
          className="contact__link contact__link--email"
        >
          <img src={Email} alt="Email icon" className="contact__icon" />
          <p className="contact__label">Email</p>
        </Link>
        <Link
          to="www.linkedin.com/in/abi-carson-brown"
          className="contact__link contact__link--in"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn icon"
            className="contact__icon contact__icon--in"
          />
          <p className="contact__label">LinkedIn</p>
        </Link>
        <Link
          to="https://github.com/AbiCarsonBrown"
          className="contact__link contact__link--git"
        >
          <img src={GitHub} alt="GitHub icon" className="contact__icon" />
          <p className="contact__label">GitHub</p>
        </Link>
      </div>
    </footer>
  );
}
