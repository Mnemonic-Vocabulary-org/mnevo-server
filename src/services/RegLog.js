/* eslint-disable no-console */
const S2m = require("./s2m/S2m");

const login = (req, res) => {
	S2m.user(req.body, (answer) => {

		if (answer.status === 200) {
			console.log("MODEL: ", answer);
			res.status(200).end();
		} else {
			//here will be my secret for client
			res.status(401);
			res.send({message: "Толково накрапал! Но, все равно не пущу"});
		}
	});
};

module.exports = {
	login
};

