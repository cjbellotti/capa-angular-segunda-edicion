const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TopicSchema = new Schema({
	usuario : {
		type : Schema.Types.ObjectId,
		ref : 'UsuarioModel'
	},
	titulo : String,
	fecha : Date,
	mensajes : [{
		type : Schema.Types.ObjectId,
		ref : 'MessageModel'
	}]
});

const TopicModel = mongoose.model('TopicModel', TopicSchema);

module.exports = TopicModel;