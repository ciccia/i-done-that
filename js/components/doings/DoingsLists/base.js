import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

class DoingsListBase extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.doings !== this.props.doings;
  }

  render() {
    return (
      <div className="row center">
        {this.props.doings.valueSeq().map((value) => (
          <div className="col s12" key={value.get('id')}>
            <h5 onClick={() => this.props.onToggleDoings(value.get('id'))}>
              {value.get('description')}
            </h5>
          </div>
        ))}
      </div>
    );
  }

}

DoingsListBase.propTypes = {
  doings: PropTypes.instanceOf(Immutable.List).isRequired,
  onToggleDoings: PropTypes.func.isRequired
};

export default DoingsListBase;
