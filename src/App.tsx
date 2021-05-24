import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router';
import Home from './components/Home';
import useDarkMode, { DarkMode } from 'use-dark-mode';


function App() {

  const darkMode:DarkMode = useDarkMode(true);

  return (
        <div className="App">
          <Navbar {...darkMode}/>
          <Route path="/" component={Home} />
        </div>
  );
}

export default App;
