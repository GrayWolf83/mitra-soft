import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
	return (
		<NavLink to='/' className='ps-0'>
			<img
				src='https://mitrasoft.ru/wp-content/uploads/2021/08/logo-new.svg'
				width='130'
				className='d-inline-block align-center'
				alt='Mitra soft logo'
			/>
		</NavLink>
	)
}

export default Logo
