var userapi = require('../routes/userapi');

function handle_request(msg, callback) {
	console.log("In handle user " + msg.reqtype);
	var res = {};
	
	
	switch(msg.reqtype)
	{
	case "/user/signinver":
		userapi.signinver(msg,callback)
		break;
	case "/user/signupver":
		userapi.signupver(msg,callback)
		break;
	case "/user/userver":
		userapi.getuserdetails(msg,callback)
		break;
	case "/user/getuserdetails":
		userapi.getuserdetails(msg,callback)
		break;
		
	}
	
}

exports.handle_request = handle_request;