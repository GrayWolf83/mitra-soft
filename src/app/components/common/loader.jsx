import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
	return (
		<div className='loader'>
			<Spinner animation='border' className='text-success' />
		</div>
	)
}

export default Loader
