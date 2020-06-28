import fetch from 'isomorphic-fetch';
import { getErrorMessage } from './message.action';

export function getCharities() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/charities');
      const data = await response.json();
      dispatch({ type: 'TAMBOON/GET_CHARITIES', payload: data });
    } catch (e) {
      dispatch(getErrorMessage(e.message));
    }
  };
}

export function resetCharities() {
  return { type: 'TAMBOON/RESET_CHARITIES' };
}
