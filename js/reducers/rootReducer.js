/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import doingsReducer from './doingsReducer';

// Replace line below once you have several reducers with
import { combineReducers } from 'redux';
const rootReducer = combineReducers({doingsReducer});

export default rootReducer;
