import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// This is if no store is setup in the APP
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { apiSlice } from './features/api/apiSlice';
import { Provider } from 'react-redux';
import { store } from './store.js';

// Used this with the API w/o store
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ApiProvider api={apiSlice}>
//         <App />
//      </ApiProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
