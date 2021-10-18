import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

const Navbar = () => {

  return (
    <div className='nav' id='top'>
      <div className='group left'>
        <div className='brand'>ranjanrahul</div>
        <div className='social xsm:hide'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></div>
        <div className='social xsm:hide'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></div>
        <div className='social xsm:hide'><FaLinkedinIn /></div>
        <div className='social xsm:hide'><FaDev /></div>
      </div>
      <div className='group right'>
        <div><Link href="/"><a className='navlinks sm:hide'>Home</a></Link></div>
        <div><Link href="/#aboutme"><a className='navlinks sm:hide'>About Me</a></Link></div>
        <div><Link href="/blogs"><a className='navlinks sm:hide'>Blog</a></Link></div>
        <div><Link href="/portfolio"><a className='navlinks'>Portfolio</a></Link></div>
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

  // if (!mounted) return null;

  return (
    <div className='navlinks' onClick={() => {
      console.log('trig')
      setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
      setMounted(mounted ? false : true)
    }}
    >
      <div>{mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
    </div>
  );
};
