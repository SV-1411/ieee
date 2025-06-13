import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import Cygnus from './pages/Cygnus';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-space relative">
        {/* Full-screen video background */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/cygnus" element={<Cygnus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;