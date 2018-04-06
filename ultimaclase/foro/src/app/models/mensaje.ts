import { Usuario } from './usuario';

export class Mensaje {
	constructor(
		public usuario : Usuario = new Usuario(),
		public contenido : string = '',
		public fecha : Date = new Date()
	) {}
}