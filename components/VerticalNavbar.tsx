import Link from 'next/link';
import Circles from './assets/CirclesVector';

const VerticalNavbar = () => {
  return (
    <div className='v-nav'>
      <div className='circles'>
        <Circles />
      </div>
      <Link href="/"><a className='navlinks sm:hide'>/home</a></Link>
      <Link href="/aboutme"><a className='navlinks sm:hide'>/aboutme</a></Link>
      <Link href="/projects"><a className='navlinks sm:hide'>/projects</a></Link>
      {/* <Link href="/listening"><a className='navlinks sm:hide'>/listening</a></Link> */}
      <Link href="/blogs"><a className='navlinks'>/blog</a></Link>
      <Link href="https://drive.google.com/file/d/1iMSlEzPWvTFUPf9d_gAVogOCq6IQBeeO/view?usp=sharing"><a className='navlinks sm:hide'>/resume</a></Link>
    </div>
  )
}
export default VerticalNavbar
