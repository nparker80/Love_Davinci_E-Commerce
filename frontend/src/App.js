import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './contents/Home';
import Products from './contents/Products';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Products} />
          <Route exact path="/cart" component={Cart} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
