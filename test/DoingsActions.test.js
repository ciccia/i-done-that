import expect from 'expect';
import Immutable from 'immutable';
import { addDone, markDoneAsDoing, markDoneAsDone } from '../js/actions/DoingsActions';
import { ADD_DONE, MARK_DONE_AS_DOING, MARK_DONE_AS_DONE } from '../js/constants/DoingsConstants';

describe('DoingsActions', () => {
  describe('addDone', () => {
    it('should add a doing item', () => {
      const testDone = new Immutable.Map({
        id: 'uniqueID',
        date: new Date(),
        description: 'Some Description here',
        done: false
      });

      const expectedResult = {
        type: ADD_DONE,
        payload: testDone
      };

      expect(addDone(testDone)).toEqual(expectedResult);
    });
  });

  describe('markDoneAsDoing', () => {
    it('should mark a doing item as doing', () => {
      const uuid = '0000000000000';

      const expectedResult = {
        type: MARK_DONE_AS_DOING,
        payload: uuid
      };

      expect(markDoneAsDoing(uuid)).toEqual(expectedResult);
    });
  });

  describe('markDoneAsDone', () => {
    it('should mark a doing item as done', () => {
      const uuid = '0000000000000';

      const expectedResult = {
        type: MARK_DONE_AS_DONE,
        payload: uuid
      };

      expect(markDoneAsDone(uuid)).toEqual(expectedResult);
    });
  });
});
