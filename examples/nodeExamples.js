/* Simple Node I/O example */

'use strict';

let fs = require('fs');

fs.writeFile('hello.txt', 'Hello Node pt.2', (err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log('File was created successfully!');
});