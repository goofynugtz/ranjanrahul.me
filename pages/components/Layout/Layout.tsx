import Link from 'next/link'
import { useRouter } from 'next/router'
import useDarkMode, { DarkMode } from 'use-dark-mode';

import Navbar from '../Navbar';
import Footer from '../Footer';

//@ts-ignore
export default function Layout({ children }) {

    const darkMode:DarkMode = useDarkMode(true);

    return (
        <>
            <Navbar {...darkMode}/>
            <main className='main'>{children}</main>
            <Footer />
        </>
    )
}