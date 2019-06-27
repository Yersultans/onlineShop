const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
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

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);
app.use(function(req,res,next){
	
	next();


});



app.listen(PORT, function(){
    console.log('server started at port ' + PORT);
})
