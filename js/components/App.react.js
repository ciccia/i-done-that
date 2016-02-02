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

class App extends Component {
  render() {
    return (
      <div className="wrapper container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-xs-right">
              <li className="nav-item active">
                <IndexLink className="nav-link" to="/">Home</IndexLink>
                {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="doings">Doings</Link>
                {/*<a className="nav-link" href="#">Doings</a>*/}
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">IDoneThat</h3>
        </div>

        { this.props.children }

        <footer className="footer">
          <p>&copy; Ciccia</p>
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
