import React, { PropTypes } from 'react';
import DoingsListBase from './base';

class DoingsListFull extends DoingsListBase {

  render() {
    return (
      <div>
        {this.props.doings.valueSeq().map((value) => (
          <div className="row" key={value.get('id')}>
            <div className="col s1 right-align">
              <input type="checkbox" checked={value.get('done')}
                     onChange={() => this.props.onClick(value.get('id'))}
                     id={`is-done-${value.get('id')}`}
              />
              <label htmlFor={`is-done-${value.get('id')}`}></label>
            </div>
            <div className="col s11">
              {value.get('description')}
            </div>
          </div>
        ))}
      </div>
    );
  }

}

export default DoingsListFull;
