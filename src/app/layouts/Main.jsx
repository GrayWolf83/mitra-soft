import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from '../pages/about-page'
import SingleImagePage from '../pages/single-image-page'
import GallaryPage from '../pages/gallary-page'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/ui/navbar-component'

const Main = () => {
	return (
		<>
			<NavbarComponent />
			<Container className='mt-3'>
				<Switch>
					<Route path='/about' component={AboutPage} />
					<Route path='/:photoId' component={SingleImagePage} />
					<Route path='/' component={GallaryPage} />
				</Switch>
			</Container>
		</>
	)
}

export default Main
