import { SiMailDotRu } from 'react-icons/si'

const Header:React.FC = () => {
    return (
        
        <div className='header' id='header'>
            <div className='intro'>
            <span>Hello,</span>
            <h1>I’m Rahul</h1>
            </div>
            <p>I am freshman year undergrad from National Institute of Technology, Durgapur. I'm currently interested in Web Development, Web Designs (UI/UX) and also <a 
            className='' href="https://www.stopstalk.com/user/profile/goofyNugtz" target="_blank" rel="noreferrer">Competitive Programing</a> but rarely.</p>
            <button>
                <SiMailDotRu className='icon'/> Contact Me
            </button>
        </div>
    )
}

export default Header