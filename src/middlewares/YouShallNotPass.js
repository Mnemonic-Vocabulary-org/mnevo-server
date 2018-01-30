require('dependencies.js').session;

module.exports = (app) => {
	app.use(require("cookieparser")());
	app.use((callback) => {
		return function(req, res, next) {
			req.cookies.user = find(req.cookies.one);
			next();
		};
	});
	app.use((callback) => {
		return function(req, res, next) {
			if (!req.cookies.user) {
				res.redirect("/login");
				// res.status(302).end();s
			}
			next();
		}
	});
}
