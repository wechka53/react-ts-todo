import { Filter, FilterTypes } from 'types/filter';

export const SET_VISIBILITY = 'SET_VISIBILITY';
export type SET_VISIBILITY = typeof SET_VISIBILITY;

export const initialFilterState: Filter = FilterTypes.SHOW_ALL;