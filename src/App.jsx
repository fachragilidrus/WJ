import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Page/Product/Product';
import Features from './components/Page/Features';
import About from './components/Page/About/About'; 
import Footer from './components/Footbar/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;