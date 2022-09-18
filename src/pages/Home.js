import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4" className='bg-primary'>Columna 1</Col>
          <Col xs="4" className='bg-warning'>Columna 2</Col>
          <Col xs="4" className='bg-danger'>Columna 3</Col>
        </Row>
      </Container>
    );
  }
}