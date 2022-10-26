import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Singleproduct = () => {

    const [count, setCount] = useState({});
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
    <div className="container">    
        <div className='row'>
          <Col className="col-sm-4 py-4 px-4">
                    <Card.Img variant="bottom" src={count.image} height={400} width={200} />
            </Col>
            <Col className="col-sm-4 py-4 px-4">
                    
                         <Card.Text  align="right" className='mt-4'>
                           <h2><b> {count.name} </b></h2>
                          </Card.Text>
         
                         <Card.Text  align="right" className='mt-4'>
                           <h5>{count.size}</h5>
                          </Card.Text>
                          <Card.Text  align="right" className='mt-4'>
                           <h5> ${count.price}</h5>
                          </Card.Text>
                           <Card.Text  align="right" className='mt-4'>
                           <Link to={`/cart/${count.id}`}> <button className='btn btn-danger ' >Add to Cart </button></Link>
                          </Card.Text>
                        
                      </Col>
                     
                          {/* <Card.Title  align="center">Mushroom</Card.Title>
                        
                          <Card.Text  align="center">
                            Small
                          </Card.Text>
                          <Card.Text>
                          $499
                          <button className='btn btn-danger ' >Add to Cart </button>
                          </Card.Text>
                        
                        </Card.Body>
                    */}

                      
                   

                      
    </div>
    </div>

  )
}

export default Singleproduct;