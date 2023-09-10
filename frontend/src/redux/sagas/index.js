import { all } from "redux-saga/effects"


import { watchRegisterAsync } from "./RegisterSaga"

export function* rootSaga() {
    yield all([
        watchRegisterAsync(),
    ])
}