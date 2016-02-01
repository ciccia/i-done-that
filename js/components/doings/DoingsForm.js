import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import uuid from 'node-uuid';
import Immutable from 'immutable';
//import { Done } from '../../constants/doingsConstants';

class DoingsForm extends Component {

  _handleSubmit(e) {
    e.preventDefault();
    const { doneWhen, doneWhat, doneIsDone } = e.target;
    const done = new Immutable.Map({
      id: uuid.v1(),
      date: new Date(doneWhen.value),
      description: doneWhat.value,
      done: doneIsDone.checked
    });
    this.props.onSubmit(done);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={e => this._handleSubmit(e)}>
        <input type="date" name="doneWhen" defaultValue={moment().format('YYYY-MM-DD')}/>
        <input type="text" autoFocus name="doneWhat"/>
        <input type="checkbox" name="doneIsDone"/>
        <input type="submit"/>
      </form>
    );
  }

}

DoingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default DoingsForm;
