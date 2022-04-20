import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getPhotoById } from '../store/reducers/photos'

const SingleImagePage = () => {
	const { photoId } = useParams()
	const photo = useSelector(getPhotoById(photoId))

	if (!photoId || !photo) {
		return <Redirect to={'/'} />
	}

	return (
		<>
			<h3>Фото: {photo.title}</h3>
			<h4>id: {photo.id}</h4>
			<Row>
				<Col md={6} className='offset-md-3'>
					<img
						src={photo.url}
						className='d-block w-100 mx-center'
						alt=''
					/>
				</Col>
			</Row>
		</>
	)
}

export default SingleImagePage
