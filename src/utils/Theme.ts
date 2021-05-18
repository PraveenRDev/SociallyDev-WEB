import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'

export default createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: blue[500],
		},
		secondary: {
			main: lightBlue['A700'],
		},
	},
})
