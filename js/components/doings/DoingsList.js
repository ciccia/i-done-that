import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import DoingItem from './DoingItem';

class DoingsList extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.doings !== this.props.doings;
  }

  render() {
    return (
      <ul className="doingsList">
        {this.props.doings.valueSeq().map((value) =>
          <DoingItem data={value}
                    onToggle={() => this.props.onToggleDoings(value.get('id'))}
                    key={value.get('id')}/>)}
      </ul>
    );
  }

}

DoingsList.propTypes = {
  doings: PropTypes.instanceOf(Immutable.List).isRequired,
  onToggleDoings: PropTypes.func.isRequired
};

export default DoingsList;
