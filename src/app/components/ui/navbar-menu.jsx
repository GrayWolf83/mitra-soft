import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'
import Logo from '../common/logo'
import Profile from './Profile'

const NavbarMenu = ({ show, onHide }) => {
	return (
		<Offcanvas show={show} onHide={onHide}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>
					<Logo />
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Profile />

				<h3 className='mt-4 fs-5'>Меню</h3>
				<NavLink
					to='/'
					className='text-success fs-5 mt-2'
					onClick={onHide}>
					<i className='bi bi-images me-2' />
					Галерея
				</NavLink>
				<br />
				<NavLink
					to='/about'
					className='text-success fs-5 mt-2'
					onClick={onHide}>
					<i className='bi bi-person-circle me-2' />
					Обо мне
				</NavLink>
			</Offcanvas.Body>
		</Offcanvas>
	)
}

NavbarMenu.propTypes = {
	show: PropTypes.bool,
	onHide: PropTypes.func,
}

export default NavbarMenu
