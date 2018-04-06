import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { AsuntoService } from './services/asunto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  usuario : Usuario = new Usuario('Pedro', 'Perez', 'pperez', '123456', 'assets/sample.png');
  asuntoList = [];

  constructor(
  		private _asuntoService : AsuntoService
  	) {}

  ngOnInit() {
  	this._asuntoService.getUltimos10Asuntos()
  		.subscribe(response => {
  			this.asuntoList = response
  	 		console.log(this.asuntoList);
  		});
  }

  responder() {
  	alert('Responder!!!!');
  }

  enviar(contenido : any) {
  	console.log(contenido);
  }

  verAsunto(asuntoId: number) {
  	console.log(asuntoId);
  	// Lo dejo para ustedes que definan la ruta para el componente
  	// asuntos que reciba como query string el id del asunto,
  	// lo cargue llamando al servicio y visualice sus mensajes con
  	// el componente asunto-screen
  }
}
