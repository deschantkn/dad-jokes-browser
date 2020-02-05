import {
  GET_USER_JOKES,
  GET_USER_JOKES_SUCCESS,
  GET_USER_JOKES_ERROR,
  CREATE_JOKE,
  CREATE_JOKE_ERROR,
  CREATE_JOKE_FINISHED
} from '../types/jokes.types';

const initialState = {
  isCreating: false,
  jokesList: [],
  error: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action; 

  switch (type) {
    case GET_USER_JOKES_SUCCESS:
      return {
        ...state,
        jokesList: payload.jokes
      };
    case GET_USER_JOKES_ERROR:
      return {
        ...state,
        error: payload.error
      };
    case CREATE_JOKE:
      return {
        ...state,
        isCreating: true
      }
    case CREATE_JOKE_FINISHED:
      return {
        ...state,
        isCreating: false
      };
    case CREATE_JOKE_ERROR:
      return {
        ...state,
        error: payload.error,
        isCreating: false
      };
    case GET_USER_JOKES:
    default:
      return state;
  }
};

export default reducer;
