export interface AuthenticatedUser {
	_id: string
	firstName: string
	lastName: string
	userType: number
	token: string
}

export interface UnAuthenticatedUser {
	credential: string
	password: string
}

export interface NewUser {
	firstName: string
	lastName: string
	email: string
	password: string
	userId: string
}
