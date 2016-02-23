'use strict';

let mongoose = require('mongoose');
let Todo = mongoose.model('Todo');

exports.index = (req, res) => {
	Todo.find()
		.sort('-updated_at')
		.exec((err, todos) => {
			if (err) {
				console.log(err);

				return;
			}

			res.render('index', {
				title: 'My Todos',
				todos: todos
			});
		});
};

exports.create = (req, res) => {
	let todo = new Todo({
		content: req.body.content,
		updated_at: Date.now()
	});

	todo.save((err, todo) => {
		if (err) {
			console.log(err);

			return;
		}

		res.redirect('/todos');
	});
};


exports.edit = (req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			console.log(err);

			return;
		}

		res.render('edit', {
			title: 'Edit Todos',
			todo: todo
		});
	});
};

exports.update = (req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			console.log(err);

			return;
		}

		todo.content = req.body.content;
		todo.updated_at = Date.now();

		todo.save((err, todo) => {
			if (err) {
				console.log(err);

				return;
			}

			res.redirect('/todos');
		});

	});
};

exports.destroy = (req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		if (err) {
			console.log(err);

			return;
		}

		todo.remove((err, todo) => {
			if (err) {
				console.log(err);

				return;
			}

			res.redirect('/todos');
		});

	});
};



