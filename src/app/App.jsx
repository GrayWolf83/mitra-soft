import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './layouts/Main'

function App() {
	return (
		<Switch>
			<Route path='/' component={Main} />
			<Redirect to='/' />
		</Switch>
	)
}

export default App
