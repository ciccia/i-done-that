import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as doingsActions from '../../actions/doingsActions';
import DoingsFormFull from '../doings/DoingsForm/full';

class DoingsPage extends Component {

  _handleToggleDoings(id) {
    const { markDoneAsDoing, markDoneAsDone } = this.props;
    const doing = this.props.doings.find(item => item.get('id') === id);
    doing.get('done') ? markDoneAsDoing(id) : markDoneAsDone(id);
  }

  render() {
    const { doings } = this.props;

    return (
      <div>
        <DoingsFormFull onSubmit={done => this.props.addDone(done)}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {doings: state.doingsReducer};
}

export default connect(mapStateToProps, doingsActions)(DoingsPage);
