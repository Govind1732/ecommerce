import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Mobiles from './components/Mobiles';
import Groceries from './components/Groceries';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className='Container fluid'>
        <Header />
        <Routes>
          <Route path="/mobiles/:id" element={<ProductDetails/>} />
          <Route path="/mobiles" element={<Mobiles/>} />
          <Route path="/groceries" element={<Groceries/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to our e-commerce site!</h2>;
}

export default App;
