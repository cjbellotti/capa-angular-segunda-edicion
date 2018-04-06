import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @ViewChild('contenido') contenido : ElementRef;

  expanded : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
  	this.expanded = !this.expanded;
  }

}
