var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema ({
	name: String,
	age: Number
});

var personModel = mongoose.model('Persons', personSchema);

module.exports = personModel;

//se podria haber hecho en model directamente pero se usa schema para poder agregarle metodos definidos por nosotros
