import React, { useContext } from 'react';
import { listreducer } from '../pages/reducer';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom";
import { CartContext } from '../CartContext';
const initialState = [];
const Products = () => {

   const {cart, setCart} =  useContext(CartContext);
   


  //  console.log(cart.items)

  const [state, dispatch] = React.useReducer(listreducer, initialState);

  const fetchitem = async() => {
  
    const all = await fetch("/getitem", {
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    });
    const alldata = await all.json();
   
    dispatch({type:"show",value:alldata})
  
  }

  useEffect(() => {
    fetchitem()
  },  []);


  const addtocart = async (e, element) => {
    e.preventDefault();
    // console.log(element.id);
    let _cart = {...cart};

    if(!_cart.items){
      _cart.items ={}
    }

    if(_cart.items[element.id]){

      _cart.items[element.id] += 1;
    }
    else{
      _cart.items[element.id] = 1;
    }

    if(!_cart.totalItems){
        _cart.totalItems = 0;
        
    }

      _cart.totalItems += 1;
      setCart(_cart);
}


  return (
   
    <div className='container'>
    <div className='row'>     
    
    
       {
                    state.map((element,index) => {
                      return (
                       
                        <Col className="col-sm-4 py-4 px-4">
                      <Card style={{width: 300, height: 450}} >  
                        <Card.Img variant="top" src={element.image}  height={280}/>
                        <Card.Body>
                     
                          <Card.Title  align="center" key={index}>{element.name}</Card.Title>
                        
                          <Card.Text  align="center">
                          {element.size}
                          </Card.Text>
                          <Card.Text align="center">
                          <h5>${element.price}</h5>
                          </Card.Text>
                          <Card.Text>
                          <Link to={`/singleproduct/${element.id}`} ><button className='btn btn-danger btn-sm addcart'>
                           View Item
                          </button>
                          </Link>
                          <Link to={`/singleproduct/${element.id}`} ><button className='btn btn-danger btn-sm addcart'  onClick={(e) => { addtocart(e, element) }}>

                          Add to Cart
                          </button>
                          </Link>
                          </Card.Text>
                        
                        </Card.Body>
                      </Card>
                      </Col>

                      )
                    })
                  }
               </div>

           </div>

  )
}

export default Products;