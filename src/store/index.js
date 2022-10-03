import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./counterReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "@redux-saga/core";
import { countWatcher } from "../saga/countSaga";
import { rootWatcher } from "../saga";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)