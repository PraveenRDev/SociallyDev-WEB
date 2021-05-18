import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from '../../components/Copyright'
import { useAppDispatch, useAppSelector } from '../../store/reduxHook'
import { register } from '../../store/actions/authentication'
import { authenticatedUser } from '../../store/slices/authSlice'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const validationSchema = yup.object({
	firstName: yup.string().required('Enter your First Name'),
	lastName: yup.string().required('Enter your Last Name'),
	email: yup.string().required('Enter your Email').email('Invalid Email'),
	userId: yup.string().trim().required('Enter a user ID').matches(/^\S*$/, 'User ID cannot contain spaces'),
	password: yup.string().required('Enter your Password').min(6, 'Password should be of minimum 6 characters length'),
})

export default function SignUp() {
	const classes = useStyles()
	const dispatch = useAppDispatch()
	const user = useAppSelector(authenticatedUser)
	let history = useHistory()
	useEffect(() => {
		if (user || localStorage.getItem('token')) {
			history.push('/')
		}
	}, [user])

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			userId: '',
			password: '',
		},
		validationSchema,
		onSubmit: (user) => {
			dispatch(register(user))
		},
	})
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								value={formik.values.firstName}
								onChange={formik.handleChange}
								error={formik.touched.firstName && Boolean(formik.errors.firstName)}
								helperText={formik.touched.firstName && formik.errors.firstName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='lname'
								name='lastName'
								variant='outlined'
								fullWidth
								id='lastName'
								label='Last Name'
								value={formik.values.lastName}
								onChange={formik.handleChange}
								error={formik.touched.lastName && Boolean(formik.errors.lastName)}
								helperText={formik.touched.lastName && formik.errors.lastName}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete='userId'
								name='userId'
								variant='outlined'
								fullWidth
								id='userId'
								label='User ID'
								value={formik.values.userId}
								onChange={formik.handleChange}
								error={formik.touched.userId && Boolean(formik.errors.userId)}
								helperText={formik.touched.userId && formik.errors.userId}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link component={RouterLink} to='login' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	)
}
