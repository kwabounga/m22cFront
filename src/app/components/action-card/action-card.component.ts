import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { HttpActionService } from 'src/app/services/http-action.service';
import { State } from 'src/app/interfaces/state';
@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.less']
})
export class ActionCardComponent implements OnInit {

  @Input()
  state?:State;

  @Input()
  id:number|string|undefined='';

  @Input()
  url:string='';
  @Input()
  title:string='';
  @Input()
  subTitle:string='';
  @Input()
  description:string='';
  @Input()
  buttonLabel:string='';
  @Input()
  buttonStyle:string='';

  @Output()
  onState = new EventEmitter();

  constructor(private ajax:HttpActionService) { }

  ngOnInit(): void {

  }
  get(){
    this.ajax.getUrl(this.url.replace(':id', this.id?this.id.toString():''), this.state).subscribe((response:State)=>{
      /* let s:State = {
        state: response.state,
        last: response.last,
      } */
      // console.log(s);
      this.onState.emit(response)
    })
  }
}
