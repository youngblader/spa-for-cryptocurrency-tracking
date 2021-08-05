import axios from 'axios';
import { actionTypes } from '../types/types';

export const getGraphsCryptoItems = (id: string, dispatch: any) => {
 
 axios.get(`https://cors.bridged.cc/https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
  .then(res => dispatch({
    type: actionTypes.GET_GRAPHS_ITEMS,
    payload: res.data.data
  }))
  .catch(err => console.log(err));
}