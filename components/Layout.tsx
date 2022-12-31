import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
import BrandNavbar from './BrandNav';

export default function Layout({ children }: any) {
  return (
    <>
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}