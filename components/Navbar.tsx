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
        <div className='social xsm:hide'><a href="https://www.facebook.com/ranjan.rahul.25/" target="_blank"><FaFacebookF /></a></div>
        <div className='social xsm:hide'><a href="https://github.com/goofyNugtz" target="_blank"><FaGithub /></a></div>
        <div className='social xsm:hide'><a href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank"><FaLinkedinIn /></a></div>
        {/* <div className='social xsm:hide'><FaDev /></div> */}
      </div>
      <div className='group right'>
        <Link href="/"><a className='navlinks sm:hide'>/home</a></Link>
        <Link href="/#aboutme"><a className='navlinks sm:hide'>/aboutme</a></Link>
        {/* <Link href="/listening"><a className='navlinks sm:hide'>/listening</a></Link> */}
        <Link href="/blogs"><a className='navlinks'>/blog</a></Link>
        <Link href="https://drive.google.com/file/d/1whcFGlYTHXtly96Wp65z_TjmVARNZgZt/view?usp=sharing"><a className='navlinks sm:hide'>/portfolio</a></Link>
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
