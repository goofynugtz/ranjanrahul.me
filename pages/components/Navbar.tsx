import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { DarkMode } from 'use-dark-mode';

const navigation = (darkMode: DarkMode) => {
    return (
        <div className='nav' id='top'>
            <div className='group left'>
                <div className='brand'>ranjanrahul</div>
                <li className='social'><FaFacebookF /></li>
                <li className='social'><FaGithub /></li>
                <li className='social'><FaLinkedinIn /></li>
                <li className='social'><FaDev /></li>
            </div>
            <div className='group right'>
                <li><Link href="/"><a className='navlinks'>Home</a></Link></li>
                <li><Link href="/#expertise"><a className='navlinks'>What I Do</a></Link></li>
                <li><Link href="/blogs"><a className='navlinks'>Blog</a></Link></li>
                <li><Link href="/portfolio"><a className='navlinks'>Portfolio</a></Link></li>
                <li><SunMoon {...darkMode} /></li>
                
            </div>
        </div>
    )
}

export default navigation

const SunMoon = (darkMode: DarkMode) => {
    return (
      <div className='navlinks' onClick={darkMode.toggle}>
        <div>{darkMode.value ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
      </div>
    );
  };
