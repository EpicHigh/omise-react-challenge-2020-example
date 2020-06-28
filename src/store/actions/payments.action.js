import fetch from 'isomorphic-fetch';
import { getErrorMessage } from './message.action';

export function getPayments() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/payments');
      const data = await response.json();
      dispatch({
        type: 'TAMBOON/GET_PAYMENTS',
        payload: data,
      });
    } catch (e) {
      dispatch(getErrorMessage(e.message));
    }
  };
}

export function resetPayments() {
  return { type: 'TAMBOON/RESET_PAYMENTS' };
}
