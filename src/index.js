import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {legacy_createStore, applyMiddleware } from '@reduxjs/toolkit';
//import movies from './reducers';
import rootReducer from './reducers'

//middleware code

// currying function    logger(obj)(next)(action)
const logger = function ({dispatch, getState}){
  return function (next){
    return function (action){
      console.log('ACTION_TYPE',action.type);
      next(action);

    }
  }

}


const store = legacy_createStore(rootReducer, applyMiddleware(logger));
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

