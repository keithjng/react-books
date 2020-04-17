import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';


export default class Header extends React.Component {
  render() {
    return (
      <header>
      <i className="fas fa-book fa-2x"></i>
      <h1>Book Finder</h1>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NotAuthenticated>
                <li>
                  <LoginLink />
                </li>
              </NotAuthenticated>
              <NotAuthenticated>
                <li>
              <Link to="/register">Create Account</Link>
                </li>
              </NotAuthenticated>
              <Authenticated>
                <li>
              <Link to="/profile">Profile</Link>
                </li>
              </Authenticated>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  }
}
