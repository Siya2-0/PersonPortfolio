import './App.css';
import React from 'react';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Projects from './components/projects/Projects.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Skills from './components/skills/Skills.jsx';
import AboutMe from './components/aboutme/AboutMe.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Home />
      <Projects/>
      <Skills/>
      <AboutMe/>
    </div>
  );
}

export default App;


// export default App;
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>