const dotenv = require('dotenv').config({path: 'process.env'})
const express = require("express");
const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');
const mongoose = require("mongoose")
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', indexRouter);
app.use('/blog', blogRouter);


app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});


///
const mongoDB = process.env.DB_CONNECT
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(5000, () =>  {
  console.log("Server started on port 5000");
});



//mongodb+srv://davy:blogAPI321@blogapi-remlf.azure.mongodb.net/BlogAPI?retryWrites=true&w=majority
