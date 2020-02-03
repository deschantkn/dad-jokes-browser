import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../types/auth.types";


const initialState = {
  loginError: false,
  loginSuccess: false,
  logoutError: false,
  logoutSuccess: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginError: false,
        loginSuccess: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: payload.error,
        loginSuccess: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutError: false,
        logoutSuccess: true
      }
    case LOGOUT_ERROR:
      return {
        ...state,
        logoutError: true,
        logoutSuccess: false
      }
    case LOGIN:
    case LOGOUT:
    default:
      return state;
  }
};

export default reducer;
