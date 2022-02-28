import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppForm from './AppForm';
import Content from './Content';

export default function Main() {
  return (
    <>
      <AppForm />

      <Container fluid className="mt-4">
        <Row className="bg-primary">
          <Col className="text-white text-center py-1">Departures</Col>
        </Row>
        <Content />
      </Container>
    </>
  );
}
