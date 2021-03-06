import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './contents/Home';
import Product from './contents/Product';
import Cart from './contents/Cart';

import Navbar from './components/Navbar';
import Back from './components/Back';
import Sidebar from './components/Sidebar';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => { setSideToggle(true) }} />
      <Back show={sideToggle} click={() => { setSideToggle(false) }} />
      <Sidebar show={sideToggle} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
