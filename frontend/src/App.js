import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './contents/Home';
import Product from './contents/Product';
import Cart from './contents/Cart';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Side */}
      {/* Backdrop */}
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
