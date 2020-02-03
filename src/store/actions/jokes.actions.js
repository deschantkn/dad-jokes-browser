import {
  GET_USER_JOKES,
  CREATE_JOKE,
  CREATE_JOKE_FINISHED,
  CREATE_JOKE_ERROR
} from '../types/jokes.types';

export const getJokes = () => async (dispatch) => {
  dispatch({ type: GET_USER_JOKES });
};

export const createJoke = (joke) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirebase().firestore();
  const newJoke = { joke, author: 'Anonymous' };

  try {
    dispatch({ type: CREATE_JOKE });
    await firestore.collection('jokes').add(newJoke);
    dispatch({ type: CREATE_JOKE_FINISHED, payload: { joke: newJoke } });
  } catch (error) {
    dispatch({ type: CREATE_JOKE_ERROR, payload: { error } });
  }
};
