import React, { useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Logo from '../common/logo'
import NavbarMenu from './navbar-menu'

const NavbarComponent = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<Navbar bg='light' className='shadow'>
			<Container>
				<Logo />

				<i
					className='bi bi-list fs-2 text-success'
					onClick={handleShow}
				/>
				<NavbarMenu show={show} onHide={handleClose} />
			</Container>
		</Navbar>
	)
}

export default NavbarComponent
