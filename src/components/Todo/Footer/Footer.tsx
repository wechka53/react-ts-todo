import * as React from 'react';

import { LinkContainer } from 'containers/LinkContainer';

import { FilterTypes } from 'types/filter';

import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="todo-list__footer">
                <LinkContainer filter={ FilterTypes.SHOW_ALL }>
                    All
                </LinkContainer>
                <LinkContainer filter={ FilterTypes.SHOW_COMPLETED }>
                    Completed
                </LinkContainer>
                <LinkContainer filter={ FilterTypes.SHOW_ACTIVE }>
                    Active
                </LinkContainer>
            </div>
        );
    }
}