import Link from 'next/link';
import Circles from './assets/CirclesVector';

const VerticalNavbar = () => {
  return (
    <div className='v-nav'>
      <div className='circles'>
        <Circles />
      </div>
      <Link href="/#home"><a className='navlinks'>/home</a></Link>
      <Link href="/aboutme"><a className='navlinks'>/aboutme</a></Link>
      <Link href="https://github.com/goofynugtz?tab=repositories"><a className='navlinks'>/projects</a></Link>
      <Link href="/blogs"><a className='navlinks'>/blog</a></Link>
      <Link href="https://drive.google.com/file/d/1iMSlEzPWvTFUPf9d_gAVogOCq6IQBeeO/view?usp=sharing"><a className='navlinks'>/resume</a></Link>
    </div>
  )
}
export default VerticalNavbar
