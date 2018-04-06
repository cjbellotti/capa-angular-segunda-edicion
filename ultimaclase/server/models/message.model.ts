const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	usuario : {
		type : Schema.Types.ObjectId,
		ref : 'UsuarioModel'
	},
	date : Date,
	content : String
});

const MessageModel = mongoose.model('MessageModel', MessageSchema);

module.exports = MessageModel;