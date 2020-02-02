import {
  GET_USER_JOKES,
  CREATE_JOKE,
  CREATE_JOKE_ERROR,
  CREATE_JOKE_FINISHED
} from '../types/jokes.types';

const initialState = {
  isCreating: false,
  jokesList: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action; 

  switch (type) {
    case GET_USER_JOKES:
      break;
    case CREATE_JOKE:
      return {
        ...state,
        isCreating: true
      }
    case CREATE_JOKE_FINISHED:
      state.jokesList.push(payload.joke);
      return {
        ...state,
        isCreating: false
      };
    case CREATE_JOKE_ERROR:
      console.log(payload.error);
      return state;
    default:
      return state;
  }
};

export default reducer;