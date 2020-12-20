import * as types from "../types/types";

export const loadUsers = () => {
    return {
        type: types.LOAD_USERS
    }
};

export const putLoadedUsers = (users) => {
    return {
        type: types.PUT_USERS,
        payload: users
    }
}