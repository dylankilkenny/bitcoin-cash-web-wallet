import React from 'react';
import WalletNavbar from '../presentational/Navbar';
import MainGrid from '../presentational/WalletGrid';

let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

class WalletContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: this.props.location.state.mnemonic
    };
  }

  componentDidMount() {
    console.log(this.state.mnemonic);
    // create seed buffer from mnemonic
    let seedBuffer = BITBOX.Mnemonic.toSeed(this.state.mnemonic);
    let masterHDNode = BITBOX.HDNode.fromSeed(seedBuffer, 'bitcoincash');
    let hdNode = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");
    let node0 = BITBOX.HDNode.derivePath(hdNode, '1/0');
    let node0CashAddress = BITBOX.HDNode.toCashAddress(node0);
    this.setState({ cashAddr: node0CashAddress });
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <div>
        <WalletNavbar />
        <MainGrid
          cashAddr={this.state.cashAddr}
          mnemonic={this.state.mnemonic}
        />
      </div>
    );
  }
}
export default WalletContainer;
