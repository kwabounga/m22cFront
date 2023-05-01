import { Component, OnInit, Input } from '@angular/core';
import { HttpActionService } from 'src/app/services/http-action.service';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.less']
})
export class ActionCardComponent implements OnInit {

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

  constructor(private ajax:HttpActionService) { }

  ngOnInit(): void {

  }
  get(){
    this.ajax.getUrl(this.url).subscribe((response)=>{
      console.log(response);
    })
  }
}
