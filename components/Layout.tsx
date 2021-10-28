import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';


export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}