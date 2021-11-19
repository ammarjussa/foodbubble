import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions/types';

const initialState = { isLoggedIn: false, user: null };

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return { isLoggedIn: true, user: action.payload };
    case SIGN_OUT_USER:
      return { isLoggedIn: false, user: action.payload };
    default:
      return state;
  }
}

export default authReducer;
