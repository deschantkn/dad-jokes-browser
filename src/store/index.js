import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk.withExtraArgument({ getFirebase })];

const withDevTools = process.env.NODE_ENV === 'development' 
  ? composeWithDevTools(applyMiddleware(...middleware)) 
  : applyMiddleware(...middleware);

const store = createStore(rootReducer, initialState, withDevTools);

export default store;
