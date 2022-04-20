import React from 'react'
import { useSelector } from 'react-redux'
import { getPhotosList } from '../store/reducers/photos'

const GallaryPage = () => {
	const photos = useSelector(getPhotosList())

	console.log('photos', photos)

	return <h1>Gallary page</h1>
}

export default GallaryPage
