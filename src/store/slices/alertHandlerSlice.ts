import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AlertProps from '../../interfaces/AlertMessage'
import type { RootState } from '..'

interface AlertState {
	alert: AlertProps | null
}

const initialState: AlertState = {
	alert: null,
}

const alertHandlerSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		showAlert(state, action: PayloadAction<AlertProps>) {
			state.alert = action.payload
		},
		clearError(state) {
			state.alert = null
		},
	},
})

export const { showAlert, clearError } = alertHandlerSlice.actions
export const alert = (state: RootState) => state.alertHandler.alert

export default alertHandlerSlice.reducer
