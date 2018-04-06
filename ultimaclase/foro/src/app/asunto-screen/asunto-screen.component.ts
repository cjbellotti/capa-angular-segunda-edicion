import { Component, OnInit, Input } from '@angular/core';
import { Asunto } from '../models/asunto';

@Component({
  selector: 'asunto-screen',
  templateUrl: './asunto-screen.component.html',
  styleUrls: ['./asunto-screen.component.css']
})
export class AsuntoScreenComponent implements OnInit {

  @Input('asunto') asunto : Asunto = new Asunto();

  constructor() { }

  ngOnInit() {
  }

}
