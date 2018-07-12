import { combineReducers } from 'redux';
import {itemsHasErrored, itemsIsLoading, items } from './songs';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
});

export default rootReducer;