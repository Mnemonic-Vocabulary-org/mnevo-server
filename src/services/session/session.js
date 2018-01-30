var encdec = require("./encdec.js");
var cookie = require("./cookie.js");

module.exports = () => {
	var find = function(cipher) {
		try {
			return JSON.parse(encdec.decrypt(cipher));
		}
		catch (err) {
			return undefined;
		}
	};

	var getOneCookie = function(obj) {
		return encdec.encrypt(JSON.stringify({ array: cookie.wrap(obj) }));
	};
}

// var getCookie = function(params , obj){
// 	if(params.ciphed){
// 		return encdec.encrypt(JSON.stringify({array: cookie.wrap(obj)}));
// 	}else{
// 		return 
// 	}
// }

module.exports = {
	session,
	validate,
	getOneCookie
};
