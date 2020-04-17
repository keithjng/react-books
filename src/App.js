import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React, { Component } from 'react';
import MasterPage from './MasterPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Books from './Books';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();
;

ReactStormpath.init();
ReactDOM.render(
  <Router history={history}>
  </Router>,
  document.getElementById('app-container')
);

<Router history={history}>
  <Route path='/' component={MasterPage}>
    <LoginRoute path='/login' component={LoginPage} />
    <Route path='/register' component={RegistrationPage} />
    <AuthenticatedRoute path='/profile' component={ProfilePage} />
  </Route>
</Router>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
