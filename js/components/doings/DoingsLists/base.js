import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

class DoingsListBase extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.doings !== this.props.doings;
  }

}

DoingsListBase.propTypes = {
  doings: PropTypes.instanceOf(Immutable.List).isRequired,
  onClick: PropTypes.func.isRequired
};

export default DoingsListBase;
