var bal = require('./businesslogic');
exports.getskills = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/skill/getskills")
	else {
		bal.popconnection();
		bal.getskills(req, callback)
	}
};
exports.setskills = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/skill/setskills")
	else {
		bal.popconnection();
		bal.setskills(req, callback);
	}
};
exports.endorseskills = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/skill/endorseskills")
	else {
		bal.popconnection();
		bal.endorseskills(req, callback);
	}
};
exports.removeskills = function(req, callback) {
	if (bal.shallwequeue == 1)
		bal.enqueue(req, callback, "/skill/removeskills")
	else {
		bal.popconnection();
		bal.removeskills(req, callback);
	}
};
