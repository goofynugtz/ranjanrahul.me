import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import VerticalNavbar from '../components/VerticalNavbar';
import BrandNavbar from './BrandNav';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
    <BrandNavbar />
    <div className="header">
      <VerticalNavbar />
      <div className='header-view' id='home'>
        <div className='intro'>
          <span>Hello,</span>
          <h1>I&rsquo;m Rahul</h1>
        </div>
        <div className='subtitle'>
          A Front-end && Machine Learning Enthusiast
          <br />
          <div className='grid-2x2'>
            <span className='emoticon'>🎓</span>
            <span>Pre-Final year undergrad from National Institute of Technology, Durgapur.</span>
            <span className='emoticon'>🚀</span>
            <span>Exploring opportunities </span>
          </div>
        </div>
        <div className='contact-buttons'>
          <Link href='https://github.com/goofyNugtz' target="_blank" rel="noreferrer">
            <button>
              <FaGithub className='icon' /> <span>Github</span>
            </button>
          </Link>
          <Link href='https://www.linkedin.com/in/ranjanrahul42/' target="_blank" rel="noreferrer">
            <button>
              <FaLinkedinIn className='icon' /> <span>LinkedIn</span>
            </button>
          </Link>
          <Link href='mailto:rahulranjan25.RR@gmail.com' target="_blank" rel="noreferrer">
            <button>
              <MdEmail className='icon' /><span>Email</span>
            </button>
          </Link>
        </div>
      </div>
        {/* <div className="profile">
          <Image src={Profile} width={256} height={256} quality={100} objectFit={'cover'}/>
        </div> */}
    </div></>
  )
}

export default Header