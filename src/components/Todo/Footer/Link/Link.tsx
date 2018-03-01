import * as React                                     from 'react';
import { Filter, FilterTypes } from 'types/filter';
import { Link as RouterLink }                         from 'react-router-dom';

interface Props {
    filter: Filter;
}

export default class Link extends React.Component<Props> {
    render() {
        return (
            <RouterLink
                to={ this.props.filter === FilterTypes.SHOW_ALL ? '/' : this.props.filter }
            >
                { this.props.children }
            </RouterLink>
        );
    }
}