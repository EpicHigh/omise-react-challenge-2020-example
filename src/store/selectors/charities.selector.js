import { createSelector } from 'reselect';

const getCharitiesModule = (module) => module.charities;

export const getCharitiesState = createSelector([getCharitiesModule], (state) => state.charities);
