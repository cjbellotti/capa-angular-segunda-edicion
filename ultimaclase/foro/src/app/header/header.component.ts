import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('usuario') usuarioActual : Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

}
