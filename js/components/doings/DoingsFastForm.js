import React from 'react';
import moment from 'moment';
import DoingsForm from './DoingsForm';

class DoingsFastForm extends DoingsForm {

  render() {
    return (
      <form onSubmit={e => this._handleSubmit(e)}>
        <input type="hidden" name="doneWhen" value={moment().format('YYYY-MM-DD')}/>
        <input type="text" autoFocus name="doneWhat"/>
        <input type="hidden" name="doneIsDone" value={true}/>
        <input type="submit"/>
      </form>
    );
  }

}

export default DoingsFastForm;
