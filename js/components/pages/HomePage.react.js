/*
 * HomePage
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as doingsActions from '../../actions/doingsActions';
import { groupByStatusTodayDoingsSelector } from '../../selectors/doingsSelectors';

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
            <DoingsFormLead onSubmit={addDone}/>
          </div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col s12 hide-on-small-and-down m6 center-align">
            <h2 className="center-align light-blue-text">
              <i className="medium material-icons">rowing</i>
            </h2>
            <DoingsListLead doings={doingsToDo} onClick={markDoneAsDone}/>
          </div>
          <div className="col s12 m6 center-align">
            <h2 className="light-blue-text">
              <i className="medium material-icons">done</i>
            </h2>
            <DoingsListLead doings={doingsDone} onClick={markDoneAsDoing}/>
          </div>
        </div>

      </div>

    );
  }
}

export default connect(groupByStatusTodayDoingsSelector, doingsActions)(HomePage);
