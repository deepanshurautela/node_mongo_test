const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err)
		return console.log('Error connecting to mongodb client');

	console.log('Connected to mongodb server');
	
	const db = client.db('TodoApp');

	db.collection('Todos').insertOne({
	text: 'Deepanshu Rautela',
	completed: true	
	}, (err, result)  => {

	if(err)
		return console.log('Error in inserting ', err);	

	console.log(JSON.stringify(result.ops, undefined, 2));

	});

	client.close();

});
