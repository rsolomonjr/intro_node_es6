/*  JavaScript Refresher Examples */

'use strict';

// Let example
{
  	let a = 1;	
}

console.log(a); // => throws an error


// Const example
const c = true;
c = false; // => throws an erro


// Objects, and fat arrow lexical this
let person = {
				name: "Jamal",
				sayHello: function () { 
					console.log("Hello my name is %s ", this.name); 
				   	
					let whatever = () => {
						console.log(this);
					}

					whatever();
				}
			};
			
person.sayHello();


// IFFE Example with fat arrows
(() => console.log('function ran!'))();


// forEach Fat Arrow example
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

arr.forEach((item, idx) => console.log(item, idx));


// For in example
let obj = {a: 1, b: 2, c: 3}

for (let key in obj) {
	console.log(key);
}


// Class/Prototype Example
function Person(first, last) {
	this.first = first;
	this.last = last;
}

Person.prototype.sayHello = function() { console.log('Hello my name is %s ', this.first); }

let person = new Person('jamal', 'ogarro');
console.log(person);

person.sayHello();

// Class example
class Person {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	sayHello() { 
		console.log('Hello my name is %s ', this.first);
	}
}

let person = new Person('jamal', 'ogarro');
console.log(person);

person.sayHello();


























