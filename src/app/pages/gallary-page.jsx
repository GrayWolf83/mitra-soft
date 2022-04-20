import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import GallaryPhotosList from '../components/ui/gallary-photos-list'
import { getPhotosList } from '../store/reducers/photos'

const GallaryPage = () => {
	const photos = useSelector(getPhotosList())

	const categories = [
		photos.slice(0, 6),
		photos.slice(6, 12),
		photos.slice(12, 18),
		photos.slice(18, 24),
	]

	return (
		<Row>
			{categories.map((category, index) => (
				<GallaryPhotosList
					key={index}
					index={index}
					category={category}
				/>
			))}
		</Row>
	)
}

export default GallaryPage
