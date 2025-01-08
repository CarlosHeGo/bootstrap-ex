import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyGrid() {
    return (
        <Container style={{backgroundImage: "url('./fondohielo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
          <Row>
            <Col xl={4} md={6}>
              <div>Mujer</div>
            </Col>
            <Col xl={4} md={6}>
              <div>Hombre</div>
            </Col>
            <Col xl={4} md={6}>
              <div>Niños</div>
            </Col>
          </Row>
        </Container>
      );
    
  }
  
export default MyGrid;