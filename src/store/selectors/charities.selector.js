import { createSelector } from 'reselect';

const getCharitiesState = (state) => state.charities;

export const getCharityList = createSelector([getCharitiesState], (state) => state.charities);
