const mongoose = require('mongoose');

const Usuario = require('./models/usuario.model');
const Topic = require('./models/topic.model');

const mongoDB = 'mongodb://localhost/foro';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', (e) => console.log(e));
db.on('ready', () => {
	console.log('Connected');
});

var usuario = Usuario({
	nombre : 'Pedro',
	apellido : 'Perez',
	username : 'pperez',
	password : '12345678'
});

console.log(usuario);
usuario.save((err) => {
	if (!err)
		console.log('Usuario creado!!!');
});

setTimeout(() => console.log('Hola'), 10000);