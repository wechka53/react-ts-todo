import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Todo from 'components/Todo/Todo';
import { addTodo, removeTodo, updateTodo } from 'actions/todo';

import { TodoInterface, TodoActionInterface } from 'types/todo';
import { RootState } from 'types/store';
import { Filter, FilterTypes } from 'types/filter';
import { createSelector } from 'reselect';


const getTodos = (state: RootState) => state.todos;
const getFilterType = (state: RootState) => state.filter;

const filterTodos = createSelector(
    [getTodos, getFilterType],
    (todos: TodoInterface[], filterType: Filter) => {
        switch (filterType) {
            case FilterTypes.SHOW_ALL:
                console.log('pure');
                return todos;
            case FilterTypes.SHOW_ACTIVE:
                console.log('pure');
                return todos.filter((todo: TodoInterface) => !todo.completed);
            case FilterTypes.SHOW_COMPLETED:
                console.log('pure');
                return todos.filter((todo: TodoInterface) => todo.completed);
            default:
                throw Error(`Incorrect filter  ${filterType}`);
        }
    });

// const filteredOutput = (todos: TodoInterface[], filterType: string): TodoInterface[] => {
//     switch (filterType) {
//         case FilterTypes.SHOW_ALL:
//             return todos;
//         case FilterTypes.SHOW_ACTIVE:
//             return todos.filter((todo: TodoInterface) => !todo.completed);
//         case FilterTypes.SHOW_COMPLETED:
//             return todos.filter((todo: TodoInterface) => todo.completed);
//         default:
//             throw Error(`Incorrect filter  ${filterType}`);
//     }
// };

const mapStateToProps = (state: RootState) => (
    {
        todos: filterTodos(state),
    });

const mapDispatchToProps = (dispatch: Dispatch<TodoActionInterface>) => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    updateTodo: (todo: TodoInterface) => dispatch(updateTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id))
});

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);