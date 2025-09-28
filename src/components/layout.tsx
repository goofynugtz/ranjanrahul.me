import Footer from './footer';
import React from 'react';
import styles from '../styles/layout.module.css'
import DarkVeil from '../components/assets/dark-veil';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
        <DarkVeil warpAmount={5} scanlineFrequency={5} scanlineIntensity={1} />
        <div className={styles.main}>{children}</div>
        <footer className={styles.footer}><Footer /></footer>
      </div>
    </>
  )
}
