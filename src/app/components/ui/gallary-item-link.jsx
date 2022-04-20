import React from 'react'
import { NavLink } from 'react-router-dom'

const GallaryItemLink = ({ visible, id, onMouseEnter }) => {
	return (
		<div className={`gallary-item-link ${visible ? 'active' : ''}`}>
			<NavLink
				to={'/' + id}
				onMouseEnter={() => onMouseEnter(id)}
				className='btn btn-success align-middle shadow'>
				Подробнее
			</NavLink>
		</div>
	)
}

export default GallaryItemLink
