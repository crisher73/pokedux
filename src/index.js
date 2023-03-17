import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {pokemonsReducer} from './reducer/pokemons'
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { nameUpperCase, logger } from './middlewares';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers = compose(
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger, nameUpperCase)
);

const store = createStore(pokemonsReducer,composeEnhancers);



root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
 
  </React.StrictMode>
);
