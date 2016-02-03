/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import * as doingsActions from '../../actions/doingsActions';

import DoingsFormLead from '../doings/DoingsForm/lead';
import DoingsListLead from '../doings/DoingsLists/lead';

class HomePage extends Component {
  render() {
    const { doingsDone, doingsToDo, addDone, markDoneAsDone, markDoneAsDoing } = this.props;
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h2 className="header center orange-text">What have you done?</h2>
            <h5 className="header center light">This is the fastest way to insert a Done element</h5>
            <div className="row center">
              <DoingsFormLead onSubmit={addDone}/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <h2 className="center light-blue-text">
              <i style={{fontSize: 'inherit'}} className="material-icons">rowing</i>
            </h2>
            <DoingsListLead doings={doingsToDo} onToggleDoings={markDoneAsDone}/>
          </div>
          <div className="col s6">
            <h2 className="center light-blue-text">
              <i style={{fontSize: 'inherit'}} className="material-icons">done</i>
            </h2>
            <DoingsListLead doings={doingsDone} onToggleDoings={markDoneAsDoing}/>
          </div>
        </div>

      </div>

    );
  }
}


function mapStateToProps(state) {
  const today = moment();
  const todayDoings = state.doingsReducer.filter(doing => {
    return moment(doing.get('date')).isSame(today, 'day')
  });
  return {
    // TODO: forse conviene usare reselect
    doingsDone: todayDoings.filter(doing => doing.get('done') === true),
    doingsToDo: todayDoings.filter(doing => doing.get('done') === false)
  };
}

export default connect(mapStateToProps, doingsActions)(HomePage);
