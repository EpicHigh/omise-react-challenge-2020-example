export function getErrorMessage(payload) {
  return { type: 'TAMBOON/GET_ERROR_MESSAGE', payload };
}

export function getSuccessMessage(payload) {
  return { type: 'TAMBOON/GET_SUCCESS_MESSAGE', payload };
}

export function resetErrorMessage() {
  return { type: 'TAMBOON/RESET_ERROR_MESSAGE' };
}

export function resetSuccessMessage() {
  return { type: 'TAMBOON/RESET_SUCCESS_MESSAGE' };
}

export function resetMessageState() {
  return { type: 'TAMBOON/RESET_MESSAGE_STATE' };
}
