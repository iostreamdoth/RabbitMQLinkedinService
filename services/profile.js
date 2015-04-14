var profile = require('../routes/profile');
var skill = require('../routes/skillapi');

function handle_request(msg, callback) {
	console.log("In handle proflie " + msg.reqtype);
	var res = {};

	switch (msg.reqtype) {
	// Skill routes
	// Skill routes
	case '/skill/getskills':
		skill.getskills(msg, callback);
		break;
	case '/skill/setskills':
		skill.setskills(msg, callback);
		break;
	case '/skill/endorseskills':
		skill.endorseskills(msg, callback);
		break;
	case '/skill/removeskills':
		skill.removeskills(msg, callback);
		break;

	// profile routes
	case '/profile/get':
		profile.getprofile(msg, callback);
		break;
	case '/profile/create':
		profile.createprofile(msg, callback);
		break;
	case '/profile/update':
		profile.updateprofile(msg, callback);
		break;
	case '/profile/updatesummary':
		profile.updatesummary(msg, callback);
		break;
	case '/profile/getbyid':
		profile.getbyid(msg, callback);
		break;
	case '/profile/delexp':
		profile.delexp(msg, callback);
		break;
	case '/profile/search':
		profile.search(msg, callback);
		break;

	}

}

exports.handle_request = handle_request;