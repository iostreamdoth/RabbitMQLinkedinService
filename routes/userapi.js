/*
 * GET users listing.
 */
var bal = require('./businesslogic');

exports.signinver = function(req,callback) {
	console
			.log("---------------- -----------Start--------------- --------------------------------");

	if (bal.shallwequeue() == 1) {
		bal.enqueue(req, "/user/signinver",callback)

	} else {
		bal.popconnection();
		bal.signinver(req,callback);
	}

};
exports.signupver = function(req, callback) {

	if (bal.shallwequeue() == 1) {

		bal.enqueue(req, callback, "/user/signupver")

	} else {
		bal.popconnection();
		bal.signupver(req, callback)
	}
};

exports.userver = function(req, callback) {
	if (bal.shallwequeue == 1) {
		bal.enqueue(req, callback, "/user/userver")
	} else {
		bal.popconnection();
		bal.userver(req, callback);

	}
};
exports.getuserdetails = function(req, callback) {
	if (bal.shallwequeue == 1) {
		bal.enqueue(req, callback, "/user/getuserdetails")
	} else {
		bal.popconnection();
		bal.getuserdetails(req, callback);

	}
};
