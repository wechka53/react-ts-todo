import * as React from 'react';

interface Props {
    buttonClassNames: string;
    removeTodo: () => void;
    handleDoubleClick: () => void;
}

export default class Label extends React.Component<Props> {
    render() {
        return (
            <>
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