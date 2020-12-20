import * as types from "../types/types";

export const loadUser = (username) => {
  return {
    type: types.LOAD_USER,
    payload: username
  }
};

export const putLoadedUser = (user) => {
  return {
    type: types.PUT_USER,
    payload: user
  }
}