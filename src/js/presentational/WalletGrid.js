import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

export default function MainGrid({ mnemonic, cashAddr }) {
  return (
    <Grid>
      <Row>
        <Col xs={4} md={2} />
        <Col xs={10} md={8}>
          <h1>33</h1>
        </Col>
        <Col xs={4} md={2} />
      </Row>
      <Row>
        <Col xs={4} md={2} />
        <Col xs={10} md={8}>
          <Table bordered condensed>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs={4} md={2} />
      </Row>
    </Grid>
  );
}
