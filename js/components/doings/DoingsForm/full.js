import React, { PropTypes } from 'react';
import DoingsFormBase from './base';
import Row from 'react-materialize/lib/Row';
import Input from 'react-materialize/lib/Input';

import moment from 'moment';

class DoingsFormFull extends DoingsFormBase {

  componentDidMount() {
    $('.datepicker').pickadate();
  }

  _handleSubmit(e) {
    e.preventDefault();
    let {what, when, isDone} = e.target;
    this.submit(what.value, isDone.checked, when.value);
    what.value = null;
    what.focus();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.date !== this.props.date;
  }

  render() {
    const {date, onDateChange} = this.props;

    return (
      <form className="section" onSubmit={e => this._handleSubmit(e)}>
        <div className="row">
          <div className="input-field col s12">
            <input type="date"
                   className="datepicker"
                   onChange={onDateChange}
                   value={moment(date).format('YYYY-MM-DD')}
                   id="when" name="when"
                   required
            />
          </div>
          <div className="input-field col s12">
            <input id="what" name="what"
                   type="text" required autoFocus={true}/>
            <label htmlFor="what">What you done?</label>
          </div>
          <div className="input-field col s4">
            <input type="checkbox" id="isDone" name="isDone" />
            <label htmlFor="isDone">isDone</label>
          </div>
          <div className="input-field col s8 right-align">
            <button className="btn-large waves-effect waves-light orange" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }

}

DoingsFormFull.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func
};

export default DoingsFormFull;
