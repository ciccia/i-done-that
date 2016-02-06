import React, { PropTypes, Component } from 'react';
import DoingsListBase from './base';

class DoingsItemFull extends Component {

  constructor(props) {
    super(props);
    this.id = this.props.value.get('id');
  }

  _handleEditStart() {
    const el = this.refs.description;
    el.contentEditable = true;
    el.focus();
  }

  _handleEditStop(e) {
    const { onUpdate, value } = this.props;
    e.target.contentEditable = false;
    onUpdate(this.id, value.set('description', e.target.innerText));
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const { value, onClick, onUpdate, onDelete } = this.props;
    const id = value.get('id');

    return (
      <div className="row">
        <div className="col s8"
             ref="description"
             onBlur={this._handleEditStop.bind(this)}>
          {value.get('description')}
        </div>
        <div className="col s1">
          <input type="checkbox" checked={value.get('done')}
                 onChange={() => onClick(id)}
                 id={`is-done-${id}`}
          />
          <label style={{paddingLeft: 0}}
                 htmlFor={`is-done-${id}`}>
          </label>
        </div>
        <div className="col s3">
          <a role="button" style={{cursor:' pointer'}} onClick={this._handleEditStart.bind(this)}><i className="material-icons">edit</i></a>
          <a role="button" style={{cursor:' pointer'}} onClick={() => onDelete(id)}><i className="material-icons">delete</i></a>
        </div>

      </div>
    )
  }

}

class DoingsListFull extends DoingsListBase {

  shouldComponentUpdate(nextProps) {
    return nextProps.doings !== this.props.doings;
  }

  render() {
    const {doings, ...actions} = this.props;

    return (
      <div className="section">
        {this.props.doings.valueSeq().map((value) => (
          <DoingsItemFull key={value.get('id')} value={value} {...actions} />
        ))}
      </div>
    );
  }

}

DoingsListFull.propTypes = {
  ...{
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  },
  ...DoingsListBase.propTypes
};

export default DoingsListFull;
