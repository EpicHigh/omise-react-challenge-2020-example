export function updateTotalDonate(payload) {
  return { type: 'TAMBOON/UPDATE_TOTAL_DONATE', payload };
}

export function resetTotalDonate() {
  return { type: 'TAMBOON/RESET_TOTAL_DONATE' };
}
