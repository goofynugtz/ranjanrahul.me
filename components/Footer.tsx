import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='group'>
                <span className='brand'>ranjanrahul</span>
                <div className='footerlinks'><a href="#top">Back to Top</a></div>
                <div className='footerlinks'><a href="/#expertise" >What I Do</a></div>
                <div className='footerlinks'><Link href="/blogs"><a>Blogs</a></Link></div>
                <div className='footerlinks'><a href="/" >Portfolio</a></div>
            </div>

            <div className='group'>
                <div><p className='footerlinks'>© Rahul R</p></div>
                <div className='social'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></div>
                <div className='social'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></div>
                <div className='social'><a href="/" rel="noreferrer"><FaLinkedinIn /></a></div>
                <div className='social'><a href="/" rel="noreferrer"><FaDev /></a></div>
            </div>
        </footer>
    )
}

export default Footer