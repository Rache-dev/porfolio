import React from 'react';
import './App.css';
import './styles/Global.css'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import ProjectPage from './pages/project';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
        <NavBar />
        <div id="content">
          <Home/>
          <About />
          <Experience />
          <ProjectPage />
          <Footer />
        </div>
    </div>
  );
}

export default App;
