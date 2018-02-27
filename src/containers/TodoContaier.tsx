import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Todo from 'components/Todo/Todo';
import { addTodo, removeTodo, updateTodo } from 'actions/todo';

import { TodoInterface, TodoActionInterface } from 'types/todo';
import { RootState } from 'types/store';
import { FilterTypes } from 'types/filter';

const filteredOutput = (todos: TodoInterface[], filterType: string): TodoInterface[] => {
    switch (filterType) {
        case FilterTypes.SHOW_ALL:
            return todos;
        case FilterTypes.SHOW_ACTIVE:
            return todos.filter((todo: TodoInterface) => !todo.completed);
        case FilterTypes.SHOW_COMPLETED:
            return todos.filter((todo: TodoInterface) => todo.completed);
        default:
            throw Error(`Incorrect filter  ${filterType}`);
    }
};

const mapStateToProps = (state: RootState) => ({todos: filteredOutput(state.todos, state.filter)});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionInterface>) => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    updateTodo: (todo: TodoInterface) => dispatch(updateTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id))
});

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);