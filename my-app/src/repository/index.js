import axios from 'axios';
import { ITEM_URL } from '../constants';

const getList = async () => {
  return axios.get(ITEM_URL);
};

export {
  getList,
};