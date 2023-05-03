import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.less']
})
export class AuthFormComponent implements OnInit {

  @Input()
  credentials:any = {}

  @Output()
  onConnecte = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  connect(): void {
    this.onConnecte.emit('connection')
  }

}
