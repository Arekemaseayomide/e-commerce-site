import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/products' Component={Products}/>
      <Route path='/products/:id' Component={Product}/>
      <Route path='/cart' Component={Cart}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
