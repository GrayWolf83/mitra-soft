import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import GallaryPhotosItem from './gallary-photos-item'

const GallaryPhotosList = ({ index, category }) => {
	return (
		<Col lg={6} className='mb-3'>
			<Row>
				<h3>Галерея {index + 1}</h3>
				{category.map((photo) => (
					<GallaryPhotosItem key={photo.id} photo={photo} />
				))}
			</Row>
		</Col>
	)
}

GallaryPhotosList.propTypes = {
	index: PropTypes.number,
	category: PropTypes.arrayOf(PropTypes.object),
}

export default GallaryPhotosList
