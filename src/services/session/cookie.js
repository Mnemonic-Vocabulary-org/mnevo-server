var randomstring = require("randomstring");

var wrap = function(obj){
	var ra = [];
	for(var x in obj){
		ra.push(obj[x]);
		ra.push(randomstring.generate(Math.random() * (20 - 5) + 5));
	}
	return ra
	// [
	// 	obj.login,
	// 	"asdfghjkl",
	// 	obj.password,
	// 	"asdfghjkl",
	// 	obj.notification,//something will be here soon
	// 	"zxcvbnm"
	// ];
};

module.exports = {
	wrap
};
