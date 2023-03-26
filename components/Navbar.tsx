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
        <div className='social xsm:hide'><a href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer"><FaFacebookF /></a></div>
        <div className='social xsm:hide'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></div>
        <div className='social xsm:hide'><a href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></div>
        <div className='social xsm:hide'><a href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer"><FaInstagram /></a></div>
      </div>  
      <div className='group right'>
        <Link href="/"><a className={router.pathname == "/" ? 'navlinks sm:hide active': 'navlinks sm:hide'}>/home</a></Link>
        <Link href="/aboutme"><a className={router.pathname == "/aboutme" ? 'navlinks sm:hide active': 'navlinks sm:hide'}>/aboutme</a></Link>
        <Link href="/projects"><a className={router.pathname == "/projects" || router.pathname == "/projects/[slug]" ? 'navlinks active' : 'navlinks'}>/projects</a></Link>
        <Link href="/blogs"><a className={router.pathname == "/blogs" || router.pathname == "/blogs/[slug]" ? 'navlinks active' : 'navlinks'}>/blog</a></Link>
        <Link href="https://drive.google.com/file/d/1iMSlEzPWvTFUPf9d_gAVogOCq6IQBeeO/view?usp=sharing"><a className='navlinks sm:hide'>/resume</a></Link>
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
    }}
    >
      <div>{mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
    </div>
  );
};
