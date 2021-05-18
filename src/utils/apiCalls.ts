import axios from 'axios'
import ResponseData from '../interfaces/Response'
import AlertProps from '../interfaces/AlertMessage'
import { showAlert, clearError } from '../store/slices/alertHandlerSlice'
import { AppDispatch } from '../store'

export async function GET(URL: string, isAuthenticatedRequest = false, dispatch: AppDispatch) {
	dispatch(clearError())
	try {
		let config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: isAuthenticatedRequest && localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null,
			},
		}
		const response = await axios.get(URL, config)
		if (response.status === 200) {
			const responseData: ResponseData = response.data
			if (responseData.success) {
				return responseData.data
			} else {
				const error: AlertProps = {
					message: responseData.message,
					severity: 'error',
				}
				dispatch(showAlert(error))
			}
			return null
		} else {
			const error: AlertProps = {
				message: 'Sorry! Our server messed it up! Please retry',
				severity: 'error',
			}
			dispatch(showAlert(error))
			return null
		}
	} catch (exception) {
		const error: AlertProps = {
			message: 'Sorry! Our server messed it up! Please retry',
			severity: 'error',
		}
		dispatch(showAlert(error))
		return null
	}
}

export async function POST(URL: string, isAuthenticatedRequest = false, CONTENT: {}, dispatch: AppDispatch) {
	dispatch(clearError())
	try {
		let config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: isAuthenticatedRequest && localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : null,
			},
		}
		const response = await axios.post(URL, { ...CONTENT }, config)
		if (response.status === 200) {
			const responseData: ResponseData = response.data
			if (responseData.success) {
				return responseData.data
			} else {
				const error: AlertProps = {
					message: responseData.message,
					severity: 'error',
				}
				dispatch(showAlert(error))
			}
			return null
		} else {
			const error: AlertProps = {
				message: 'Sorry! Our server messed it up! Please retry',
				severity: 'error',
			}
			dispatch(showAlert(error))
			return null
		}
	} catch (exception) {
		const error: AlertProps = {
			message: 'Sorry! Our server messed it up! Please retry',
			severity: 'error',
		}
		dispatch(showAlert(error))
		return null
	}
}
