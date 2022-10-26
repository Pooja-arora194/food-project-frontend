import React from 'react';
import { listreducer } from '../pages/reducer';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom";
const initialState = [];
const Products = () => {

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
                     
                          <Card.Title  align="center">{element.name}</Card.Title>
                        
                          <Card.Text  align="center">
                          {element.size}
                          </Card.Text>
                          <Card.Text>
                          ${element.price}
                          <Link to={`/singleproduct/${element.id}`} ><button className='btn btn-danger'>
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