
import * as api from '../../apis/index'
import * as sliceRegister from '../slice/RegisterSlice'
import { put, takeEvery } from 'redux-saga/effects'
import * as Register from '../slice/RegisterDetail'
import TYPES from "../types"


export function* getRegisterSaga() {
    const users = yield api.getRegisterAPI()
    yield put(sliceRegister.getRegisterSlice(users.data.rows))
}

export function* getRegisterByIdSaga(action) {
    yield api.getRegisterByIdAPI(action.id)
    yield put(Register.getRegisterDetailSlice(action.id))
}




export function* createRegisterSaga(action) {
    yield api.createRegisterAPI(action.user)
    yield put(sliceRegister.addRegisterSlice(action.user))
}

export function* updateRegisterSaga(action) {
    yield api.updateRegisterAPI(action.id,action.data)
    yield put(sliceRegister.editRegisterSlice(action.id,action.data))
}



export function* watchRegisterAsync() {
    yield takeEvery(TYPES.GET_REGISTER,         getRegisterSaga)
    yield takeEvery(TYPES.GET_REGISTER_BY_ID, getRegisterByIdSaga)
    yield takeEvery(TYPES.CREATE_REGISTER,     createRegisterSaga)
    yield takeEvery(TYPES.UPDATE_REGISTER_BY_ID, updateRegisterSaga)


}