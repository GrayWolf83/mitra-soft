import { Route, Switch, Redirect } from 'react-router-dom'
import PhotosLoader from './hoc/usePhotosLoader'
import Main from './layouts/Main'

function App() {
	return (
		<PhotosLoader>
			<Switch>
				<Route path='/' component={Main} />
				<Redirect to='/' />
			</Switch>
		</PhotosLoader>
	)
}

export default App
