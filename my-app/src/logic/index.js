import _ from 'lodash';

const moveItem = (list, up) => {
  let elem;
  if (up) {
     elem = _.pullAt(list, [0]);
    return _.concat(list, elem);
  } else {
    elem = _.pullAt(list, [list.length-1]);
    return _.concat(elem, list);
  }
};

const revertItem = (history, list, postId, currentIdx, prevIdx) => {
  const historyList = history[postId];
  const idx = _.findIndex(historyList, (history) => history.currentIdx === currentIdx && history.prevIdx === prevIdx);
  const newHistoryList = _.pullAt(historyList, [0, idx]);

  list.splice(prevIdx, 0, list[_.findIndex(list, ele => ele.postId === postId)]);
  const curr = _.findIndex(list, ele => ele.postId === postId);
  const newList = _.remove(list, ({ index }) => index !== curr);
  const newHistory =  _.set(history, postId, newHistoryList);

  return {
    newList,
    newHistory
  };

};

export {
  moveItem,
  revertItem
}