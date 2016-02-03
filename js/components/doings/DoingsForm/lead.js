import React from 'react';
import DoingsFormBase from './base';

class DoingsFormLead extends DoingsFormBase {

  _handleSubmit(e) {
    e.preventDefault();
    this.submit(e.target.doneWhat.value, true);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={e => this._handleSubmit(e)}>

        <div className="row">
          <div className="input-field col s8">
            <input placeholder="What you done?" id="doneWhat" name="doneWhat"
                   type="text" className="validate" autoFocus required/>

          </div>
          <div className="input-field col s4">
            <button className="btn-large waves-effect waves-light orange" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }

}

export default DoingsFormLead;
