import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
