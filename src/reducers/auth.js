export const initialState = { isLoggedIn: false, user: null };

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
