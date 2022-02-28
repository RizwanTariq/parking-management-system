import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <>
      <Header />

      <Container className="main py-1" fluid>
        <Row>
          <Col>
            <Main />
          </Col>
          <Col sm={12} md={4} lg={3} xl={2}>
            <SideBar />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
