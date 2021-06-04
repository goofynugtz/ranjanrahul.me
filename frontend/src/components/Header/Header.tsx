import './Header.scss';

const Header:React.FC = () => {
    return (
        <div className="header">
            <div className="background"></div>
            <div className="background-overlay"></div>
            <p className="txt txt--hello mg-top">Hello, I'm</p>
            <p className="txt txt--name">RAHUL RANJAN</p>
            <p className="intro">I am freshman year undergrad from National Institute of Technology, Durgapur. I'm currently interested in Web Development, Web Designs (UI/UX) and also <a 
            className="link" href="https://www.stopstalk.com/user/profile/goofyNugtz" target="_blank" rel="noreferrer">Competitive Programing</a> at times.
            </p>
            <p></p>
            <button className="button mg-top-small mg-down">
                <i className="fas fa-at"></i>
                Contact Me
            </button>
        </div>
    )
}

export default Header