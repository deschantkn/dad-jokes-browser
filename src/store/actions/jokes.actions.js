import {
  GET_USER_JOKES,
  GET_USER_JOKES_SUCCESS,
  GET_USER_JOKES_ERROR,
  CREATE_JOKE,
  CREATE_JOKE_FINISHED,
  CREATE_JOKE_ERROR
} from '../types/jokes.types';

export const getJokes = () => async (dispatch, getState, { getFirebase }) => {
  try {
    dispatch({ type: GET_USER_JOKES });
    let jokes = [];
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const { docs } = await firestore.collection('jokes').where('authorId', '==', userId).get();

    docs.forEach(doc => jokes.push(doc.data()));
    dispatch({ type: GET_USER_JOKES_SUCCESS, payload: { jokes } });
  } catch (error) {
    dispatch({ type: GET_USER_JOKES_ERROR, payload: { error } });
  }
};

export const createJoke = (joke) => async (dispatch, getState, { getFirebase }) => {
  try {
    dispatch({ type: CREATE_JOKE });
    const firebase = getState().firebase;
    const firestore = getFirebase().firestore();
    const authorId = firebase.auth.uid;
    const newJoke = {
      joke,
      authorId,
      createdOn: Date.now()
    };
    
    if (firebase.profile.isLoaded && firebase.profile.isEmpty) {
      Object.assign(newJoke, { authorName: firebase.auth.displayName });
    } else {
      Object.assign(newJoke, {
        authorFirstName: firebase.profile.firstName,
        authorLastName: firebase.profile.lastName,
      });
    }

    await firestore.collection('jokes').add(newJoke);
    dispatch({ type: CREATE_JOKE_FINISHED, payload: { joke: newJoke } });
  } catch (error) {
    dispatch({ type: CREATE_JOKE_ERROR, payload: { error } });
  }
};
