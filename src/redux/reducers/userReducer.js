import * as types from "../types/types";

const initialState = {
  users: [],
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PUT_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.PUT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
