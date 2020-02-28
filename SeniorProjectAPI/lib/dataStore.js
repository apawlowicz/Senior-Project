var user = process.env.DBUser || 'databaseUser';
var password = process.env.DBPassword || 'password';
var server = process.env.DBServer || 'selective1.database.windows.net';

var config = {
		user: user,
		password: password,
		server: server, 
		database: 'SeniorProjectDataBase',
		options: {
			encrypt: true
		}
};

var DataStore = function(callback){
	var connection = new sql.Connection(config, function(err){
		if(err){
			console.log('Error: ' + err);
			callback(err);
		}
		else{
			var request = new sql.Request(connection);
			request.execute('AllCustomers', function(err, recordsets){
				if(err){
					console.log('Error: ' + err);
					callback(err);
				}
				else{
					console.dir(recordsets);
					callback(null, recordsets);
				}
			});
		}
	});
	
	connection.on('error', function(err){
		console.log('Error: ' + err);
	});
}