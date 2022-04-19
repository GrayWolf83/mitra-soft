import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/ui/navbar'
import AboutPage from '../pages/about-page'
import SingleImagePage from '../pages/single-image-page'
import GallaryPage from '../pages/gallary-page'

const Main = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path='/about' component={AboutPage} />
				<Route path='/:photoId' component={SingleImagePage} />
				<Route path='/' component={GallaryPage} />
			</Switch>
		</>
	)
}

export default Main
