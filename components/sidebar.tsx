import Link from 'next/link';
import Circles from './assets/circles-vector';
import styles from '../styles/sidebar.module.css'
import { tabs } from '../config/navbar';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.glyphs}>
        <Circles />
      </div>
      {
        tabs.map((t) => {
          return (
            <Link href={t.uri} key={t.uri} className={styles.link}>{t.title}</Link>
          )
        })
      }
    </div>
  )
}

export default Sidebar
