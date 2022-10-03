import {all} from "redux-saga/effects"
import { countWatcher } from "./countSaga"
import { userWatcher } from "./userSaga"

//all глобальный вотчер, следит за другими вотчерами

export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()])
}