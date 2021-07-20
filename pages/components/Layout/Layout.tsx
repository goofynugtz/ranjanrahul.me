import useDarkMode, { DarkMode } from 'use-dark-mode';

import Head from 'next/head';

import Navbar from '../Navbar';
import Footer from '../Footer';
import React from 'react';


export default function Layout({ children }: any) {

    const darkMode: DarkMode = useDarkMode(true);

    return (
        <>
            <Head>
                <link
                    rel='preload'
                    href='fonts/SFPro/sfpro-text-regular.ttf'
                    as='font'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='fonts/SFPro/sfpro-display-regular.ttf'
                    as='font'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='fonts/Overpass/overpass-regular.ttf'
                    as='font'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href='fonts/SFPro/sfmono-regular.ttf'
                    as='font'
                    crossOrigin=''
                />
            </Head>
            <Navbar {...darkMode} />
            <main className='main'>{children}</main>
            <Footer />
        </>
    )
}