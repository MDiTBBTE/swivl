import {all, call, put, takeEvery} from 'redux-saga/effects';

import {putLoadedUsers} from "../actions/usersAction";
import * as types from "../types/types";
import {putLoadedUser} from "../actions/userAction";

// users
async function loadUsers() {
    return await fetch('https://api.github.com/users?per_page=100', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(e => e.json())
        .then(result => result)
        .catch(error => console.log(error));
}

function* loadUsersWorker() {
    const users = yield call(loadUsers);

    yield put(putLoadedUsers(users));
}

function* loadUsersWatcher() {
    yield takeEvery(types.LOAD_USERS, loadUsersWorker)
}

//user
async function loadUser(username) {
    return await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(e => e.json())
        .then(result => result)
        .catch(error => console.log(error));
}

function* loadUserWorker(action) {
    const user = yield call(loadUser, action.payload);

    yield put(putLoadedUser(user));
}

function* loadUserWatcher() {
    yield takeEvery(types.LOAD_USER, loadUserWorker)
}

export default function* rootSaga() {
    yield all([
        loadUsersWatcher(),
        loadUserWatcher()
    ])
}