'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = new Schema({
	content: String,
	updated_at: Date
});

mongoose.model('Todo', TodoSchema);