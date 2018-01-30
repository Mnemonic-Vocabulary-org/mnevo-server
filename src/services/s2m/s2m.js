var unirest =require("unirest");
const ENVIRONMENT = require("../env.js");

var user = function (user,cb){
	unirest.post(ENVIRONMENT.remoteModel+"/user")
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		.send(user)
		.end(function (res) {
		  cb(res);
		});
}

var mnevo = function (user,cb){
	unirest.post(ENVIRONMENT.remoteModel+"/mnevo")
		.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
		.send(user)
		.end(function (res) {
		  cb(res);
		});
}

module.exports = {
	user,
	mnevo
};