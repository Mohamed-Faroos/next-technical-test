import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './components/home';
import { store, persistor } from './store/store';

import "./styles/styles.scss";

const root = document.getElementById('root') as HTMLElement
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  root
);
