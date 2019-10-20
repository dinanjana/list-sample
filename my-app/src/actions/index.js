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
  .then(data => _.slice(data.data, 0, 5))
  .catch(e => ({error: e})),
});

const move = (currentIdx, moveUp = true) => ({
  type: moveUp ? UP: DOWN,
  payload: currentIdx
});

const revert = (postId, currentIdx, prevIdx) => ({
  type: REVERT,
  payload: {
    currentIdx,
    prevIdx,
    postId
  }
});

export {
  loadData,
  move,
  revert
};