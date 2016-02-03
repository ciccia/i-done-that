import React from 'react';
import DoingsListBase from './base';

class DoingsListLead extends DoingsListBase {

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

export default DoingsListLead;
