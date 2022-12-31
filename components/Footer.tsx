import copyleft from '@iconify/icons-ri/copyleft-fill';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { FaDev, FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='group'>
        <span className='brand'>ranjanrahul</span>
        <div className='footerlinks m:hide'><a href="#top">Back to Top</a></div>
        <div className='footerlinks m:hide'><Link href="/#expertise" >What I Do</Link></div>
        <div className='footerlinks m:hide'><Link href="/blogs"><a>Blogs</a></Link></div>
        <div className='footerlinks m:hide'><Link href="/" >Portfolio</Link></div>
      </div>

      <div className='group'>
        <div className="copyleft">
          <div className="copyleft-icon">
            <Icon icon={copyleft} />
          </div>
          <div className="copyleft-text">
            <p className="light-grey">All wrongs reserved</p>
            <p className="blue">Rahul R</p>
          </div>
        </div>
        <div className='social sm:hide'><a href="https://www.facebook.com/ranjan.rahul.25/" target="_blank" rel="noreferrer"><FaFacebookF /></a></div>
        <div className='social sm:hide'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></div>
        <div className='social sm:hide'><a href="https://www.linkedin.com/in/ranjanrahul42/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></div>
        <div className='social sm:hide'><a href="https://www.instagram.com/goofynugtz/" target="_blank" rel="noreferrer"><FaInstagram /></a></div>
        {/* <div className='social sm:hide'><Link href="/" passHref><FaDev /></Link></div> */}
      </div>
    </footer>
  )
}

export default Footer