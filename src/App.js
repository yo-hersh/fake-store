import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CategoryView from './Pages/CategoryView';
import Main from './Components/Main';
import ProductView from './Pages/ProductView';
import Details from './Pages/Details';
import { createContext, useContext, useEffect, useState } from 'react';
import Cart from './Pages/Cart';

export const getCartContext = createContext();
export const CartContext = createContext();

function App() {
  const cartState = useState([]);
  const [cart, setCart] = cartState

  function getCart(product, value) {
    const newCart = cart || [];
    const res = newCart.findIndex(i => i.id == product.id);
    if (res == -1) {
      setCart([...newCart, { ...product, count: 1 }]);
      return;
    }
    if (value == '+') {
      newCart[res]['count']++;
      setCart([...newCart])
    }
    if (value == '-') {
      newCart[res]['count']--;
      if (newCart[res]['count'] == '0') {
        newCart.splice(res,1);
      }
      setCart([ ...newCart]);
    }
  }

  return <div className="App">
    <getCartContext.Provider value={getCart}>
      <CartContext.Provider value={cartState}>
        <Main />
        <div className='store'>
          <Cart cart={cart} />
          <Routes>
            <Route path='/' element={<CategoryView />} />
            <Route path='/category/:category' element={<ProductView />} cart={cart} />
            <Route path='/product/:id' element={<Details />} />
          </Routes>
          </div>
      </CartContext.Provider>
    </getCartContext.Provider>
  </div >
}

export default App;