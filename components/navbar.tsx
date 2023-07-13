import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { useRouter } from "next/router";
import styles from '../styles/navbar.module.css'
import { tabs } from '../config/navbar';
import { tab } from "../interface";

const Navbar = () => {
  const router = useRouter();

  const handleActiveHighlights = (t: tab) => {
    if (router.pathname === t.uri)
      return `${styles.link} ${styles.s_hide} ${styles.active}`
    else
      return `${styles.link} ${styles.s_hide}`
  }

  return (
    <div className={styles.navbar} id='top'>
      <div className={styles.group}>
        <div className={styles.branding}>
          <Link href="/">ranjanrahul</Link>
        </div>
        <div className={`${styles.social} ${styles.hidden}`}>
          <Link href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer"><FaFacebookF /></Link>
        </div>
        <div className={`${styles.social} ${styles.hidden}`}><Link href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></Link></div>
        <div className={`${styles.social} ${styles.hidden}`}><Link href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer"><FaLinkedinIn /></Link></div>
        <div className={`${styles.social} ${styles.hidden}`}><Link href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer"><FaInstagram /></Link></div>
      </div>
      <div className={styles.group}>
        {
          tabs.map((t) => {
            return (
              <Link href={t.uri} key={t.uri} className={handleActiveHighlights(t)}>{t.title}</Link>
            )
          })
        }
        <div><SunMoon /></div>
      </div>
    </div>
  )
}

export default Navbar

const SunMoon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <div className={styles.link} onClick={() => {
      console.log('trig')
      setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
      setMounted(mounted ? false : true)
    }}>
      <div>{mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
    </div>
  );
};
