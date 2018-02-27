import * as React from 'react';

import TodoItem from 'components/Todo/TodoItem/TodoItem';
import AddTodoForm from 'components/Todo/AddTodoForm/AddTodoForm';
import Footer from 'components/Todo/Footer/Footer';

import { TodoActionInterface, TodoInterface  } from 'types/todo';

import './Todo.css';

interface Props {
    todos: TodoInterface[];
    addTodo: (text: string) => TodoActionInterface;
    updateTodo: (todo: TodoInterface) => TodoActionInterface;
    removeTodo: (id: number) => TodoActionInterface;
}

interface State {}

export default class Todo extends React.Component<Props, State> {
    render() {
        return (
            <div className="todo-list--wrapper">
                <h2>Todo's</h2>
                <AddTodoForm addTodo={ this.props.addTodo }/>
                <ul className="todo-list">
                    {
                        this.props.todos
                            .slice(0)
                            .reverse()
                            .map(todo =>
                                <TodoItem
                                    key={ todo.id }
                                    { ...todo }
                                    updateTodo={ this.props.updateTodo }
                                    removeTodo={ this.props.removeTodo }
                                />
                            )
                    }
                </ul>
                <Footer/>
            </div>
        );
    }
}