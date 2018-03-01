import * as React                        from 'react';
import { Filter, FilterActionInterface } from 'types/filter';

interface Props {
    active: boolean;
    filter: Filter;
    setVisibility: () => FilterActionInterface;
}

export default class Link extends React.Component<Props> {
    render() {
        return (
            <>
                {
                    !this.props.active &&
                    <a
                        href="#"
                        onClick={ this.handleOnclick }
                    >
                        { this.props.children }
                    </a>
                }
                {
                    this.props.active &&
                    <span>{ this.props.children }</span>

                }
            </>
        );
    }

    handleOnclick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        this.props.setVisibility();
    };
}