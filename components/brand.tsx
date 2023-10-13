import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import styles from '../styles/navbar.module.css'

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
          <a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer">
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

const SunMoon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <div className='navlinks' onClick={() => {
      console.log('trig')
      setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
      setMounted(mounted ? false : true)
    }}
    >
      <div>{
        mounted && (theme === 'dark' || resolvedTheme === 'dark') ?
          <FiSun color={'#ffc107'} />
          :
          <FiMoon />}</div>
    </div>
  );
};
