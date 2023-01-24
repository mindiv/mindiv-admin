import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { getAuthTokenFromStorage } from './features/authSlice';

store.dispatch(getAuthTokenFromStorage());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
