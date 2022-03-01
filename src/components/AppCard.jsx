import { Card, Col, Row, Image } from 'react-bootstrap';
export default function AppCard() {
  return (
    <Card className="border-light my-2">
      <Card.Header className="text-primary text-center">
        User (Admin)
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Row>
              <Col>
                <Image
                  src={require('../assets/car.png')}
                  style={{ width: '30px' }}
                />
              </Col>
              <Col>
                <h5 className="text-info">Entries</h5>

                <span className="d-block">North:1</span>
                <span className="d-block">South:1</span>
              </Col>
            </Row>
            <div className="mt-2">
              <h6>Parked At</h6>
              <p>CCM Yard: 0</p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <Image
                  src={require('../assets/car.png')}
                  style={{ width: '30px' }}
                />
              </Col>
              <Col>
                <h5 className="text-info">Returns</h5>

                <span className="d-block">North:1</span>
                <span className="d-block">South:1</span>
              </Col>
            </Row>
            <div className="mt-2">
              <h6>Parked At</h6>
              <p>Transit Yard: 0</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
