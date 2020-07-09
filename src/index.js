import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Buttons from './components/Buttons/Buttons';
import * as serviceWorker from './serviceWorker';

import './index.sass';
import './styles/_colors.sass';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Navbar/>
    <Buttons/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
