import Head from 'next/head'
import Layout from '../components/layout';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Sidebar from '../components/sidebar';
import Brand from '../components/brand';
import Link from 'next/link';
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rahul Ranjan</title>
      </Head>
      <Layout>
        <Brand />
        <div className={styles.header}>
          <Sidebar />
          <div className={styles.right} id='home'>
            <div className={styles.introduction}>
              <span>Hello,</span>
              <h1>I&rsquo;m Rahul</h1>
            </div>
            <div className={styles.subtitle}>
              A backend dev && machine / deep learning enthusiast.
              <br />
              <div className={styles.grid}>
                <span className={styles.emoticon}>🎓</span>
                <span>Final year undergraduate from National Institute of Technology, Durgapur.</span>
                <span className={styles.emoticon}>🚀</span>
                <span>Exploring opportunities </span>
              </div>
            </div>
            <div className={styles.contacts}>
              <Link href='https://github.com/goofynugtz' target="_blank" rel="noreferrer">
                <button>
                  <FaGithub className={styles.icon} /> <span>Github</span>
                </button>
              </Link>
              <Link href='https://www.linkedin.com/in/ranjanrahul42/' target="_blank" rel="noreferrer">
                <button>
                  <FaLinkedinIn className={styles.icon} /> <span>LinkedIn</span>
                </button>
              </Link>
              <Link href='mailto:rahulranjan25.RR@gmail.com' target="_blank" rel="noreferrer">
                <button>
                  <MdEmail className={styles.icon} /><span>Email</span>
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="profile">
          <Image src={Profile} width={256} height={256} quality={100} objectFit={'cover'}/>
        </div> */}
        </div>
      </Layout>
    </>
  )
}
