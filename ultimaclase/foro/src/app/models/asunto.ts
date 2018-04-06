import { Usuario } from './usuario';
import { Mensaje } from './mensaje';

export class Asunto {
	constructor (
			public titulo : string = '',
			public fecha : Date = new Date(),
			public usuario : Usuario = new Usuario(),
			public mensajes : Array<Mensaje> = new Array<Mensaje>(),
			public id : number = 0
		) {}
}