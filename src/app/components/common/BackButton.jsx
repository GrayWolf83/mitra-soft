import { Button } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const BackButton = () => {
	const history = useHistory()

	const handleClick = () => {
		history.goBack()
	}

	return (
		<Button className='btn-success mb-2 shadow' onClick={handleClick}>
			Назад
		</Button>
	)
}

export default BackButton
