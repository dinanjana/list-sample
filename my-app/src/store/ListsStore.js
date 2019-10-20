import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import _ from 'lodash';
import StoreEvents from '../events';
import  { moveItem, revertItem } from "../logic";

const {
  UP,
  DOWN,
  REVERT,
  LOAD_DATA_FULFILLED,
} = StoreEvents;

const initialState = {
  list: [],
  historyList: {},
  error: null
};

const errorReducer = (state, action) => {
  return _.set(state, 'error', action.payload.error);
};

const reducer = (state = initialState, action) => {
  console.log(`Event fired: ${JSON.stringify(action)}`);
  if (_.has(action, 'payload.error')) {
    return errorReducer(state, action);
  }

  switch (action.type) {

    case UP:
      return _.chain(state)
      .clone()
      .set('list', moveItem(state.list, true))
      .set('historyList', state.historyList
        .push({currIdx: action.payload, nextIdx: ++action.payload}))
      .value();
    case DOWN:
      return _.chain(state)
      .clone()
      .set('list', moveItem(state.list))
      .set('historyList', state.historyList
      .push({currIdx: action.payload, nextIdx: --action.payload}))
      .value();
    case REVERT:
      const { postId, currentIdx, prevIdx } = action.payload;
      const { newList, newHistory } = revertItem(state.historyList, state.list, postId, currentIdx, prevIdx);
      return _.chain(state)
      .clone()
      .set('list', newList)
      .set('historyList', newHistory)
      .value();
    case LOAD_DATA_FULFILLED:
      return _.chain(state)
        .clone()
        .set('list', action.payload.data)
        .value();
    default:
      return state;
  }
};

const ListsStore = createStore(reducer, initialState, applyMiddleware(promise));

export default ListsStore;

