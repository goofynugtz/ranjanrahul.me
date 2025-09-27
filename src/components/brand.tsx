import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from '../styles/navbar.module.css'
import { SunMoon } from "./navbar";

const BrandBar = () => {
  return (
    <div className={styles.navbar} id='top'>
      <div className={styles.group}>
        <div className={styles.branding}>ranjanrahul</div>
        <div className={`${styles.social} ${styles.xs_hide}`}>
          <a href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div className={`${styles.social} ${styles.xs_hide}`}>
          <a href="https://github.com/goofynugtz" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className={`${styles.social} ${styles.xs_hide}`}>
          <a href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div className={`${styles.social} ${styles.xs_hide}`}>
          <a href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.group}>
        <div><SunMoon /></div>
      </div>
    </div>
  )
}

export default BrandBar
