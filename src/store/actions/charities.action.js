import fetch from 'isomorphic-fetch';
import { getErrorMessage, resetErrorMessage } from './message.action';

export function getCharities() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/charities');
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        dispatch({ type: 'TAMBOON/GET_CHARITIES', payload: data });
      } else {
        throw new Error('Cannot receive a charity data');
      }
    } catch (e) {
      dispatch(getErrorMessage(e.message));
      setTimeout(() => dispatch(resetErrorMessage()), 5000);
    }
  };
}

export function resetCharities() {
  return { type: 'TAMBOON/RESET_CHARITIES' };
}
