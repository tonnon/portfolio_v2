import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import * as serviceWorker from './serviceWorker';

import './index.sass';
import './styles/_colors.sass';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Navbar/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
