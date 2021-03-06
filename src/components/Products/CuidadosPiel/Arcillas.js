import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const Arcillas = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Arcillas';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Arcillas</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Arcillas" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Arcillas;
