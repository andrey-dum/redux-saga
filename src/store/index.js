import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)