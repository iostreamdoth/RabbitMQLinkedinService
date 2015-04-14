//super simple rpc server example
var amqp = require('amqp')
, util = require('util');

var login = require('./services/login');
var profile = require('./services/profile');
var member = require('./services/member');

var Logincnn1 = amqp.createConnection({host:'127.0.0.1'});
var Profilecnn2 = amqp.createConnection({host:'127.0.0.1'});
var Membercnn3 = amqp.createConnection({host:'127.0.0.1'});


Logincnn1.on('ready', function(){
	console.log("listening on Login Queue");

	Logincnn1.queue('login_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			//util.log(util.format( deliveryInfo.routingKey, message));
			console.log("------------------------ ------------ -----------------------");
			console.error("Message: "+JSON.stringify(message));
			//util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			login.handle_request(message, function(err,res){
				console.log("Reply on "+ m.replyTo + " queue")
				console.error((m.correlationId));
				console.log((res));
				
				//return index sent
				Logincnn1.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
				console.log("Request Handled");
			});
		});
	});
});
Profilecnn2.on('ready', function(){
	console.log("listening on Profile Queue");

	Profilecnn2.queue('profile_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			//util.log(util.format( deliveryInfo.routingKey, message));
			console.log("------------------------ ------------ -----------------------");
			console.error("Message: "+JSON.stringify(message));
			//util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			profile.handle_request(message, function(err,res){
				console.log("Reply on "+ m.replyTo + " queue")
				console.error((m.correlationId));
				console.log((res));
				//return index sent
				Profilecnn2.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
				console.log("Request Handled");
			});
		});
	});
});
Membercnn3.on('ready', function(){
	console.log("listening on Member Queue");

	Membercnn3.queue('member_queue', function(q){
		q.subscribe(function(message, headers, deliveryInfo, m){
			//util.log(util.format( deliveryInfo.routingKey, message));
			console.log("------------------------ ------------ -----------------------");
			console.error("Message: "+JSON.stringify(message));
			//util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
			member.handle_request(message, function(err,res){
				console.log("Reply on "+ m.replyTo + " queue")
				console.error((m.correlationId));
				console.log((res));
				
				//return index sent
				Membercnn3.publish(m.replyTo, res, {
					contentType:'application/json',
					contentEncoding:'utf-8',
					correlationId:m.correlationId
				});
				console.log("Request Handled");
			});
		});
	});
});