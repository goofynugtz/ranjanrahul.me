import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='left'>
                <span className='brand'>ranjanrahul</span>
                <li className='e'><a href="/">Back to Top</a></li>
                <li className='e'><a href="/" >What I Do</a></li>
                <li className='e'><a href="/blog" >Blog</a></li>
                <li className='e'><a href="/" >Portfolio</a></li>
            </div>

            <div className='right'>
                <li><p className='e'>© Rahul R</p></li>
                <li className='s'><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                <li className='s'><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li className='s'><a href="/" rel="noreferrer"><FaLinkedinIn /></a></li>
                <li className='s'><a href="/" rel="noreferrer"><FaDev /></a></li>
            </div>
        </footer>
    )
}

export default Footer