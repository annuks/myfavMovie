import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {legacy_createStore } from '@reduxjs/toolkit';
//import movies from './reducers';
import rootReducer from './reducers'


const store = legacy_createStore(rootReducer);
console.log('store',store);
console.log('BEFORE STATE',store.getState());


// store.dispatch
//  ({

// type:'ADD_MOVIES',
// movies : [{name:'Superman'}]
// });
// console.log('AFTERS STATE',store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

