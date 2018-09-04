import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export default function MainGrid({ mnemonic, cashAddr }) {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={9} md={6}>
          <h4>Your mnemonic is: {mnemonic}</h4>
          <h4>Your Address is: {cashAddr}</h4>
        </Col>
        <Col xs={9} md={6}>
          <p>Address</p>
        </Col>
      </Row>
    </Grid>
  );
}
