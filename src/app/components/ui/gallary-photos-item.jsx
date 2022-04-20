import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import GallaryItemLink from './gallary-item-link'

const GallaryPhotosItem = ({ photo }) => {
	const [showLink, setShowLink] = useState({})

	const showLinkHandler = (id) => {
		setShowLink({ [id]: true })
	}

	const hideLinkHandler = (e) => {
		if (e.currentTarget.tagName === 'DIV') {
			setShowLink({})
		}
	}

	return (
		<Col
			onMouseEnter={() => showLinkHandler(photo.id)}
			onMouseLeave={(e) => hideLinkHandler(e)}
			className='position-relative mb-2 text-center'>
			<img src={photo.thumbnailUrl} alt={photo.title} />

			<GallaryItemLink
				onMouseEnter={showLinkHandler}
				id={photo.id}
				visible={showLink[photo.id] || false}
			/>
		</Col>
	)
}

export default GallaryPhotosItem
