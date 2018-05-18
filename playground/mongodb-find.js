const {MongoClient, ObjectID} = require('mongodb');

const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL, (err, client) => {
	if (err)
		return console.log('Error in connecting to the server');
	console.log('Successfully connected to the db');

	const db = client.db('Todos');
	
	db.collection('Todos').find({
		location : 'Menlo Park, CA'
	}).toArray().then((docs) => {
	console.log('Docs');
	console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
	console.log('Cannot find', err);
	});

	client.close();

});
