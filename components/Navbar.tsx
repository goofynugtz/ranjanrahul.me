import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='nav' id='top'>
      <div className='group left'>
        <div className='brand'>ranjanrahul</div>
        <div className='social xsm:hide'><Link href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer"><FaFacebookF /></Link></div>
        <div className='social xsm:hide'><Link href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></Link></div>
        <div className='social xsm:hide'><Link href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer"><FaLinkedinIn /></Link></div>
        <div className='social xsm:hide'><Link href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer"><FaInstagram /></Link></div>
      </div>
      <div className='group right'>
        <Link href="/" className={router.pathname == "/" ? 'navlinks sm:hide active': 'navlinks sm:hide'}>/home</Link>
        <Link href="/aboutme" className={router.pathname == "/aboutme" ? 'navlinks sm:hide active': 'navlinks sm:hide'}>/aboutme</Link>
        <Link href="/projects" className={router.pathname == "/projects" || router.pathname == "/projects/[slug]" ? 'navlinks active' : 'navlinks'}>/projects</Link>
        <Link href="/blogs" className={router.pathname == "/blogs" || router.pathname == "/blogs/[slug]" ? 'navlinks active' : 'navlinks'}>/blog</Link>
        <Link href="https://drive.google.com/file/d/18m4vyIUN6NTPEHL3Ea2n2r43jD-9N2Ww/view?usp=share_link" className='navlinks sm:hide'>/resume</Link>
        <div><SunMoon /></div>
      </div>
    </div>
  )
}

export default Navbar

const SunMoon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <div className='navlinks' onClick={() => {
      console.log('trig')
      setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
      setMounted(mounted ? false : true)
    }}>
      <div>{mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
    </div>
  );
};
