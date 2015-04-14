var invitation = require('../routes/invitation');
var connection = require('../routes/connection');

function handle_request(msg, callback) {
	console.log("In handle member " + msg.reqtype);
	var res = {};

	switch (msg.reqtype) {
	case '/invite/user':
		invitation.getinvitation(msg, callback);
		break;
	case '/invite/sendinvitation':
		invitation.sendinvitation(msg, callback);
		break;
	case '/invite/accept':
		invitation.accept(msg, callback);
		break;
	case '/invite/reject':
		invitation.reject(msg, callback);
		break;
	case '/invite/box':
		invitation.box(msg, callback);
		break;
	case '/connection/users':
		connection.getconnections(msg, callback);
		break;
	case '/connection/create':
		connection.setconnections(msg, callback);
		break;
	case '/connection/delete':
		connection.deleteconnections(msg, callback);
		break;
	case '/connection/connectionfeed':
		console.log("I'm here");
		connection.connectionfeed(msg, callback);
		break;
	case '/connection/getconnectionsdetails':
		connection.getconnectionsdetails(msg, callback);
		break;

	}

}

exports.handle_request = handle_request;