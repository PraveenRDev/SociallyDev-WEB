import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { Provider } from 'react-redux'
import Signin from './pages/signin'
import SignUp from './pages/singup'
import { store } from './store'
import theme from './utils/Theme'
import AlertMessage from './components/Alert'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<AlertMessage />
				<Router>
					<Switch>
						<Route path='/login'>
							<Signin />
						</Route>
						<Route path='/register'>
							<SignUp />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</ThemeProvider>
	)
}

export default App
