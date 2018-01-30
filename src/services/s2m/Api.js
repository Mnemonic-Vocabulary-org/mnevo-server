const Unirest = require('unirest');
const ENV = require('../../config/Env.js');

module.exports = (path) => {
	return Unirest
		.post(ENV.remoteModel + path)
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
};