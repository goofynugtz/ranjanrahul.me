import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Header: React.FC = () => {
    return (
        <div className='header' id='header'>
            <div className='intro'>
                <span>Hello,</span>
                <h1>I’m Rahul</h1>
            </div>
            <div className='subtitle'>
                A Developer and Front-End enthusiast
                <br />
                <div className='grid-2x2'>
                    <span className='emoticon'>🚀</span>
                    <span>Exploring opportunities </span>
                    <span className='emoticon'>🎓</span>
                    <span>Freshman year undergrad from National Institute of Technology, Durgapur.</span>
                </div>
            </div>
            <div className='contact-buttons'>
                <button>
                    <a href='https://github.com/goofyNugtz'>
                        <FaGithub className='icon' /> <span>Github</span>
                    </a>
                </button>
                <button>
                    <a>
                        <FaLinkedinIn className='icon' /> <span>LinkedIn</span>
                    </a>
                </button>
                <button>
                    <a>
                        <MdEmail className='icon' /><span>Email</span>
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Header