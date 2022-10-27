import React, { useContext, useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from '../CartContext';

function Cart() {

    const { cart } = useContext(CartContext);

   
    useEffect(() => {
      if(!cart.items){
        return;
      }

     

      console.log('cart', Object.keys(cart.items))

      
    }, [])
 
  return (
    <>
    <div className='container'>
      <div className="table-responsive">
  <table className="table">


    Welcome
    {/* <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
       
      </tr>
    </thead> */}
    <tbody>
      <tr>
        
        <td> <img src="" height={150} alt="logo" className='px-4' /><b></b></td>
        <td><h6 className='quantitysec'><button> -- </button><button>  + </button></h6></td>
        <td className='py-4 px-4'>$</td>
     
        <td><button className='btn btn-danger' >Delete</button></td>
      
    
      </tr>
    
    </tbody>
  </table>
</div>
</div>
    </>
  );
}
export default Cart;