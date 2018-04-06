const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	nombre : String,
	apellido : String,
	username : String,
	password : String
});

const UsuarioModel = mongoose.model('UsuarioModel', UsuarioSchema);

module.exports = UsuarioModel;
