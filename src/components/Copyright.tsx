import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const Copyright = () => (
	<Typography variant='body2' color='textSecondary' align='center'>
		{'Copyright © '}
		<Link color='inherit' component={RouterLink} to='/'>
			Socially Dev
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
)

export default Copyright
