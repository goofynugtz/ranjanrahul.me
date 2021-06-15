import Link from 'next/link'
import { useRouter } from 'next/router'
import useDarkMode, { DarkMode } from 'use-dark-mode';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

//@ts-ignore
export default function Layout({ children }) {

    const darkMode:DarkMode = useDarkMode(true);

    return (
        <div className=''>
            <Navbar {...darkMode}/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}