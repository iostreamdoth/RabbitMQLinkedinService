var bal = require('./businesslogic');
exports.getinvitation = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/invite/getinvitation")
	else {
		bal.popconnection();
		bal.getinvitation(req, callback)
	}
};
exports.sendinvitation = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/invite/sendinvitation")
	else {
		bal.popconnection();
		bal.sendinvitation(req, callback);
	}
};
exports.reject = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/invite/reject")
	else {
		bal.popconnection();
		bal.reject(req, callback);
	}
};
exports.accept = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/invite/accept")
	else {
		bal.popconnection();
		bal.accept(req, callback);
	}
};
exports.box = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/invite/box")
	else {
		bal.popconnection();
		bal.box(req, callback);
	}
};