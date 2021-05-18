import Alert from '@material-ui/lab/Alert'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { alert } from '../store/slices/alertHandlerSlice'
import { useAppSelector } from '../store/reduxHook'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 100,
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
	})
)

const AlertMessage = () => {
	const classes = useStyles()
	const alertInfo = useAppSelector(alert)
	return (
		alertInfo && (
			<div className={classes.root}>
				<Alert severity={alertInfo.severity}>{alertInfo.message}</Alert>
			</div>
		)
	)
}

export default AlertMessage
