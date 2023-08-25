import React from 'react';
import './App.css';
import productData from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = "mohamed amine bouchriha";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <Card>
          <Card.Header>Product Details</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Image image={productData.image} />
              </Col>
              <Col md={8}>
                <Name name={productData.name} />
                <Price price={productData.price} />
                <Description description={productData.description} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <p className="mt-3">Hello, {firstName ? firstName : "there!"}</p>
      </Container>
    </div>
  );
}

export default App;