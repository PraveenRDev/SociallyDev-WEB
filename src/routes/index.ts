const server = {
	PROTOCOL: 'http',
	HOST: 'localhost',
	PORT: '5000',
}

const config = {
	API: 'api',
	VERSION: 'v1',
}

const SERVER_URL = `${server.PROTOCOL}://${server.HOST}:${server.PORT}/${config.API}/${config.VERSION}`

const MAIN_ROUTES = {
	USER_ROUTE: SERVER_URL + '/user',
}

const ROUTES = {
	LOGIN_ROUTE: MAIN_ROUTES.USER_ROUTE + '/login',
	USER_ROUTE: MAIN_ROUTES.USER_ROUTE + '/',
}

export default ROUTES
