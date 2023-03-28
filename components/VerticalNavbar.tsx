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
      <Link href="https://drive.google.com/file/d/1iMSlEzPWvTFUPf9d_gAVogOCq6IQBeeO/view?usp=sharing">/resume</Link>
    </div>
  )
}
export default VerticalNavbar
