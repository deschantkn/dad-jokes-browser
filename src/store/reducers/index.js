import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import jokesReducer from './jokes.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
  auth: authReducer,
  jokes: jokesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
