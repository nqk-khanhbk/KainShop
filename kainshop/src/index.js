import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter} from "react-router-dom";
import Modal from 'react-modal';

import { Provider } from 'react-redux';
import AllReducer from './Reducer';
import {createStore} from "redux";
const store = createStore(AllReducer);
Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
     </BrowserRouter>
  </Provider>
  
);


reportWebVitals();