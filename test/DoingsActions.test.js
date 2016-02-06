import expect from 'expect';
import Immutable from 'immutable';
import { addDone, markDoneAsDoing, markDoneAsDone, deleteDone, updateDone } from '../js/actions/doingsActions';
import { ADD_DONE, MARK_DONE_AS_DOING, MARK_DONE_AS_DONE, DELETE_DONE, UPDATE_DONE } from '../js/constants/doingsConstants';

import { testDone } from './doingsHelps';

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

  describe('deleteDone', () => {
    it('should delete a doing item', () => {
      const uuid = '0000000000000';

      const expectedResult = {
        type: DELETE_DONE,
        payload: uuid
      };

      expect(deleteDone(uuid)).toEqual(expectedResult);
    });
  });

  describe('updateDone', () => {
    it('should update a doing item', () => {

      const updatedDone = testDone.set('description', 'test');

      const expectedResult = {
        type: UPDATE_DONE,
        payload: {
          id: testDone.id,
          updatedDone: updatedDone
        }
      };

      expect(updateDone(testDone.id, updatedDone)).toEqual(expectedResult);
    });
  });
});
