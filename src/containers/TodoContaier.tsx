import { connect }        from 'react-redux';
import { Dispatch }       from 'redux';
import { createSelector } from 'reselect';

import Todo                                from 'components/Todo/Todo';
import { addTodo, removeTodo, updateTodo } from 'actions/todo';

import { TodoActionInterface, TodoInterface } from 'types/todo';
import { RootState }                          from 'types/store';
import { Filter, FilterTypes }                from 'types/filter';

const todosSelector = (state: RootState): TodoInterface[] => state.todos;
const filterTypeSelector = (state: RootState, ownProps): Filter => {
    console.log(ownProps);
    return ownProps.filter ? ownProps.filter : FilterTypes.SHOW_ALL;
};

const filterTodos = createSelector(
    [
        todosSelector,
        filterTypeSelector
    ],
    (todos: TodoInterface[],
     filterType: Filter) => {
        switch (filterType) {
            case FilterTypes.SHOW_ALL:
                return todos;
            case FilterTypes.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            case FilterTypes.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            default:
                throw Error(`Incorrect filter  ${filterType}`);
        }
    });

const mapStateToProps = (state: RootState, ownProps) => ({
    todos: filterTodos(state, ownProps)
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionInterface>) => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    updateTodo: (todo: TodoInterface) => dispatch(updateTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id))
});

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);