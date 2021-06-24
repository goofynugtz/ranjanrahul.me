import useDarkMode, { DarkMode } from 'use-dark-mode';

import Navbar from '../Navbar';
import Footer from '../Footer';
import React from 'react';


export default function Layout({ children }: any) {

    const darkMode:DarkMode = useDarkMode(true);

    return (
        <>
            <Navbar {...darkMode}/>
            <main className='main'>{children}</main>
            <Footer />
        </>
    )
}