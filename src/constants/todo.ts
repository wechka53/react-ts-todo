import { TodoInterface } from 'types/todo';

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const REMOVE_TODO = 'REMOVE_TODO';
export type REMOVE_TODO = typeof REMOVE_TODO;

export const UPDATE_TODO = 'UPDATE_TODO';
export type UPDATE_TODO = typeof UPDATE_TODO;

export const initialTodoState: TodoInterface[] = [
    {
        id: 1,
        text: 'Test 1',
        completed: false
    },
    {
        id: 2,
        text: 'Test 2',
        completed: false
    },
    {
        id: 3,
        text: 'Test 3',
        completed: false
    }
];