import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './component/Body';
import './index.css';
import { Provider } from 'react-redux';
import appStore from './utility/appStore';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Body />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
