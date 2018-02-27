import * as React from 'react';

import './Label.css';

interface Props {
    buttonClassNames: string;
    removeTodo: () => void;
    toggleCompleted: () => void;
    handleDoubleClick: () => void;
}

export default class Label extends React.Component<Props> {
    render() {
        return (
            <>
            <input
                type="checkbox"
                name="toggleCompleted"
                className="todo-list__toggle"
                onChange={ this.props.toggleCompleted }
            />
            <label
                onDoubleClick={ this.props.handleDoubleClick }
            >
                { this.props.children }
            </label>
            <button
                className={ this.props.buttonClassNames }
                onClick={ this.props.removeTodo }
            />
            </>
        );
    }
}