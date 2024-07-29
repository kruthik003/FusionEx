import styles from "./styles.module.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.main_footer}>
          <div className={styles.logo}>
            <img src="/Logo Transparent.svg" alt="" />
          </div>
          <div className={styles.portion}>
            <div className={styles.links}>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/events"}>Events</Link>
              <Link to={"/chief_guests"}>Chief Guests</Link>
              <Link to={"/partners"}>Partners</Link>
            </div>
          </div>
          <div className={styles.links_sm}>
            <a href="https://www.instagram.com/fusionex_2024/">
              <FaInstagram />
            </a>
            <a href="https://www.instagram.com/fusionex_2024/">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>@FusionEx 2024</div>
      </div>
    </div>
  );
};

export default Footer;
