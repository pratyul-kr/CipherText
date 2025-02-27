import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Music from './components/Music';
import Home from './pages/Home';
import Cipher1 from './pages/Cipher1';
import Cipher2 from './pages/Cipher2';
import Cipher3 from './pages/Cipher3';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caesar" element={<Cipher1 />} />
        <Route path="/playfair" element={<Cipher2 />} />
        <Route path="/hill" element={<Cipher3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Music />
      <Footer />
    </>
  );
}

export default App;