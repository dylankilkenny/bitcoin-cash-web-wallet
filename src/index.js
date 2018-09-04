import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import WalletContainer from './js/container/WalletContainer';
import NewWalletContainer from './js/container/NewWalletContainer';
import Landing from './js/presentational/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/wallet" component={WalletContainer} />
          <Route path="/newwallet" component={NewWalletContainer} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
