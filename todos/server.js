'use strict';

// Load our Todo Schema
require('./models/todo');

let express = require('express');
let path = require('path');
let engine = require('ejs-locals');

// Controllers
let home = require('./controllers/home.js');
let todos = require('./controllers/todos.js');


// Initialize app
let app = express();

// Add Mongoose
let mongoose = require('mongoose');

let uristring = process.env.MONGODB_URI || 'mongodb://localhost/express-todo';
mongoose.connect(uristring);


// Configurations
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// log errors in dev
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

// Routes
app.get('/', home.index);
app.get('/todos', todos.index);
app.post('/todos/create', todos.create);
app.get('/todos/edit/:id', todos.edit);
app.post('/todos/update/:id', todos.update);
app.get('/todos/destroy/:id', todos.destroy);


// Run the node server
let port = app.get('port');
app.listen(port);
console.log('Express server listening on port ' + port);


















