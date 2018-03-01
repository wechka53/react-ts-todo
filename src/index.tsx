import * as React                         from 'react';
import * as ReactDOM                      from 'react-dom';
import { createStore }                    from 'redux';
import { Provider }                       from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App                   from 'components/App/App';
import rootReducer           from 'redusers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

declare let window: any;

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route path="/:filter?" component={ App }/>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
