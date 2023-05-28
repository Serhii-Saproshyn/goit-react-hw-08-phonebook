import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </Provider>
  </PersistGate>
);
