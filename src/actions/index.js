import { SIGN_IN_USER, SIGN_OUT_USER } from './types';

export const login = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
