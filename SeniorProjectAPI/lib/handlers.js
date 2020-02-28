var DataStore = require('./dataStore');
var Boom = require('boom');

var Handlers = function(request, reply){
		DataStore.getAllCustomers(function(err,results){
			if(err) {
					return reply(Boom.badImplementation(err.details[0].message));
			}
			reply(results[0]);
		});
}