import { SET_VISIBILITY } from 'constants/filter';

export interface FilterActionInterface {
    type: SET_VISIBILITY;

    [key: string]: any;
}

export namespace FilterTypes {
    export const SHOW_ALL = 'SHOW_ALL';
    export type SHOW_ALL = typeof SHOW_ALL;

    export const SHOW_ACTIVE = 'SHOW_ACTIVE';
    export type SHOW_ACTIVE = typeof SHOW_ACTIVE;

    export const SHOW_COMPLETED = 'SHOW_COMPLETED';
    export type SHOW_COMPLETED = typeof SHOW_COMPLETED;
}

export type Filter = typeof FilterTypes.SHOW_ALL | FilterTypes.SHOW_COMPLETED | FilterTypes.SHOW_ACTIVE;

