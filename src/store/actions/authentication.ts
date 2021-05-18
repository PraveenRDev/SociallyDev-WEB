import ROUTES from '../../routes'
import { AuthenticatedUser, NewUser, UnAuthenticatedUser } from '../../interfaces/Users'
import { AppDispatch } from '../'
import { loginUser } from '../slices/authSlice'
import { POST } from '../../utils/apiCalls'

export const login = (user: UnAuthenticatedUser) => async (dispatch: AppDispatch) => {
	const loggedInUser: AuthenticatedUser = await POST(ROUTES.LOGIN_ROUTE, false, user, dispatch)
	if (loggedInUser) {
		dispatch(loginUser(loggedInUser))
		localStorage.setItem('token', loggedInUser.token)
	}
}

export const register = (user: NewUser) => async (dispatch: AppDispatch) => {
	const loggedInUser: AuthenticatedUser = await POST(ROUTES.USER_ROUTE, false, user, dispatch)
	if (loggedInUser) {
		dispatch(loginUser(loggedInUser))
		localStorage.setItem('token', loggedInUser.token)
	}
}
