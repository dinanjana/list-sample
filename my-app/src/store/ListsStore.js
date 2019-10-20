import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import _ from 'lodash';
import StoreEvents from '../events';
import  { moveItem, revertItem, addHistory } from "../logic";

const {
  UP,
  DOWN,
  REVERT,
  LOAD_DATA_FULFILLED,
} = StoreEvents;

const initialState = {
  list: [],
  historyList: [],
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
      .set('historyList', addHistory(state.list[action.payload].id, action.payload, true, _.clone(state.historyList)))
      .set('list', moveItem(state.list, true))
      .value();
    case DOWN:
      return _.chain(state)
      .clone()
      .set('historyList', addHistory(state.list[action.payload].id, action.payload, false, _.clone(state.historyList)))
      .set('list', moveItem(state.list))
      .value();
    case REVERT:
      const { postId, currentIdx, prevIdx } = action.payload;
      const result = revertItem(_.clone(state.historyList), _.clone(state.list), postId, currentIdx, prevIdx);
      return _.chain(state)
      .clone()
      .set('list', result.list)
      .set('historyList', result.historyList)
      .value();
    case LOAD_DATA_FULFILLED:
      return _.chain(state)
        .clone()
        .set('list', action.payload)
        .value();
    default:
      return state;
  }
};

const ListsStore = createStore(reducer, initialState, applyMiddleware(promise));

export default ListsStore;

