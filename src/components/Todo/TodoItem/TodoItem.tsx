import * as React from 'react';
import * as classNames from 'classnames';

import Label from 'components/Todo/TodoItem/Label/Label';
import Input from 'components/Todo/TodoItem/Input/Input';

import { TodoInterface, TodoActionInterface } from 'types/todo';

import './TodoItem.css';

interface Props {
    id: number;
    text: string;
    completed: boolean;
    updateTodo: (todo: TodoInterface) => TodoActionInterface;
    removeTodo: (id: number) => TodoActionInterface;
}

interface State {
    showCloseButton: boolean;
    editing: boolean;
}

export default class TodoItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showCloseButton: false,
            editing: false
        };
    }

    render() {
        const liClassNames = classNames(
            'todo-list__item',
            {
                editing: this.state.editing,
                completed: this.props.completed
            }
        );
        const buttonClassNames = classNames(
            'destroy',
            {visible: this.state.showCloseButton}
        );

        return (
            <>
            <li
                className={ liClassNames }
                onMouseEnter={ this.handleMouseEnter }
                onMouseLeave={ this.handleMouseLeave }
            >
                {
                    !this.state.editing &&
                    <Label
                        completed={ this.props.completed }
                        toggleCompleted={ this.toggleCompleted }
                        buttonClassNames={ buttonClassNames }
                        removeTodo={ this.handleRemoveItem }
                        handleDoubleClick={ this.handleEdit }
                    >
                        { this.props.text }
                    </Label>
                }
                {
                    this.state.editing &&
                    <Input
                        text={ this.props.text }
                        updateTodo={ this.handleUpdateItem }
                        toggleEditing={ this.handleEdit }
                    />
                }
            </li>
            </>
        );
    }

    handleRemoveItem = (): void => {
        this.props.removeTodo(this.props.id);
    }

    handleUpdateItem = (text: string): void => {
        const {id, completed} = this.props;
        this.props.updateTodo({id, text, completed});
    }

    toggleCompleted = (): void => {
        const {id, text, completed} = this.props;
        this.props.updateTodo({id, text, completed: !completed});
    }

    handleEdit = (state?: boolean): void => {
        if (state !== undefined) {
            this.setState({editing: state});
        } else {
            const editing = !this.state.editing;
            this.setState({editing});
        }
    }

    handleMouseEnter = (): void => {
        this.setState({showCloseButton: true});
    }

    handleMouseLeave = (): void => {
        this.setState({showCloseButton: false});
    }
}