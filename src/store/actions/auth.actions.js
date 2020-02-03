import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../types/auth.types";


export const login = (credentials) => async (dispatch, getState, { getFirebase }) => {
  try {
    dispatch({ type: LOGIN });
    const { email, password } = credentials;
    const firebase = getFirebase();
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: { error } });
  }
};

export const logout = () => async (dispatch, getState, { getFirebase }) => {
  try {
    dispatch({ type: LOGOUT });
    const firebase = getFirebase();
    await firebase.auth().signOut();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_ERROR, payload: { error } });
  }
};

export const signup = (newUser) => async (dispatch, getState, { getFirebase }) => {
  try {
    dispatch({ type: SIGNUP });
    const { email, password, firstName, lastName } = newUser;
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firestore.collection('users').doc(user.uid).set({
      firstName,
      lastName,
      initials: `${firstName[0]}${lastName[0]}`
    });
    dispatch({ type: SIGNUP_SUCCESS })
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR, payload: { error } });
  }
};
