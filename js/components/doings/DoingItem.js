import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import moment from 'moment';

const DoingItem = ({data, onToggle}) => {
  return (
    <li>
      <input type="checkbox" onChange={onToggle} checked={data.get('done')}/>
      <span>{data.get('description')}</span>
      <span>{moment(data.get('date')).format('L')}</span>
    </li>
  );
};

DoingItem.propTypes = {
  data: PropTypes.instanceOf(Immutable.Map).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default DoingItem;
