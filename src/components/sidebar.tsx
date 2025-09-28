import Link from 'next/link';
import styles from '../styles/sidebar.module.css'
import { tabs } from '../config/navbar';
import MagnetLines from './assets/magnet-lines';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.glyphs}>
        <MagnetLines
          rows={9}
          columns={13}
          containerSize="70vmin"
          lineColor="#efefef1a"
          lineWidth=".6vmin"
          lineHeight="5vmin"
          baseAngle={-10}
          style={{}}
        />
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
