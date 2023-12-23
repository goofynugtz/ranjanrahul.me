import copyleft from '@iconify/icons-ri/copyleft-fill';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from '../styles/footer.module.css'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.group}>
        <span className={styles.branding}>ranjanrahul</span>
        <div className={`${styles.link} ${styles.m_hide}`}><Link href="#top">Back to Top</Link></div>
        <div className={`${styles.link} ${styles.m_hide}`}><Link href="/aboutme" >What I Do</Link></div>
        <div className={`${styles.link} ${styles.m_hide}`}><Link href="/blogs">Blogs</Link></div>
        <div className={`${styles.link} ${styles.m_hide}`}><Link href="/" >Portfolio</Link></div>
      </div>

      <div className={styles.group}>
        <div className={styles.copyleft}>
          <div className={styles.icon}>
            <Icon icon={copyleft} />
          </div>
          <div className={styles.text}>
            <p className={styles.grey}>All wrongs reserved</p>
            <p className={styles.blue}>Rahul R</p>
          </div>
        </div>
        <div className={`${styles.social} ${styles.m_hide}`}>
          <Link href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer"><FaFacebookF /></Link>
        </div>
        <div className={`${styles.social} ${styles.m_hide}`}>
          <Link href="https://github.com/goofynugtz" target="_blank" rel="noreferrer"><FaGithub /></Link>
        </div>
        <div className={`${styles.social} ${styles.m_hide}`}>
          <Link href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer"><FaLinkedinIn /></Link>
        </div>
        <div className={`${styles.social} ${styles.m_hide}`}>
          <Link href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer"><FaInstagram /></Link>
        </div>
        {/* <div className={`${styles.social} ${styles.m_hide}`}>
        <Link href="/" passHref><FaDev /></Link>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
