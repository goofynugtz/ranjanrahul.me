import Link from 'next/link';
import Circles from './assets/circles-vector';
import styles from '../styles/sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.glyphs}>
        <Circles />
      </div>
      <Link href="/#home" className={styles.link}>/home</Link>
      <Link href="/aboutme" className={styles.link}>/aboutme</Link>
      <Link href="/projects" className={styles.link}>/projects</Link>
      <Link href="/blogs" className={styles.link}>/blog</Link>
      <Link href="https://drive.google.com/file/d/18m4vyIUN6NTPEHL3Ea2n2r43jD-9N2Ww/view?usp=share_link" className={styles.link}>/resume</Link>
    </div>
  )
}

export default Sidebar
