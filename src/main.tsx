import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/styles.css';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { getAuthTokenFromStorage } from './features/authSlice';
import WithTheme from './contexts/Theme';
import { getThemeModeFromStorage } from './features/appSlice';

store.dispatch(getAuthTokenFromStorage());
store.dispatch(getThemeModeFromStorage());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WithTheme>
        <GlobalStyle />
        <App />
      </WithTheme>
    </Provider>
  </React.StrictMode>
);
