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

const revertItem = (historyList, list, postId, currentIdx, prevIdx) => {
  const historyIdx = _.findIndex(historyList,
    (history) => history.currentIdx === currentIdx && history.prevIdx === prevIdx && history.postId === postId);

  console.log(historyIdx)

  for (let i = 0; i <= historyIdx; i++) {
    if (historyList[i].postId === postId) {
      historyList[i] = null;
    }
  }

  const postIdx = _.findIndex(list, (elm) => elm.id === postId);
  const post = list.splice(postIdx, 1);
  list.splice(prevIdx, 0, post[0]);

  return { list, historyList: _.compact(historyList) };
};

const addHistory = (postId, currentIdx, up, historyList) => {
  let nextIdx;
  const prevIdx = currentIdx;
  if (up) {
    if ((currentIdx - 1) < 0) {
      nextIdx = 4;
    } else {
      nextIdx = --currentIdx;
    }
  } else {
    if ((currentIdx + 1) > 4) {
      nextIdx = 0;
    } else {
      nextIdx = ++currentIdx;
    }
  }

  historyList.push({ prevIdx, postId, currentIdx: nextIdx});
  return historyList;
};

export {
  moveItem,
  revertItem,
  addHistory
}