import axios from 'axios';
import { actionTypes } from '../types/types';

export const getCrypto = async (dispatch: any) => {

  const response = await axios.get('https://api.coincap.io/v2/assets')
  .then(res => dispatch({
    type: actionTypes.GET_CRYPTO,
    payload: res.data.data
  }))
  .catch(err => console.log(err));
}