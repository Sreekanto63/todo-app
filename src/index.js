// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'; // You can also create a custom CSS file to style the app further
import 'bootstrap/dist/css/bootstrap.min.css'; // or 'tailwindcss/dist/tailwind.css' for Tailwind CSS
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

