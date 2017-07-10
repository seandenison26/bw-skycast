const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../skycast/build')));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false}));

//parse application/json
app.use(bodyParser.json());

//sets the the router
app.use('/',router);


//sets port for app to listen on
app.listen(PORT, () => {
	console.log(`Currently runinng on ${PORT}`);
}); 
