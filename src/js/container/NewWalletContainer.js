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

let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

class NewWalletContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: ''
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
    this.setState({ mnemonic: mnemonic });
  };

  handleChange(e) {
    this.setState({ mnemonic: e.target.value });
  }

  componentDidMount() {
    // console.log(this.props.location.state.newWallet);
    // let mnemonic = BITBOX.Mnemonic.generate(256);
    // let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);
    // let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'bitcoincash');
    // let hdNode = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");
    // let node0 = BITBOX.HDNode.derivePath(hdNode, '1/0');
    // let node0CashAddress = BITBOX.HDNode.toCashAddress(node0);
    // this.setState({
    //   mnemonic: mnemonic,
    //   cashAddr: node0CashAddress
    // });
  }

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
                    {/* <Link
                      to={{
                        pathname: '/wallet',
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
                    </Link> */}
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
