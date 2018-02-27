import { TodoInterface } from 'types/todo';
import { Filter } from 'types/filter';

export interface RootState {
    todos: TodoInterface[];
    filter: Filter;
}