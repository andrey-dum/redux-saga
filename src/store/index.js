import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))