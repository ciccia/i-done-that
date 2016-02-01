import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as doingsActions from '../../actions/doingsActions';
import DoingsList from '../doings/DoingsList';
import DoingsForm from '../doings/DoingsForm';

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
        <h1>Doings</h1>
        <DoingsForm onSubmit={done => this.props.addDone(done)}/>
        <DoingsList onToggleDoings={this._handleToggleDoings.bind(this)} doings={doings}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {doings: state.doingsReducer};
}

export default connect(mapStateToProps, doingsActions)(DoingsPage);
