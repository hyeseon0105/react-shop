// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data/shoes-data';
import { useState } from 'react';
import Product from './component/Product.js';

function App() {
  const [product, setProduct] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className='main-bg'></div>
      <Container>
        <Row className="justify-content-md-center">
          {
            product.map((p, index) => {
              return (
                <Col>
                  <Product product={product} index={index} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}
export default App;
