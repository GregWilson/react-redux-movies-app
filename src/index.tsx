import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as Tether from 'tether';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

// styles and bootstrap js
import './style/main.scss';
(window as any)["$"] = (window as any)["jQuery"] = $;
(window as any)["Tether"] = Tether;
import 'bootstrap/dist/js/bootstrap.bundle.js';

// reducers
import reducers from './reducers/index';
import StoreManager from './store';

// route containers
import App from './app';
import Movies from './containers/movies';

// create store with middlewares
const loggerMiddleware = createLogger();
const store = createStore<any>(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

StoreManager.SetStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path={'/'} component={App}>
                <IndexRoute component={Movies} />
                <Route path={'/movies'} component={Movies} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

