import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Todo from 'components/Todo/Todo';
import { addTodo, removeTodo, updateTodo } from 'actions/todo';

import { TodoInterface, TodoActionInterface } from 'types/todo';
import { RootState } from 'types/store';

const mapStateToProps = (state: RootState) => ({todos: state.todos});

const mapDispatchToProps = (dispatch: Dispatch<TodoActionInterface>) => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    updateTodo: (todo: TodoInterface) => dispatch(updateTodo(todo)),
    removeTodo: (id: number) => dispatch(removeTodo(id))
});

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);