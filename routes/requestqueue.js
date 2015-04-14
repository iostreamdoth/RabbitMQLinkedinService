var bal = require('./businesslogic');
var requestqueue = [];

function enqueue(obj) {
	requestqueue.push(obj);
}

function issomethinginqueue() {
	if (requestqueue.length > 0)
		return 1;
	else
		return 0;
}

function dequeue() {
	console.log("Yeah I'm dequeuing queue length = " + requestqueue.length)
	bal.popconnection();
	var obj = requestqueue.shift();
	callfunction(obj);
}
function callfunction(obj) {
	// function type = obj.type;
	// var req = obj.req;
	// var res = obj.res;

	switch (obj.type) {
	case '/user/signinver':
		bal.signinver(obj.request);
		break;
	case '/user/signupver':
		bal.signupver(obj.request);
		break;
	case '/user/userver':
		bal.signinver(obj.request);
		break;
	case '/skill/getskills':
		bal.getskills(obj.request);
		break;
	case '/skill/setskills':
		bal.signinver(obj.request);
		break;
	case '/skill/endorseskills':
		bal.signinver(obj.request);
		break;
	case '/skill/removeskills':
		bal.signinver(obj.request);
		break;
	// profile routes
	case '/profile/get':
		bal.getprofile(obj.request);
		break;
	case '/profile/create':
		bal.createprofile(obj.request);
		break;
	case '/profile/update':
		bal.updateprofile(obj.request);
		break;
	case '/profile/updatesummary':
		bal.updatesummary(obj.request);
		break;
	case '/profile/getbyid':
		bal.getbyid(obj.request);
		break;
	case '/profile/delexp':
		bal.delexp(obj.request);
		break;
	case '/profile/search':
		bal.search(obj.request);
		break;

	// Invitation Routes
	case '/invite/user':
		bal.getinvitation(obj.request);
		break;
	case '/invite/sendinvitation':
		bal.sendinvitation(obj.request);
		break;
	case '/invite/accept':
		bal.accept(obj.request);
		break;
	case '/invite/reject':
		bal.reject(obj.request);
		break;
	case '/invite/box':
		bal.box(obj.request);
		break;

	// Connections
	case '/connection/users':
		bal.getconnections(obj.request);
		break;
	case '/connection/create':
		bal.setconnections(obj.request);
		break;
	case '/connection/delete':
		bal.deleteconnections(obj.request);
		break;
	case '/connection/connectionfeed':
		bal.connectionfeed(obj.request);
		break;
	case '/connection/getconnectionsdetails':
		bal.getconnectionsdetails(obj.request);
		break;

	}
}

exports.issomethinginqueue = issomethinginqueue;
exports.enqueue = enqueue;
exports.dequeue = dequeue;