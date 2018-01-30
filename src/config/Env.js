var common = {
	remoteModel: "https://feathersuk.herokuapp.com"
};

var local = Object.assign({
		domain: "localhost",
		port: 8080
	},common);
var c9 = Object.assign({
		domain: "mnevo-grenudi.c9users.io",
		port: process.env.PORT
	},common);
var hero = Object.assign({
		domain: "mnevo.herokuapp.com",
		port: process.env.PORT
	},common);

module.exports = c9;
