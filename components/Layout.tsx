import Footer from './Footer';
import React from 'react';

export default function Layout({ children }: any) {
  return (
    <>
      <main className='main'>{children}</main>
      <footer className='footer-hero'><Footer /></footer>
    </>
  )
}