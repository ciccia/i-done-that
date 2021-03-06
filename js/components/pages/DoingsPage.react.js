import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import * as doingsActions from '../../actions/doingsActions';
import { doingsSelector } from '../../selectors/doingsSelectors';
import DoingsFormFull from '../doings/DoingsForm/full';
import DoingsListFull from '../doings/DoingsLists/full';

class DoingsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    }
  }

  _handleDateChange(e) {
    const date = e.target.value;
    this.setState({selectedDate: new Date(date)})
  }

  _handleToggleDoings(id) {
    const { markDoneAsDoing, markDoneAsDone, doings } = this.props;
    const doing = doings.find(item => item.get('id') === id);
    doing.get('done') ? markDoneAsDoing(id) : markDoneAsDone(id);
  }

  render() {
    const { doings, addDone, deleteDone, updateDone } = this.props;
    const { selectedDate } = this.state;

    const filteredDoings = doings.filter(doing => {
      return moment(doing.get('date')).isSame(selectedDate, 'day')
    });

    return (
      <div className="row">
        <div className="col s12 l6">
          <DoingsFormFull
            date={selectedDate}
            onDateChange={(e) => {this._handleDateChange(e)}}
            onSubmit={addDone}/>
        </div>
        <div className="col s12 l6 right-align">
          <div className="divider hide-on-large-only"></div>
          <h4 className="materialize-red-text text-lighten-2" style={{fontWeight: 300}}>
            iDoneThat list
          </h4>
          <DoingsListFull doings={filteredDoings}
                          onClick={this._handleToggleDoings.bind(this)}
                          onDelete={deleteDone}
                          onUpdate={updateDone}/>
        </div>
      </div>
    );
  }
}

export default connect(doingsSelector, doingsActions)(DoingsPage);
