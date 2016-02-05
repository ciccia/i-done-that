import * as doingsConstants from '../constants/doingsConstants';

export function addDone(done) {
  return {
    type: doingsConstants.ADD_DONE,
    payload: done
  };
}

export function markDoneAsDone(id) {
  return {
    type: doingsConstants.MARK_DONE_AS_DONE,
    payload: id
  };
}

export function markDoneAsDoing(id) {
  return {
    type: doingsConstants.MARK_DONE_AS_DOING,
    payload: id
  };
}

export function deleteDone(id) {
  return {
    type: doingsConstants.DELETE_DONE,
    payload: id
  }
}
