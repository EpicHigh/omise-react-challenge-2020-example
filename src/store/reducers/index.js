import { combineReducers } from 'redux';
import charitiesReducer from './charities.reducer';
import paymentsReducer from './payments.reducer';
import messageReducer from './message.reducer';
import donateReducer from './donate.reducer';

const rootReducer = combineReducers({
  charities: charitiesReducer,
  payments: paymentsReducer,
  message: messageReducer,
  donate: donateReducer,
});

export default rootReducer;
