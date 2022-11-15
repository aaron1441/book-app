const express = require('express')
const app = express()
const port = 4000
const bodyParser = require("body-parser");
const cors = require('cors');

// getting-started.js
// importing the mongoose library
const mongoose = require('mongoose');

// catch if there is an error and log it
main().catch(err => console.log(err));

// function main is going to connect to our database
// making this call asynchronisly
async function main() {
  //  replace this connection string with our database string
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.ixm1hnl.mongodb.net/?retryWrites=true&w=majority');
}

// creating a schema
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});
// after creating a schema we can create a model which is what we use to interact with  our database
const bookModel = mongoose.model('Books', bookSchema);

// cors is required to allow the browser to get information from the server
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// allows us to process the body of the http request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes the http request usually a string of the url
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// send  back the json data when the server hears /api/books
app.get('/api/books', (req, res) => {
  bookModel.find((error,data)=>{
    res.json(data);
  })
})

// this method returns a certain document by the id 
// the id is passed in through the url and response is sent to the page
app.get('/api/book/:id',(req,res)=>{// this is a callback function
  console.log(req.params.id);
  bookModel.findById(req.params.id,(error,data)=>{ // req.params.id gets the variable parameters the http  request
    res.json(data); // send the data through the http response.
  })
})

// listening for the post request
// take the data through the post request and for now log it to the console
app.post('/api/books', (req, res) => {
  console.log(req.body);
  // create a method to add to the model
  bookModel.create({
    // get the data out of the body of the request
    title:req.body.title,
    cover:req.body.cover,
    author:req.body.author
  })
  res.send('Data recieved');

})

// server listens for the url
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})