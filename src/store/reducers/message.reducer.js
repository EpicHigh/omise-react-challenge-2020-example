const initialState = {};

function messageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TAMBOON/GET_ERROR_MESSAGE':
      return { ...state, error: payload };
    case 'TAMBOON/GET_SUCCESS_MESSAGE':
      return { ...state, success: payload };
    case 'TAMBOON/RESET_ERROR_MESSAGE':
      return { ...state, error: '' };
    case 'TAMBOON/RESET_SUCCESS_MESSAGE':
      return { ...state, success: '' };
    case 'TAMBOON/RESET_MESSAGE_STATE':
      return initialState;
    default:
      return state;
  }
}

export default messageReducer;
