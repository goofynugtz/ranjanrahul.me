import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router';
import Home from './components/Home';
import Blogs from './components/Blogs/Blogs';
import useDarkMode, { DarkMode } from 'use-dark-mode';


function App() {

  const darkMode:DarkMode = useDarkMode(true);

  return (
        <div className="App">
          <Navbar {...darkMode}/>
          <div className="main">
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          </div>
          <Footer />
        </div>
  );
}

export default App;
