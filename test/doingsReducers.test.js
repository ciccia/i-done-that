import expect from 'expect';
import assert from 'assert';
import Immutable from 'immutable';
import doingsReducer from '../js/reducers/doingsReducer';
import * as actions from '../js/actions/doingsActions';

const testDone = new Immutable.Map({
  id: 'uniqueID',
  date: new Date(),
  description: 'Some Description here',
  done: false
});

describe('doings reducer', () => {
  it('should return the initial state', () => {
    const reduced = doingsReducer(undefined, {});
    expect(reduced).toEqual(Immutable.List());
    assert(Immutable.List.isList(reduced));
  });

  it('should handle the addDone action', () => {
    expect(doingsReducer(undefined, actions.addDone(testDone)))
      .toEqual(Immutable.List().push(testDone));
  });

  it('should handle the markDoneAsDoing action', () => {
    const list = Immutable.List().push(testDone.set('done', true));
    expect(doingsReducer(list, actions.markDoneAsDoing(testDone.id)))
      .toEqual(Immutable.List().push(testDone.set('done', false)));
  });

  it('should handle the markDoneAsDone action', () => {
    const list = Immutable.List().push(testDone);
    expect(doingsReducer(list, actions.markDoneAsDone(testDone.id)))
      .toEqual(Immutable.List().push(testDone.set('done', true)));
  });

  it('should handle the deleteDone action', () => {
    const list = Immutable.List().push(testDone);
    expect(doingsReducer(list, actions.deleteDone(testDone.id)))
      .toEqual(Immutable.List().push(testDone).remove(0));
  });
});
