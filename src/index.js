import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import './styles/_colors.sass';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Navbar/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
