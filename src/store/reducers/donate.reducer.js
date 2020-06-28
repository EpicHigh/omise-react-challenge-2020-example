const initialState = 0;

function donateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TAMBOON/UPDATE_TOTAL_DONATE':
      return state + payload;
    case 'TAMBOON/RESET_TOTAL_DONATE':
      return initialState;
    default:
      return state;
  }
}

export default donateReducer;
