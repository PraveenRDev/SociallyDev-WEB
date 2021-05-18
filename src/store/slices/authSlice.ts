import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'
import { AuthenticatedUser } from '../../interfaces/Users'

interface AuthState {
	user: AuthenticatedUser | null
}

const initialState: AuthState = {
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<AuthenticatedUser>) => {
			if (!state.user) {
				state.user = action.payload
			}
		},
		logoutUser: (state) => {
			if (state.user) {
				state.user = null
			}
		},
	},
})

export const { loginUser, logoutUser } = authSlice.actions
export const authenticatedUser = (state: RootState) => state.auth.user

export default authSlice.reducer
