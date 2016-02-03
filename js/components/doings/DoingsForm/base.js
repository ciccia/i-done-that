import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import uuid from 'node-uuid';
import Immutable from 'immutable';
//import { Done } from '../../constants/doingsConstants';

class DoingsFormBase extends Component {

  submit(doneWhat, doneIsDone = false, doneWhen = new Date()) {
    const done = new Immutable.Map({
      id: uuid.v1(),
      date: new Date(doneWhen),
      description: doneWhat,
      done: doneIsDone
    });
    this.props.onSubmit(done);
  }

}

DoingsFormBase.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default DoingsFormBase;
