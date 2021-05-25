import './Footer.scss';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer--left">
                <span className="footer--brand r-margin">ranjanrahul</span>
                <li><a href="/" className="footer--left footer__e footer__home">Back to Top</a></li>
                <li><a href="/" className="footer--left footer__e footer__skills">What I Do</a></li>
                <li><a href="/blog" className="footer--left footer__e footer__blog">Blog</a></li>
                <li><a href="/" className="footer--left footer__e footer__portfolio">Portfolio</a></li>
            </div>

            <div className="footer--right">
                <li><p className="footer__e">© Rahul R</p></li>
                <li className="nav__s"><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                <li className="nav__s"><a href="https://github.com/goofyNugtz" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li className="nav__s"><a href="/" rel="noreferrer"><FaLinkedinIn /></a></li>
                <li className="nav__s r-margin"><a href="/" rel="noreferrer"><FaDev /></a></li>
            </div>
        </div>
    )
}

export default Footer