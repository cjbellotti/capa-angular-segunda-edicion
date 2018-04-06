import { Usuario } from '../models/usuario';
import { Asunto } from '../models/asunto';
import { Mensaje } from '../models/mensaje';

export const usuarios = [
	new Usuario(
			'Pedro',
			'Perez',
			'pperez',
			'123456',
			'assets/pperez.png'
		),
	new Usuario(
			'Pablo',
			'Gomez',
			'pgomez',
			'123456',
			'assets/pgomez.png'
		),
	new Usuario(
			'Luis',
			'Suarez',
			'lsuarez',
			'123456',
			'assets/lsuarez.png'
		)	
]

export const asuntos = [
	new Asunto(
			'Como hacer que windows funcione',
			new Date(),
			usuarios[1],
			[
				new Mensaje(
						usuarios[0],
						'No se puede hacer que windows funcione bien, es imposible.',
						new Date()
					),
				new Mensaje(
						usuarios[2],
						'Tenes razon!!!',
						new Date()
					),
			],
			1
		),
	new Asunto(
			'Pantalla azul en el inicio',
			new Date(),
			usuarios[0],
			[
				new Mensaje(
						usuarios[1],
						'Mi mas sentido pesame',
						new Date()
					)
			],
			2
		),
]