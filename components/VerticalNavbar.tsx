import Link from 'next/link';
import Circles from './assets/CirclesVector';

const VerticalNavbar = () => {
  return (
    <div className='v-nav'>
      <div className='circles'>
        <Circles />
      </div>
      <Link href="/#home" className='navlinks'>/home</Link>
      <Link href="/aboutme" className='navlinks'>/aboutme</Link>
      <Link href="/projects" className='navlinks'>/projects</Link>
      <Link href="/blogs" className='navlinks'>/blog</Link>
      <Link href="https://drive.google.com/file/d/18m4vyIUN6NTPEHL3Ea2n2r43jD-9N2Ww/view?usp=share_link" className='navlinks'>/resume</Link>
    </div>
  )
}
export default VerticalNavbar
