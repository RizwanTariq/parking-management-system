import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-primary">
          <Col className="text-white text-center py-2">
            Powered By Orbit360 Inc &copy; 2019
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
