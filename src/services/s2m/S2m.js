const Api = require('./Api.js');

const user = (req, cb) => {
	Api('/user')
		.send(req)
		.end((res => {
			cb(res);
		}));
};

module.exports = {
	user
};