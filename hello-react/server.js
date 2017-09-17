var express = require('express');


//create the express app
var app = express();


// load folder to show in server
app.use(express.static('public'));

// port configuartion
app.listen(3000,function(){
	console.log('Express server is up on port 3000');
});