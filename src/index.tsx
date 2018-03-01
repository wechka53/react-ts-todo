declare let window: any;

import { Provider }    from 'react-redux';
import * as React      from 'react';
import * as ReactDOM   from 'react-dom';
import { createStore } from 'redux';

import App                   from 'components/App/App';
import rootReducer           from 'redusers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
