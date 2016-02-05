import React, { PropTypes } from 'react';
import DoingsListBase from './base';

class DoingsListFull extends DoingsListBase {

  render() {
    return (
      <div className="section">
        {this.props.doings.valueSeq().map((value) => (
          <div className="row" key={value.get('id')}>
            <div className="col s8">
              {value.get('description')}
            </div>
            <div className="col s1">
              <input type="checkbox" checked={value.get('done')}
                     onChange={() => this.props.onClick(value.get('id'))}
                     id={`is-done-${value.get('id')}`}
              />
              <label style={{paddingLeft: 0}}
                     htmlFor={`is-done-${value.get('id')}`}>
              </label>
            </div>
            <div className="col s3">
              <a><i className="material-icons">edit</i></a>
              <a onClick={() => this.props.onDelete(value.get('id'))}><i className="material-icons">delete</i></a>
            </div>

          </div>
        ))}
      </div>
    );
  }

}

export default DoingsListFull;
