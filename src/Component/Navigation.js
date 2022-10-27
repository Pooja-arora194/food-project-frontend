import React, { useEffect, useState } from 'react';
import {Nav, Navbar,Container} from 'react-bootstrap';
import Home from '../pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from '../pages/Addproduct';
import Products from './Products';
import Singleproduct from '../pages/Singleproduct';
import Cart from '../pages/Cart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../index.css';

import {CartContext}  from '../CartContext';

const Navigation = () => {

  
  const [cart, setCart] = useState({});

  useEffect(() => {
      const cart = window.localStorage.getItem('cart');
      setCart(JSON.parse(cart));

          console.log(cart)
  }, []);

  useEffect(() => {
     window.localStorage.setItem('cart', JSON.stringify(cart));

},

[cart]);



  return (
    <BrowserRouter>
    <div className='App'>
     
 
    <>
      <Navbar>
        <Container fluid>
            <Navbar.Brand href="/">
                <img src="images/logo.jpg" height={150}alt="logo" />
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as= {Link} to= "/">Home</Nav.Link>
            <Nav.Link as= {Link} to= "/products">Products</Nav.Link>
            <Nav.Link as= {Link} to= "/register">Register</Nav.Link>
            <Nav.Link as={Link} to= "/cart"><span className='border' > Cart {cart.totalItems}</span></Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
    </>   
          <div>
            <CartContext.Provider value={{cart, setCart}}>            
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/addproduct" element={<Addproduct/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
                <Route path="/cart" element={<Cart/>} />
                
                
              </Routes>
              </CartContext.Provider>

          </div>  

    </div>
    </BrowserRouter>
  )
}

export default Navigation;