module.exports = (app) => {
	app.get("/register", (req, res) => {
		res.set("Location", "/register");
		res.send(pug.renderFile(__dirname + "/pugs/register.pug", { notification: req.query.notification, login: req.query.login, mail: req.query.mail, password: req.query.password })).status(200).end();
	});

	app.use("/registration", (req, res, next) => {
		//syntax validation of login feald
		s2m.user({ login: req.body.login }, (s2mres) => {
			if (s2mres.statusCode === 200) {
				res.set("Location", "/register?notification=this%20login%20is%20borrowed");
				res.status(302).end();
			}
			else {
				next();
			}
		});
	});
	app.use("/registration", (req, res, next) => {
		//syntax validation for mail feald 
		s2m.user({ mail: req.body.mail }, (s2mres) => {
			console.log(req.body);
			if (s2mres.statusCode === 200) {
				res.set("Location", "/register?mail=this%20mail%20is%20borrowed");
				res.status(302).end();
			}
			else {
				next();
			}
		});
	});

	app.post("/registration", (req, res) => {
		//pasword syntax validation
		s2m.user(req.body, (s2mres) => {
			if (s2mres.statusCode === 200) {
				res.set("Set-Cookie", `one = ${session.getOneCookie(req.body.user)}; Path='/'`);
				res.set("Location", "/main");
				res.status(302).end();
			}
			else {
				res.set("Location", "/register?notification=The%20Server%20Says%20No");
				res.status(302).end();
			}
		});
	});


	app.route("/user")
		.get((req, res) => {
			console.log("login: ", Date.now());
			// res.end(pug.renderFile(__dirname+"/pugs/login.pug" , {notification: req.query.notification}));
			res.end();
		})
		.post((req, res) => {
			//validate input
			console.log("he tried!", Date.now());
			res.end();
			// s2m.user(req.body , (s2mres)=>{
			// 	if(s2mres.statusCode === 200){
			// 		res.set();
			// 		res.writeHead(302, {"Location": "/main", "Set-Cookie" : `one = ${session.getOneCookie(req.body)}; Path='/'`});
			// 		res.end();
			// 	}else{
			// 		res.set("Location", "/login?notification=wrong%20login%20or%20password");
			// 		res.status(302).end();
			// 	}
			// });
		});

	app.get("/logout", (req, res) => {
		res.set("Set-Cookie", `one = ${undefined}; Path='/'`);
		res.set("Location", "/login");
		res.status(302).end();
	});


	//YOU SHALL NOT PASS (if you don't have login in your cookies)
	app.use(cookieparser());
	app.use(session.session());
	app.use(session.validate());

	//ROUTS
	app.get("/view-cookie", (req, res) => {
		//user is exist if the code get thus far. so what we well do with it ?
		var user = req.cookies.user;
		//redirect to the home page
		res.send(JSON.stringify(user));
	});

	app.listen(ENVIRONMENT.port, (err, port) => {
		if (!err) {
			console.log("WE ROLLING! on: ", ENVIRONMENT.domain);
		}
	});

}
