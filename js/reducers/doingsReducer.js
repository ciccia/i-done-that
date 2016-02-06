import Immutable from 'immutable';
import * as doingsConstants from '../constants/doingsConstants';

const initialState = Immutable.List();

function searchDoing(state, id) {
  return state.findIndex(item => item.get('id') === id);
}

function doingsReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case doingsConstants.ADD_DONE:
      return state.push(action.payload);
    case doingsConstants.MARK_DONE_AS_DONE:
      return state.updateIn([searchDoing(state, action.payload), 'done'], () => true);
    case doingsConstants.MARK_DONE_AS_DOING:
      return state.updateIn([searchDoing(state, action.payload), 'done'], () => false);
    case doingsConstants.DELETE_DONE:
      return state.removeIn([searchDoing(state, action.payload)]);
    case doingsConstants.UPDATE_DONE:
      return state.set(searchDoing(state, action.payload.id), action.payload.updatedDone);
    default:
      return state;
  }
}

export default doingsReducer;
