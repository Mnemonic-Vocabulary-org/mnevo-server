const ENVIRONMENT = require("./config/Env.js");
var express = require("express");
var app = express();

var bp = require("body-parser");
var fs = require("fs");
var cors = require("cors");
var path = require("path");
var AppError = require('./lib/AppError.js')

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(bp.urlencoded({ extended: false }));

app.use(cors())

app.route("/user")
	.get((req, res) => {
		console.log("login: ", Date.now());
		// res.end(pug.renderFile(__dirname+"/pugs/login.pug" , {notification: req.query.notification}));
		res.end();
	})
	.post(express.json(),(req, res) => {
		//validate input
		console.log(req.headers);
		res.writeHead(200, `{"Set-Cookie" : two = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"; Path='/'`);
		res.end();
	});

app.listen(ENVIRONMENT.port, (err, port) => {
	if (!err) {
		console.log("WE ROLLING! on: ", ENVIRONMENT.domain);
	}
});
