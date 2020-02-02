import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from '../config/firebaseConfig';

import rootReducer from './reducers';

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];
const initialState = {};

const withDevTools = process.env.NODE_ENV === 'development' 
  ? composeWithDevTools(
      applyMiddleware(...middleware),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    ) 
  : applyMiddleware(...applyMiddleware);

const store = createStore(rootReducer, initialState, withDevTools);

export default store;
