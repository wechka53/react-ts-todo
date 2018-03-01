import * as React from 'react';

import { TodoActionInterface } from 'types/todo';

import './AddTodoForm.css';

interface Props {
    addTodo: (text: string) => TodoActionInterface;
}

interface State {
    value: string;
}

export default class AddTodoForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <form className="todo-list__input" onSubmit={ this.handleSubmit }>
                <input
                    type="text"
                    value={ this.state.value }
                    onChange={ this.handleChange }
                    placeholder="Add something"
                />
            </form>
        );
    }

    handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (this.state.value.length) {
            this.props.addTodo(this.state.value);
            this.setState({value: ''});
        } else {
            return;
        }

    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({value: event.currentTarget.value});
    };
}