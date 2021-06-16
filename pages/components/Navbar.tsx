import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { DarkMode } from 'use-dark-mode';

const navigation = (darkMode: DarkMode) => {
    return (
        <div className='nav'>
            <div className='left'>
                <div className='brand'>ranjanrahul</div>
                <li className='s'><FaFacebookF /></li>
                <li className='s'><FaGithub /></li>
                <li className='s'><FaLinkedinIn /></li>
                <li className='s'><FaDev /></li>
            </div>
            <div className='right'>
                <li><Link href="/"><a className='e'>Home</a></Link></li>
                <li><Link href="/#expertise"><a className='e'>What I Do</a></Link></li>
                <li><Link href="/blogs"><a className='e'>Blog</a></Link></li>
                <li><Link href="/portfolio"><a className='e'>Portfolio</a></Link></li>
                <li><SunMoon {...darkMode} /></li>
                
            </div>
        </div>
    )
}

export default navigation

const SunMoon = (darkMode: DarkMode) => {
    return (
      <div className='e' onClick={darkMode.toggle}>
        <div>{darkMode.value ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
      </div>
    );
  };
