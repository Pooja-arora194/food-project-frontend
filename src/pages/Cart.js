import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Cart() {

    const [count, setCount] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams();

    useEffect(()=>{
    // console.log(params)
    let  id = params.id
   
     const fetchsingle = async() => {
        const all = await fetch(`/singleitem/${id}/`, {
          method: "GET",
          headers:{
            "Content-Type": "application/json"
          }
        });
        const single = await all.json();
            // console.log(single);
            setCount(single)
        
      }
      fetchsingle();
    })
   
 
  return (
    <>
    <div className='container'>
      <div class="table-responsive">
  <table class="table">
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
        
        <td> <img src={count.image} height={150} alt="logo" className='px-4' /><b>{count.name}</b></td>
        <td><h6 className='quantitysec'><button> -- </button> {quantity}<button>  + </button></h6></td>
        <td className='py-4 px-4'>${count.price}</td>
     
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