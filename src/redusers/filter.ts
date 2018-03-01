import { initialFilterState, SET_VISIBILITY } from 'constants/filter';
import { Filter, FilterActionInterface }      from 'types/filter';

const actionsMap = {
    [SET_VISIBILITY]: (state: Filter, action: FilterActionInterface): Filter => action.filter
};

export function reducer(state: Filter = initialFilterState, action: FilterActionInterface) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}