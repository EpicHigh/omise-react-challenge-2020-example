import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../../helpers';
import { getErrorMessage, getSuccessMessage, resetSuccessMessage, resetErrorMessage } from './message.action';
import { updateTotalDonate } from './donate.action';

export function getPayments() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3001/payments');
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        dispatch({
          type: 'TAMBOON/GET_PAYMENTS',
          payload: data,
        });
        dispatch(updateTotalDonate(summaryDonations(data.map((item) => item?.amount || 0))));
      } else {
        throw new Error('Cannot receive a payment data');
      }
    } catch (e) {
      dispatch(getErrorMessage(e.message));
      setTimeout(() => dispatch(resetErrorMessage()), 5000);
    }
  };
}

export function makePayments(charitiesId, amount, currency) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3001/payments', {
        method: 'POST',
        body: JSON.stringify({ charitiesId, amount, currency }),
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(getSuccessMessage(`Thanks for donate ${amount}!`));
        dispatch(updateTotalDonate(amount + getState().donate));
        setTimeout(() => dispatch(resetSuccessMessage()), 2000);
      } else {
        throw new Error('Cannot make a payment');
      }
    } catch (e) {
      dispatch(getErrorMessage(e.message));
      setTimeout(() => dispatch(resetErrorMessage()), 5000);
    }
  };
}

export function resetPayments() {
  return { type: 'TAMBOON/RESET_PAYMENTS' };
}
