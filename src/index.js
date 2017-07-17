import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import ModelStore from './models/model';

const appState = new ModelStore;

ReactDOM.render(<App appState={appState} />, document.querySelector('.container'));
