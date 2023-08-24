import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Updated path
import ProjectsAndSkills from './pages/ProjectsAndSkills'; // Updated path
import Contact from './pages/Contact'; // Updated path

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects-and-skills" element={<ProjectsAndSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
