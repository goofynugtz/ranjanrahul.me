import styles from './Navbar.module.scss';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { DarkMode } from 'use-dark-mode';

const navigation = (darkMode: DarkMode) => {
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.brand}><Link href="/">ranjanrahul</Link></div>
                <li className={styles.s}><Link href="/"><FaFacebookF /></Link></li>
                <li className={styles.s}><Link href="https://github.com/goofyNugtz"><FaGithub /></Link></li>
                <li className={styles.s}><Link href="/"><FaLinkedinIn /></Link></li>
                <li className={styles.s}><Link href="/"><FaDev /></Link></li>
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
