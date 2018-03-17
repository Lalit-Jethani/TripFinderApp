import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './response.json';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
