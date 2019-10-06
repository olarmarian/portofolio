import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css';

function App() {   
  return (
    <div className="container">
      <Header/>
      <Home />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
