import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

import "./styles/styles.scss";

const root = document.getElementById('root') as HTMLElement
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  root
);
