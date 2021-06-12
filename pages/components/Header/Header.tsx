// import './Header.scss';
import styles from './Header.module.scss';

const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.background}></div>
            <div className={styles.overlay}></div>
            <p className={styles.txt + " " + styles.hello}>Hello, I'm</p>
            <p className={styles.txt + " " + styles.name}>RAHUL RANJAN</p>
            <p className={styles.intro}>I am freshman year undergrad from National Institute of Technology, Durgapur. I'm currently interested in Web Development, Web Designs (UI/UX) and also <a 
            className={styles.link}href="https://www.stopstalk.com/user/profile/goofyNugtz" target="_blank" rel="noreferrer">Competitive Programing</a> at times.
            </p>
            <p></p>
            <button className={styles.button}>
                Contact Me
            </button>
        </div>
    )
}

export default Header