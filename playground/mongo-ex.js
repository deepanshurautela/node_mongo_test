const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if(err)
		return console.log('Error connecting to mongodb server');

	console.log('Sucessfully connected to mongodb server');

	const db = client.db('Todos');

	db.collection('Todos').insertOne({
	name : 'Deepanshu Rautela',
	age : 23,
	location: 'Menlo Park, CA',
	favourite_foods: ['kachauri', 'sev puri', 'daal makhni', 'poppy seeds'],
	hobbies: ['dancing', 'singing', 'farting', 'drinking']
	
	}, (err, result) => {

	if(err)
		return console.log('Error inserting to db', result);

	console.log(JSON.stringify(result.ops, undefined, 2));

	});

	client.close();
});
