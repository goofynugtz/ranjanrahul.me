import Footer from './footer';
import React from 'react';
import styles from '../styles/layout.module.css'

export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}><Footer /></footer>
    </>
  )
}
