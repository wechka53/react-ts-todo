import { ADD_TODO, initialTodoState, REMOVE_TODO, UPDATE_TODO } from 'constants/todo';
import { TodoActionInterface, TodoInterface }                   from 'types/todo';
import { generateId }                                           from 'helpers/generateId';

const actionsMap = {
    [ADD_TODO]: (state: TodoInterface[], action: TodoActionInterface): TodoInterface[] => {
        const text = <string> action.text;
        const id = generateId();
        const completed = false;

        return [...state, {id, text, completed}];
    },
    [REMOVE_TODO]: (state: TodoInterface[], action: TodoActionInterface): TodoInterface[] => state.filter(
        (todo: TodoInterface) => todo.id !== action.id
    ),
    [UPDATE_TODO]: (state: TodoInterface[], action: TodoActionInterface): TodoInterface[] => state.map(
        (todo: TodoInterface) => {
            if (todo.id === action.id) {
                const text = <string> action.text;
                const completed = <boolean> action.completed;
                return {...todo, text, completed};
            }
            return todo;
        })
};

export function reducer(state: TodoInterface[] = initialTodoState, action: TodoActionInterface) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}