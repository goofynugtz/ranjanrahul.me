import styles from './Navbar.module.scss';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { DarkMode } from 'use-dark-mode';

const navigation = (darkMode: DarkMode) => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.brand}>ranjanrahul</div>
                <li className={styles.s}><FaFacebookF /></li>
                <li className={styles.s}><FaGithub /></li>
                <li className={styles.s}><FaLinkedinIn /></li>
                <li className={styles.s}><FaDev /></li>
            </div>
            <div className={styles.right}>
                <li><Link href="/"><a className={styles.e}>Home</a></Link></li>
                <li><Link href="/skills"><a className={styles.e}>What I Do</a></Link></li>
                <li><Link href="/blogs"><a className={styles.e}>Blog</a></Link></li>
                <li><Link href="/portfolio"><a className={styles.e}>Portfolio</a></Link></li>
                <li><SunMoon {...darkMode} /></li>
                
            </div>
        </div>
    )
}

export default navigation

const SunMoon = (darkMode: DarkMode) => {
    return (
      <div className={styles.e} onClick={darkMode.toggle}>
        <div>{darkMode.value ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
      </div>
    );
  };
