/* eslint-disable no-console */
const User = require('./services/RegLog.js');

module.exports = (app) => {
	app.post('/user', (req, res, next) => {
		console.log('LOGIN: ', Date.now());
		next();
	}, User.login);
	//ADD authorithation middleware in future
};
