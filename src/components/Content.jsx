import React, { useEffect, useState } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import { getUsers } from '../services/userService';

export default function Content() {
  const [waitings, setWaitings] = useState([]);
  const [pickedUps, setPickedUps] = useState([]);
  const [transits, setTransits] = useState([]);
  const [placeds, setPlaceds] = useState([]);
  useEffect(async () => {
    const users = await getUsers();
    setWaitings(users.filter((user) => user.id < 3));
    setPickedUps(users.filter((user) => user.id > 2 && user.id < 6));
    setTransits(users.filter((user) => user.id > 5));
    setPlaceds(users.filter((user) => user.id));
  }, []);
  return (
    <Row className="mt-1">
      <Col className="mt-2" sm={12} md={6} lg={4} xl={3}>
        <div className="card">
          <div className="card-header text-white text-center bg-waiting">
            <strong>Waiting</strong>
          </div>
          <Accordion>
            {waitings.map((user) => (
              <Accordion.Item key={user.id} eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <h1>{user.email}</h1>
                  <h2>{user.address.city}</h2>
                  <h3>{user.website}</h3>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Col>
      <Col className="mt-2" sm={12} md={6} lg={4} xl={3}>
        <div className="card">
          <div className="card-header text-white text-center bg-picked">
            <strong>Picked Up</strong>
          </div>
          <Accordion>
            {pickedUps.map((user) => (
              <Accordion.Item key={user.id} eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <h1>{user.email}</h1>
                  <h2>{user.address.city}</h2>
                  <h3>{user.website}</h3>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Col>
      <Col className="mt-2" sm={12} md={6} lg={4} xl={3}>
        <div className="card">
          <div className="card-header text-white text-center bg-transit">
            <strong>Entry Transit</strong>
          </div>
          <Accordion>
            {transits.map((user) => (
              <Accordion.Item key={user.id} eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <h1>{user.email}</h1>
                  <h2>{user.address.city}</h2>
                  <h3>{user.website}</h3>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Col>
      <Col className="mt-2" sm={12} md={6} lg={4} xl={3}>
        <div className="card">
          <div className="card-header text-white text-center bg-placed">
            <strong>Placed</strong>
          </div>
          <Accordion>
            {placeds.map((user) => (
              <Accordion.Item key={user.id} eventKey={user.id}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <h1>{user.email}</h1>
                  <h2>{user.address.city}</h2>
                  <h3>{user.website}</h3>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Col>
    </Row>
  );
}
