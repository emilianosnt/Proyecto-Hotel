
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/Footer.css";

const App = () => (
  <Router>
    <Header />
    <main className="container mt-4"></main>
    <Footer />
  </Router>
);

export default App;
