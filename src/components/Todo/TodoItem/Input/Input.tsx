import * as React from 'react';

interface Props {
    text: string;
    updateTodo: (text: string) => void;
    toggleEditing: (state?: boolean) => void;
}

interface State {
    text: string;
}

export default class Input extends React.Component<Props, State> {
    private input;

    constructor(props: Props) {
        super(props);

        const {text} = this.props;
        this.state = {text};
    }

    componentDidMount() {
        this.input.focus();
    }

    render() {
        return (
            <input
                type="text"
                className="edit"
                ref={ (ref) => this.input = ref }
                value={ this.state.text }
                onChange={ this.handleOnChange }
                onBlur={ this.inputLostFocus }
                onKeyPress={ this.handleKeyPress }
            />
        );
    }

    handleOnChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const text = event.currentTarget.value;
        this.setState({text});
    }

    inputLostFocus = () => {
        const {text} = this.props;
        this.setState({text});
        this.props.toggleEditing(false);
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.props.updateTodo(event.target.value);
            this.props.toggleEditing();
        }
    }
}