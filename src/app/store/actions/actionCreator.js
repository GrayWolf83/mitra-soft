import types from '../types'

export const photosLoading = () => ({
	type: types.GET_PHOTOS,
})

export const photosLoaded = (payload) => ({
	type: types.PHOTOS_LOADED,
	payload,
})

export const photosLoadingStart = () => ({
	type: types.PHOTOS_LOADING_START,
})

export const photosLoadingEnd = () => ({
	type: types.PHOTOS_LOADING_END,
})

export const photosLoadingError = (payload) => ({
	type: types.PHOTOS_LOADING_ERROR,
	payload,
})
