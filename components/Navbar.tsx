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
                <div className='social'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></div>
                <div className='social'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></div>
                <div className='social'><FaLinkedinIn /></div>
                <div className='social'><FaDev /></div>
            </div>
            <div className='group right'>
                <div><Link href="/"><a className='navlinks'>Home</a></Link></div>
                <div><Link href="/#expertise"><a className='navlinks'>What I Do</a></Link></div>
                <div><Link href="/blogs"><a className='navlinks'>Blog</a></Link></div>
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
