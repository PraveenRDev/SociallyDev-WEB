import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import laptop from '../../assets/images/laptop.jpg'
import CodeIcon from '@material-ui/icons/Code'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Copyright from '../../components/Copyright'

import { login } from '../../store/actions/authentication'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { authenticatedUser } from '../../store/slices/authSlice'

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: `url(${laptop})`,
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
	},
	paper: {
		height: '80%',
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const validationSchema = yup.object({
	credential: yup.string().required('Enter your User ID / Email'),
	password: yup.string().required('Enter your Password').min(6, 'Password should be of minimum 6 characters length'),
})

const Signin = () => {
	const classes = useStyles()
	const dispatch = useAppDispatch()
	const user = useAppSelector(authenticatedUser)

	useEffect(() => {
		if (user) {
			console.log(user)
		}
	}, [user])

	const formik = useFormik({
		initialValues: {
			credential: '',
			password: '',
		},
		validationSchema,
		onSubmit: (user) => {
			dispatch(login(user))
		},
	})

	return (
		<Grid container component='main' className={classes.root}>
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<CodeIcon />
					</Avatar>
					<Typography component='h2' variant='h5'>
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={formik.handleSubmit}>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							id='credential'
							name='credential'
							label='Email or User ID'
							value={formik.values.credential}
							onChange={formik.handleChange}
							error={formik.touched.credential && Boolean(formik.errors.credential)}
							helperText={formik.touched.credential && formik.errors.credential}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							id='password'
							name='password'
							label='Password'
							type='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
						<Button color='primary' variant='contained' fullWidth type='submit' className={classes.submit}>
							Submit
						</Button>
						<Grid container>
							<Grid item xs>
								<Link component={RouterLink} to='login' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link component={RouterLink} to='/register' variant='body2'>
									Don't have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	)
}
export default Signin
