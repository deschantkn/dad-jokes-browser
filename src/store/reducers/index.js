import { combineReducers } from 'redux';
import jokesReducer from './jokes.reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
  jokes: jokesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
