var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbName = 'bond';
var local_mongo = 'mongodb://localhost:27017/' + dbName;
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;
//var heroku_mongo = process.env.MONGODB_URI;

// Express server setup
var app = express();
app.use('/modules', express.static(__dirname + '/node_modules') )
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Initiate database connection
MongoClient.connect(local_mongo, function(err, database){
    if (err) {
        console.log('Error: ' + err);
        process.exit(1);
    }
    console.log('successfully connected to Mongo database: ' + dbName);

    // Initialize the app.
    app.listen(3000, function () {
        console.log("App now running on port 3000");
    });

    // Handle Get request to root
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    })

    // Handle GET request /bondfilms - get all film data
    app.get("/bondfilms", function(req, res) {
        database.collection('goldenAPI').find({}).toArray(function(err, docs) {
            if (err) {
                console.log('failed to get data:', err.message);
            } else {
                res.status(200).json(docs);
            }
        });
    });

    // Handle GET request /bondfilms/:filmId - get one film's data
    app.get("/bondfilms/:id", function(req, res) {
        console.log('Get request received with param:', req.params.id);
        res.status(200).send();
        database.collection('goldenAPI').findOne({_id: new ObjectId(req.params.id)}, function(err, doc) {
            if (err) {
                console.log('failed to get film data:', err.message);
            } else {
                console.log('db found:', doc);
                res.status(200);
            }
        })
    })

});
