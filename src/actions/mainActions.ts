import axios from 'axios';
import { actionTypes } from '../types/types';

export const getCrypto = (dispatch: any) => {
  
  axios.get('https://cors.bridged.cc/https://api.coincap.io/v2/assets')
  .then(res => dispatch({
    type: actionTypes.GET_CRYPTO,
    payload: res.data.data
  }))
  .catch(err => console.log(err));
}