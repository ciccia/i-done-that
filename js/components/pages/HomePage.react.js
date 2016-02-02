/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as doingsActions from '../../actions/doingsActions';

import DoingsFastForm from '../doings/DoingsFastForm'
import DoingsList from '../doings/DoingsList'

class HomePage extends Component {
  render() {
    const { doingsDone, doingsToDo, markDoneAsDone, markDoneAsDoing } = this.props;
    return (
      <div>

        <div className="jumbotron">
          <h1 className="display-5">Fast Doing</h1>
          <p className="lead">Add here an iDoneThat</p>
          <DoingsFastForm />

          <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </div>

        <div className="row doing-today">
          <div className="col-md-6 col-xs-12">
            <h4>Doing</h4>
            <DoingsList doings={doingsToDo} onToggleDoings={markDoneAsDone}/>
          </div>
          <div className="col-md-6 col-xs-12">
            <h4>Done</h4>
            <DoingsList doings={doingsDone} onToggleDoings={markDoneAsDoing}/>
          </div>
        </div>

      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    // TODO: Filtrare con data odierna. forse conviene usare reselect
    doingsDone: state.doingsReducer.filter(doing => doing.get('done') === true),
    doingsToDo: state.doingsReducer.filter(doing => doing.get('done') === false)
  };
}

export default connect(mapStateToProps, doingsActions)(HomePage);
