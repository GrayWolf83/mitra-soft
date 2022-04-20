import types from '../types'

const initialState = {
	entities: [],
	isLoading: true,
	error: null,
}

const photos = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.PHOTOS_LOADING_START:
			return {
				...state,
				isLoading: true,
			}

		case types.PHOTOS_LOADED:
			return {
				...state,
				entities: [...payload],
			}

		case types.PHOTOS_LOADING_END:
			return {
				...state,
				isLoading: false,
			}

		case types.PHOTOS_LOADING_ERROR:
			return {
				...state,
				error: payload,
			}

		default:
			return state
	}
}

export const getPhotosList = () => (state) => state.photos.entities
export const getLoadingStatus = () => (state) => state.photos.isLoading

export default photos
