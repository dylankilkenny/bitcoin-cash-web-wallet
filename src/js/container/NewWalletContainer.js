import React from 'react';
import WalletNavbar from '../presentational/Navbar';
import {
  InputGroup,
  Form,
  FormGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

class NewWalletContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: '',
      continueDisabled: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.mnemonic.length;
    if (length > 100) return 'success';
    else if (length > 50) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  generateMnemonic = () => {
    let mnemonic = BITBOX.Mnemonic.generate(256);
    this.setState({
      mnemonic: mnemonic,
      continueDisabled: false
    });
  };

  handleChange(e) {
    let continueDisabled = false;
    if (this.state.mnemonic.length > 100) {
      continueDisabled = true;
    }
    this.setState({
      mnemonic: e.target.value,
      continueDisabled: continueDisabled
    });
  }

  componentDidMount() {}

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
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
                    <h4>Enter in your mnemonic seed or generate one.</h4>
                  </div>
                  <div>
                    <Form>
                      <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                      >
                        <InputGroup>
                          <InputGroup.Button>
                            <Button onClick={this.generateMnemonic}>
                              Generate
                            </Button>
                          </InputGroup.Button>
                          <FormControl
                            type="text"
                            value={this.state.mnemonic}
                            placeholder="Enter mnemonic"
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <FormControl.Feedback />
                      </FormGroup>
                    </Form>
                    <Link
                      replace
                      to={{
                        pathname: '/wallet',
                        state: { mnemonic: this.state.mnemonic }
                      }}
                    >
                      <Button disabled={this.state.continueDisabled}>
                        Continue
                      </Button>
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
}
export default NewWalletContainer;
