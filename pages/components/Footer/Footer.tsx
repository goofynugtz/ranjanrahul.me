import styles from './Footer.module.scss';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <span className={styles.brand}>ranjanrahul</span>
                <li className={styles.e}><a href="/">Back to Top</a></li>
                <li className={styles.e}><a href="/" >What I Do</a></li>
                <li className={styles.e}><a href="/blog" >Blog</a></li>
                <li className={styles.e}><a href="/" >Portfolio</a></li>
            </div>

            <div className={styles.right}>
                <li><p className={styles.e}>© Rahul R</p></li>
                <li className={styles.s}><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                <li className={styles.s}><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li className={styles.s}><a href="/" rel="noreferrer"><FaLinkedinIn /></a></li>
                <li className={styles.s}><a href="/" rel="noreferrer"><FaDev /></a></li>
            </div>
        </footer>
    )
}

export default Footer