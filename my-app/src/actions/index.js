import _ from 'lodash';
import StoreEvents from '../events';
import { getList } from '../repository'

const {
  UP,
  DOWN,
  REVERT,
  LOAD_DATA,
} = StoreEvents;

const loadData = () => ({
  type: LOAD_DATA,
  payload: getList()
  .then(data => data)
  .catch(e => ({error: e})),
});

const move = (currentIdx, moveUp = true) => ({
  type: moveUp ? UP: DOWN,
  payload: currentIdx
});

const revert = (currentIdx, prevIdx) => ({
  type: REVERT,
  payload: {
    currentIdx,
    prevIdx
  }
});

export {
  loadData,
  move,
  revert
};