import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './print.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import store from './redux/store.ts';
import { ThemeContextProvider } from './theme/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter basename="">
        <Provider store={store}>
          <App />
          <ToastContainer autoClose={3000} />
        </Provider>
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
