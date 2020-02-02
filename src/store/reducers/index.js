import { combineReducers } from 'redux';
import jokesReducer from './jokes.reducer';

export default combineReducers({
  jokes: jokesReducer
});
