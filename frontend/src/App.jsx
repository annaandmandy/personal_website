import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/footer';
import GorillaCharms from './pages/GorillaCharms';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/gorillacharms" element={<GorillaCharms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
