/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'

import Navbar from 'react-materialize/lib/Navbar';
import NavItem from 'react-materialize/lib/NavItem';

//TODO: Link make a.active tag but should be li.active
class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <IndexLink to="/" className="brand-logo">iDoneThat</IndexLink>
            <ul id="nav-mobile" className="right">
              <li><Link to="doings">Doings</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          { this.props.children }
        </div>

        <footer className="page-footer orange">
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="orange-text text-lighten-3" href="#">Ciccia</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
