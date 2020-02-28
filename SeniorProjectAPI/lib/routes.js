var Joi = require('joi');
var Handlers = require('./handlers');

var Routes = [
	{
		path: '/customers',
		method: 'GET',
		handler: Handlers
	}
];