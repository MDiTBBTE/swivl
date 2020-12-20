import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from 'redux-saga';

import rootReducer from "../reducers";

import {save, load} from "redux-localstorage-simple";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware
    = composeWithDevTools(applyMiddleware(
    save({states: ['usersData.user'], namespace: 'users'}), sagaMiddleware)
)(createStore)


const store = createStoreWithMiddleware(
    rootReducer,
    load({states: ['usersData.user'], namespace: 'users'})
)

sagaMiddleware.run(rootSaga);

export default store;
