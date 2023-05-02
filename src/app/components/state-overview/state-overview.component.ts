import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/interfaces/state';

@Component({
  selector: 'app-state-overview',
  templateUrl: './state-overview.component.html',
  styleUrls: ['./state-overview.component.less']
})
export class StateOverviewComponent implements OnInit {
  @Input()
  state?:State ;
  constructor() { }
  get percent():string{
    if(!this.state) return '0';
    console.log(`(this.state.last.index * 100 / this.state.all.length) (${this.state.last.index} * 100 / ${this.state.all.length})`,(this.state.last.index * 100 / this.state.all.length))
    return (this.state.last.index * 100 / this.state.all.length) + '';
  }
  ngOnInit(): void {

  }

}
