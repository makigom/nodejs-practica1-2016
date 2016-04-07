var Person = require('../models/persons');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudtest');

var p = new Person({ name:"Macarena", age:22 });
p.save(function(err, doc){
	console.log(err, doc);
});
