import { SET_VISIBILITY }                from 'constants/filter';
import { Filter, FilterActionInterface } from 'types/filter';

export const setVisibility = (filter: Filter): FilterActionInterface => {
    return {
        type: SET_VISIBILITY,
        filter
    };
};