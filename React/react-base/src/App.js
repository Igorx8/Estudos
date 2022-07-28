import React from 'react';
import Roteador from './router';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Roteador />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
