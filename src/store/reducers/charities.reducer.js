const initialState = {};

function charitiesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TAMBOON/GET_CHARITIES':
      return { charities: payload };
    case 'TAMBOON/RESET_CHARITIES':
      return initialState;
    default:
      return state;
  }
}

export default charitiesReducer;
