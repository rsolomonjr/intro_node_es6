'use strict';

exports.index = (req, res) => {
	res.render('home', {title: 'Todo App', data: 'this is some data'});
}
