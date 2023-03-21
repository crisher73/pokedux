import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import './index.css';
import rootReducer from './reducer/rootReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger)
);

const store = createStore(rootReducer,composedEnhancers);



root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
 
  </React.StrictMode>
);
