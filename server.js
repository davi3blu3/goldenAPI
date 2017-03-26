var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var dbName = 'bond';
var local_mongo = 'mongodb://localhost:27017/' + dbName;
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

    // Handle GET request /bondfilms: get all film data
    app.get("/bondfilms", function(req, res) {
        database.collection('goldenAPI').find({}).toArray(function(err, docs) {
            if (err) {
                console.log('failed to get data: ' + err.message);
            } else {
                res.status(200).json(docs);
            }
        });
    });


});
