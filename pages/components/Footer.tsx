import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='group'>
                <span className='brand'>ranjanrahul</span>
                <li className='footerlinks'><a href="#top">Back to Top</a></li>
                <li className='footerlinks'><a href="/" >What I Do</a></li>
                <li className='footerlinks'><a href="/blogs" >Blogs</a></li>
                <li className='footerlinks'><a href="/" >Portfolio</a></li>
            </div>

            <div className='group'>
                <li><p className='footerlinks'>© Rahul R</p></li>
                <li className='social'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                <li className='social'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li className='social'><a href="/" rel="noreferrer"><FaLinkedinIn /></a></li>
                <li className='social'><a href="/" rel="noreferrer"><FaDev /></a></li>
            </div>
        </footer>
    )
}

export default Footer