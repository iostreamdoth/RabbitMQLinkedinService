var bal = require('./businesslogic');
exports.getprofile = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/get")
	else {
		bal.popconnection();
		bal.getprofile(req, callback);
	}
};

exports.createprofile = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/create")
	else {
		bal.popconnection();
		bal.createprofile(req, callback)
	}
};

exports.updateprofile = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/update")
	else {
		bal.popconnection();
		bal.updateprofile(req, callback)
	}
};
exports.updatesummary = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/updatesummary")
	else {
		bal.popconnection();
		bal.updatesummary(req, callback)
	}
};
exports.getbyid = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/getbyid")
	else {
		bal.popconnection();
		bal.getbyid(req, callback)
	}
};
exports.delexp = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/delexp")
	else {
		bal.popconnection();
		bal.delexp(req, callback)
	}
};

exports.search = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/profile/search")
	else {
		bal.popconnection();
		bal.search(req, callback)
	}
};




