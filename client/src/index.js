//  Principal imports
import React from 'react';
import ReactDOM from 'react-dom';
//  redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
//  Components import
import App from './components/App';
//  reducer import
import reducers from './reducers';

// redux setup
const store = createStore(reducers, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
