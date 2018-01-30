// var bcrypt = require("bcrypt");
var aesjs = require("aes-js");
var pbkdf2 = require("pbkdf2");

const password = "grenudiidunerg3635452pyt";
const key = pbkdf2.pbkdf2Sync(password, "fuck", 1, 256 / 8, "sha512");

module.exports = {
	encrypt : function(message){
		message = aesjs.utils.utf8.toBytes(message);
		var aesCtr = new aesjs.ModeOfOperation.ctr(key);
		return aesjs.utils.hex.fromBytes(aesCtr.encrypt(message));
	},
	decrypt : function(cipher){
		cipher = aesjs.utils.hex.toBytes(cipher);
		var aesCtr = new aesjs.ModeOfOperation.ctr(key);
		return aesjs.utils.utf8.fromBytes(aesCtr.decrypt(cipher));
	}
};
