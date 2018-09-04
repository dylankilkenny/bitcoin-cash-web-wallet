import React from 'react';
import WalletNavbar from '../presentational/Navbar';
import MainGrid from '../presentational/WalletGrid';

let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

class WalletContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.location.state.newWallet);
    let mnemonic = BITBOX.Mnemonic.generate(256);
    let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);
    let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'bitcoincash');
    let hdNode = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");
    let node0 = BITBOX.HDNode.derivePath(hdNode, '1/0');
    let node0CashAddress = BITBOX.HDNode.toCashAddress(node0);
    this.setState({
      mnemonic: mnemonic,
      cashAddr: node0CashAddress
    });
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
