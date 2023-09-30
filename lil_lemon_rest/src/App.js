import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Order from './components/Order';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
};

export default App;


