import Immutable from 'immutable';

export const testDone = new Immutable.Map({
  id: 'uniqueID',
  date: new Date(),
  description: 'Some Description here',
  done: false
});
