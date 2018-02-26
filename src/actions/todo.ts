import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from 'constants/todo';
import { TodoActionInterface, TodoInterface } from 'types/todo';
import { generateId } from 'helpers/generateId';

export const addTodo = (text: string): TodoActionInterface => {
    return {
        type: ADD_TODO,
        id: generateId(),
        text: text,
        completed: false
    };
};

export const updateTodo = (todo: TodoInterface): TodoActionInterface => {
    return {
        type: UPDATE_TODO,
        id: todo.id,
        text: todo.text,
        completed: todo.completed
    };
};

export const removeTodo  = (id: number): TodoActionInterface => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};