// to read our .env file
require('dotenv').config();

// for our database connection
const MongoClient = require('mongodb').MongoClient;

// our framework
const express = require('express');
const app = express();

// environment variables with which to configure the app
const {
    HOST,
    PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DATABASE,
    MONGO_URI
} = process.env;

// home route
app.get('/', (req, res) => res.send('Hello World!'));

// setting up our db - to do: move this to a new db.js file
const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URI}`;
const client = new MongoClient(uri, { useNewUrlParser: true });

// quick test to see if we are connected to our database and can insert a document
function insertDocumentTest(doc, collectionName) {

    // open connection
    client.connect(err => {
        const collection = client.db(`${MONGO_DATABASE}`).collection(collectionName);
        
        // add document to db
        collection.insertOne(doc, (err) => {
            try {
                console.log("Document successfully inserted");
            } catch {
                console.log(err);
            }
        }); 

        // close connection
        client.close();
    }); 
}

// document to be inserted as test
var doc = {
    title: "This is a title",
    content: "This is content",
    added_on: new Date()
};

// calling the function. In my case, the collection's name happened to be called surveys
insertDocumentTest(doc=doc, collectionName="surveys")

// configuring the server where to run/listen
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));