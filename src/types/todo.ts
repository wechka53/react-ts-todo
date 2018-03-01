import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from 'constants/todo';
import { Action }                             from 'redux';

export interface TodoInterface {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoActionInterface extends Action {
    type: ADD_TODO | REMOVE_TODO | UPDATE_TODO;
    id: number;
    text?: string;
    completed?: boolean;
}
