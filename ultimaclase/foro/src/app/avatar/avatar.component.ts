import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input('imagen') imagen : string = '';
  @Input('nombre') nombre : string = '';

  constructor() { }

  ngOnInit() {
  }

}
