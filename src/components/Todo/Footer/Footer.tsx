import * as React      from 'react';
import { FilterTypes } from 'types/filter';

import './Footer.css';
import Link            from 'components/Todo/Footer/Link/Link';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="todo-list__footer">
                <Link filter={ FilterTypes.SHOW_ALL }>
                    All
                </Link>
                <Link filter={ FilterTypes.SHOW_COMPLETED }>
                    Completed
                </Link>
                <Link filter={ FilterTypes.SHOW_ACTIVE }>
                    Active
                </Link>
            </div>
        );
    }
}