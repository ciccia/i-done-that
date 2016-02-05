import React from 'react';
import DoingsListBase from './base';

class DoingsListLead extends DoingsListBase {

  render() {
    return (
      <div>
        {this.props.doings.valueSeq().map((value) => (
          <p key={value.get('id')}
             className="flow-text truncate"
             onClick={() => this.props.onClick(value.get('id'))}>
            {value.get('description')}
          </p>
        ))}
      </div>
    );
  }

}

export default DoingsListLead;
