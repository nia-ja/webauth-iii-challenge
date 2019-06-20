import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import UsersPage from './components/UsersPage.js';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="App">
        <Navigation logout={this.logout} />

        {/* Routes */}
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/users" component={UsersPage} />
      </div>
    );
  }
}

export default withRouter(App);