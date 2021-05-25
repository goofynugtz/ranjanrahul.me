// import React from 'react'
import './Navbar.scss';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from "react-icons/fa";
import { FiSun, FiMoon } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { DarkMode } from 'use-dark-mode';

const navigation = (darkMode: DarkMode) => {
    return (
        <div className="nav">
            <div className="nav--left">
                <div className="nav__brand">ranjanrahul</div>
                <li className="nav__s"><FaFacebookF /></li>
                <li className="nav__s"><FaGithub /></li>
                <li className="nav__s"><FaLinkedinIn /></li>
                <li className="nav__s"><FaDev /></li>
            </div>
            <div className="nav--right">
                <li><NavLink to="/" href="/" className="nav__e nav__home">Home</NavLink></li>
                <li><NavLink to="/skills" href="/" className="nav__e nav__skills">What I Do</NavLink></li>
                <li><NavLink to="/blogs" href="/blog" className="nav__e nav__blog">Blog</NavLink></li>
                <li><NavLink to="/portfolio" href="/" className="nav__e nav__portfolio">Portfolio</NavLink></li>
                <li><SunMoon {...darkMode} /></li>
                
            </div>
        </div>
    )
}

export default navigation

const SunMoon = (darkMode: DarkMode) => {
    return (
      <div className="SunMoon nav__e" onClick={darkMode.toggle}>
        <div>{darkMode.value ? <FiSun color={'#ffc107'} /> : <FiMoon />}</div>
      </div>
    );
  };
