import { takeEvery, put, call, fork } from 'redux-saga/effects'
import {
	photosLoaded,
	photosLoadingEnd,
	photosLoadingError,
} from '../actions/actionCreator'
import types from '../types'
import photoService from '../../services/photo.service'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export function* loadPhotosList() {
	try {
		yield call(delay, 1000)
		const payload = yield call(photoService.getList, '?_limit=24')

		yield put(photosLoaded(payload))
	} catch (e) {
		yield put(photosLoadingError('Ошибка запроса. Попробуйте позже.'))
	} finally {
		yield put(photosLoadingEnd())
	}
}

export function* handlePhotos() {
	yield fork(loadPhotosList)
}

export function* watchClickSaga() {
	yield takeEvery(types.GET_PHOTOS, handlePhotos)
}

export default function* rootSaga() {
	yield watchClickSaga()
}
