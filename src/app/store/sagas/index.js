import { takeEvery } from 'redux-saga/effects'
import types from '../types'
import { handlePhotos } from './photoSagas'

export function* watchClickSaga() {
	yield takeEvery(types.GET_PHOTOS, handlePhotos)
}

export default function* rootSaga() {
	yield watchClickSaga()
}
