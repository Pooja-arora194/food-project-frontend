import React, { useState } from "react";
import {Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
       <Container fluid>
        <img src="images/thumb.jpg" height={740} className="homeimg"  alt="logo" />

          
      </Container>
    </>
  );
}
export default Home;