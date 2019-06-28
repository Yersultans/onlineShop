const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.POST || 5001;

require('./models');

mongoose.connect('mongodb+srv://yers:W0KJcP4J-@cluster0-re8hh.mongodb.net/shop?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', function(){
  console.log("Connected to MongoDB successfully!");
});
db.on('error', function(err){
  console.log("asdadas");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req,res,next){
	next();
});

require('./routes')(app);

app.listen(PORT, function(){
  console.log('server started at port ' + PORT);
})
