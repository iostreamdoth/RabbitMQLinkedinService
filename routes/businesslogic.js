var mysqlobj = require('./mysql');
var pbkdf2 = require('pbkdf2-sha256');
var queue = require('./requestqueue');
// User functions
function rtype(req, type) {
	this.request = req;
	this.type = type;
};

function signinver(req, callback) {
	var username = req.form.username;
	var password = req.form.password;
	console.log(username);
	console.log(password);
	var sqlQuery;
	var key = password;
	var salt = 'salt';
	var result = pbkdf2(key, salt, 1, 64);
	password = result.toString('hex');
	console.log("password is " + password);
	var params = "0, '" + "" + "', '" + "" + "', '" + username + "', '"
			+ password + "', '" + "" + "', " + 0 + ", " + 0 + ",'' ,'" + "GU'";
	var sqlQuery = "call spgetsetusers(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		// console.log(console.log(JSON.stringify(results)));
		console.log(results[0][0].status);
		if (results[0][0].status != 0) {
			// res.setHeader('Content-Type', 'application/json');
			res = (JSON.stringify({
				status : "success",
				message : "signin successfull",
				data : results[0][0].status
			}));
		} else {
			// res.setHeader('Content-Type', 'application/json');
			res = (JSON.stringify({
				status : "fail",
				message : "signin failure"
			}));
		}
		console.log("Response is in this way " + res);
		callback(null, res);

	}, sqlQuery);
}

function signupver(req, callback) {
	var firstname = req.form.firstname;
	var lastname = req.form.lastname;
	var username = req.form.username;
	var password = req.form.password;
	console.log(firstname);
	console.log(lastname);
	console.log(username);
	console.log(password);
	var sqlQuery;
	var key = password;
	var salt = 'salt';
	var result = pbkdf2(key, salt, 1, 64);
	password = result.toString('hex');
	// console.log(password);
	var params = "0, '" + firstname + "', '" + lastname + "', '" + username
			+ "', '" + password + "', '" + "" + "', " + 0 + ", " + 0 + ", '','"
			+ "I'";
	var sqlQuery = "call spgetsetusers(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {

		if (!err) {
			console.log(JSON.stringify(results));

			res = {
				status : "success"
			};
		} else {
			res = {
				status : "failed"
			};
		}

		console.log("Response is in this way " + res);
		callback(null, res);
	}, sqlQuery);

}

function userver(req, callback) {
	var username = req.form.username;
	res.send({
		status : "success",
		message : "user verification success"
	})
}

function getuserdetails(req, callback) {
	calluser(req, callback, "G");
}
function updatesummary(req, callback) {
	calluser(req, callback, "US");
}

function calluser(req, callback, strop) {
	var userid = req.form.userid;
	var firstname = req.form.firstname;
	var lastname = req.form.lastname;
	var username = req.form.username;
	var password = req.form.password;
	var imagedetail = req.form.imagedetail;
	var invitation = req.form.invitation;
	var totalconnection = req.form.totalconnection;
	var summary = req.form.summary;

	var sqlQuery;
	var key = password;
	var salt = 'salt';
	var result = pbkdf2(key, salt, 1, 64);
	password = result.toString('hex');

	var params = userid + ", '" + firstname + "', '" + lastname + "', '"
			+ username + "', '" + password + "', '" + imagedetail + "', "
			+ invitation + ", " + totalconnection + ",'" + summary + "' ,'"
			+ strop + "'";
	var sqlQuery = "call spgetsetusers(" + params + ")";
	//console.log("SQL Query: " + sqlQuery);
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		if (!err) {
			res = {
				status : "success",
				data : JSON.stringify(results[0])
			};
		} else {
			res = {
				status : "failed",
				data : JSON.stringify(results[0])
			};
		}

		callback(null, res);
	}, sqlQuery);

}

// Skill functions

function getskills(req, callback) {
	var userid = req.form.userid;
	var sqlQuery;
	var params = "0, " + userid + ", '" + "" + "', '" + 0 + "', '" + "" + "',"
			+ 0 + ",'" + "GU'";
	var sqlQuery = "call spgetsetskills(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		if (!err) {
			res = {
				status : "success",
				data : JSON.stringify(results[0])
			};
		} else {
			res = {
				status : "failed",
				data : {}
			};
		}
		callback(null, res);
	}, sqlQuery);
}

function setskills(req, callback) {
	var userid = req.form.userid;
	var skillname = req.form.skillname;
	var sqlQuery;
	var params = "0, " + userid + ", '" + skillname + "', '" + 0 + "', '" + ""
			+ "'," + 0 + ",'" + "I'";
	var sqlQuery = "call spgetsetskills(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		if (!err) {
			res = {
				status : "success"
			};
		} else {
			res = {
				status : "failed"
			};
		}
		callback(null, res);
	}, sqlQuery);
}

function endorseskills(req, callback) {
	var userid = req.form.userid;
	var skillid = req.form.skillid;
	var endorsedby = req.form.endorsedby;
	var sqlQuery;
	var params = skillid + ", " + userid + ", '" + "" + "', '" + 0 + "', '"
			+ "" + "'," + endorsedby + ",'" + "SE'";
	var sqlQuery = "call spgetsetskills(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		if (!err) {
			res = {
				status : "success"
			};
		} else {
			res = {
				status : "failed"
			};
		}
		callback(null, res);
	}, sqlQuery);
}
function removeskills(req, callback) {
	var userid = req.form.userid;
	var skillid = req.form.skillid;
	var sqlQuery;
	var params = skillid + ", " + userid + ", '" + "" + "', '" + 0 + "', '"
			+ "" + "',0" + "" + ",'" + "DS'";
	var sqlQuery = "call spgetsetskills(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		res = {
			status : "success"
		};
		callback(null, res);
	}, sqlQuery);
}

function shallwequeue() {
	return mysqlobj.shallwequeue();
}
function enqueue(req, callback, type) {
	return queue.enqueue(new rtype(req, type));
}

// profile
function getprofile(req, callback) {
	callprofile(req, callback, 'GU')
}
function createprofile(req, callback) {
	callprofile(req, callback, 'I')
}
function updateprofile(req, callback) {
	callprofile(req, callback, 'SU')
}

function getbyid(req, callback) {
	callprofile(req, callback, 'GP')
}
function delexp(req, callback) {
	callprofile(req, callback, 'DE')
}

function search(req, callback) {
	var uname1 = req.form.uname1;
	var uname2 = req.form.uname2;
	var uname3 = req.form.uname3;
	var userid = req.form.userid;
	if (userid == '') {
		userid = 0;
	}
	var sqlQuery;
	var params = "'" + uname1 + "', '" + uname2 + "', '" + uname3 + "',"
			+ userid;

	var sqlQuery = "call spsearchuser(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		res = {
			status : "success",
			data : JSON.stringify(results[0])
		};

		callback(null, res);
	}, sqlQuery);

}

function callprofile(req, callback, strop) {
	var userid = req.form.userid;
	var profileid = req.form.profileid;
	var organisation = req.form.organisation;
	var type = req.form.type;
	var desc = req.form.desc;
	var as = req.form.as;
	var from = req.form.from;
	var to = req.form.to;
	var location = req.form.location;
	var summary = req.form.summary;

	var sqlQuery;
	var params = profileid + "," + userid + ", '" + organisation + "', '"
			+ type + "', '" + desc + "', '" + as + "','" + from + "','" + to
			+ "','" + location + "','" + summary + "','" + strop + "'";

	var sqlQuery = "call spgetsetprofile(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		res = {
			status : "success",
			data : JSON.stringify(results[0])
		};
		callback(null, res);
	}, sqlQuery);
}

// Invitations

// profile
function getinvitation(req, callback) {
	callinvitation(req, callback, 'GU')
}
function sendinvitation(req, callback) {
	callinvitation(req, callback, 'I')
}
function accept(req, callback) {
	callinvitation(req, callback, 'SA')
}
function reject(req, callback) {
	callinvitation(req, res, 'SR')
}
function box(req, callback) {
	callinvitation(req, callback, 'GD')
}

function callinvitation(req, callback, strop) {
	var idinvitations = req.form.idinvitations;
	var touserid = req.form.touserid;
	var fromuserid = req.form.fromuserid;
	var connectiontype = req.form.connectiontype;
	var message = req.form.message;
	var sqlQuery;
	var params = idinvitations + "," + touserid + ", " + fromuserid + ", '"
			+ connectiontype + "', '" + message + "','" + strop + "'";

	var sqlQuery = "call spgetsetinvitation(" + params + ")";
	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results));
		res = {
			signup : "success",
			data : results[0]
		};

		callback(null, res);
	}, sqlQuery);
}
// Connections
function getconnections(req, callback) {
	callconnections(req, callback, 'GA')
}
function setconnections(req, callback) {
	callconnections(req, callback, 'I')
}
function deleteconnections(req, callback) {
	callconnections(req, callback, 'SR')
}
function connectionfeed(req, callback) {
	callconnections(req, callback, 'GI')
}
function getconnectionsdetails(req, callback) {
	callconnections(req, callback, 'GC')
}

function callconnections(req, callback, strop) {
	// console.log("in callconnections");
	var idconnections = req.form.idconnections;
	var userid = req.form.userid;
	var touserid = req.form.touserid;
	var sqlQuery;
	var params = idconnections + "," + userid + ", " + touserid + ", '" + strop
			+ "'";

	var sqlQuery = "call spgetsetconnections(" + params + ")";
	console.log(sqlQuery);

	mysqlobj.fetchdata(function(err, results) {
		console.log(JSON.stringify(results[0]));
		res = {
			status : "success",
			data : JSON.stringify(results[0])
		};
		callback(null, res);
	}, sqlQuery);

}

function popconnection() {
	mysqlobj.popconnection();
}

// exports
exports.signupver = signupver;
exports.signinver = signinver;
exports.getskills = getskills;
exports.setskills = setskills;
exports.endorseskills = endorseskills;
exports.removeskills = removeskills;
exports.shallwequeue = shallwequeue;
exports.enqueue = enqueue;
exports.getprofile = getprofile;
exports.createprofile = createprofile;
exports.updateprofile = updateprofile;
exports.getinvitation = getinvitation;
exports.sendinvitation = sendinvitation;
exports.accept = accept;
exports.reject = reject;
exports.getconnections = getconnections;
exports.connectionfeed = connectionfeed;
exports.setconnections = setconnections;
exports.deleteconnections = deleteconnections;
exports.popconnection = popconnection;
exports.getuserdetails = getuserdetails;
exports.updatesummary = updatesummary;
exports.getbyid = getbyid;
exports.delexp = delexp;
exports.search = search;
exports.getconnectionsdetails = getconnectionsdetails;
exports.box = box;
