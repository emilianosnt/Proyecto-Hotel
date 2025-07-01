
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Footer from './Components/Footer'; 



const App = () => (
  <Router>
    <Header />
    <main className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;