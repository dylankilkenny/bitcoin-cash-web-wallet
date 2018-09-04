import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import WalletNavbar from '../presentational/Navbar';
import { Link } from 'react-router-dom';

export default function Landing({ mnemonic, cashAddr }) {
  return (
    <div>
      <WalletNavbar />
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={2} />
          <Col xs={10} md={8}>
            <Panel id="Panel">
              <Panel.Body>
                <div>
                  <h4>
                    Are you creating a new wallet or loading an existing wallet?
                  </h4>
                </div>
                <div>
                  <Link
                    to={{
                      pathname: '/newwallet',
                      state: { newWallet: true }
                    }}
                  >
                    <Button>New Wallet</Button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/wallet',
                      state: { newWallet: false }
                    }}
                  >
                    <Button>Load Existing</Button>
                  </Link>
                </div>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={4} md={2} />
        </Row>
      </Grid>
    </div>
  );
}
