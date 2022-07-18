import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Circles from './assets/CirclesVector';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className='header' id='header'>
      <div className='circles'>
        <Circles />
      </div>
      <div className='intro'>
        <span>Hello,</span>
        <h1>I&rsquo;m Rahul</h1>
      </div>
      <div className='subtitle'>
        A Developer and Front-End enthusiast
        <br />
        <div className='grid-2x2'>
          <span className='emoticon'>🚀</span>
          <span>Exploring opportunities </span>
          <span className='emoticon'>🎓</span>
          <span>Sophomore year undergrad from National Institute of Technology, Durgapur.</span>
        </div>
      </div>
      <div className='contact-buttons'>
        <a href='https://github.com/goofyNugtz' target="_blank">
          <button>
            <FaGithub className='icon' /> <span>Github</span> 
          </button>
        </a>
        <a href='https://www.linkedin.com/in/ranjanrahul42/' target="_blank"> 
          <button>
            <FaLinkedinIn className='icon' /> <span>LinkedIn</span> 
          </button>
        </a>
        <a href='mailto:rahulranjan25.RR@gmail.com' target="_blank"> 
          <button>
            <MdEmail className='icon' /><span>Email</span> 
          </button>
        </a>
      </div>
    </div>
  )
}

export default Header