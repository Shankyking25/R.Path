import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import {rootSaga} from './redux/sagas'


import Register from "./redux/slice/RegisterSlice"
import RegisterDetail from "./redux/slice/RegisterDetail"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
       
        Register,
        RegisterDetail
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store